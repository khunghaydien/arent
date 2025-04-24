import { NextRequest } from 'next/server';
const clients = new Map<string, ReadableStreamDefaultController>();
let intervalId: NodeJS.Timeout | null = null;
const INTERVAL_TIME = 60 * 1000;
function broadcastMessage() {
    const message = "tin nhắn tự động sau 1 phút";
    const formattedMessage = `data: ${message}\n\n`;

    if (clients.size === 0) {
        return;
    }

    const clientsToRemove: string[] = [];

    clients.forEach((controller, clientId) => {
        try {
            controller.enqueue(new TextEncoder().encode(formattedMessage));
        } catch (error) {
            clientsToRemove.push(clientId);
            try { controller.close(); } catch { }
        }
    });

    clientsToRemove.forEach(clientId => {
        clients.delete(clientId);
    });

    if (clients.size === 0 && intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    }
}

function startIntervalIfNeeded() {
    if (!intervalId && clients.size > 0) {
        broadcastMessage();
        intervalId = setInterval(broadcastMessage, INTERVAL_TIME);
    }
}

export async function GET(request: NextRequest) {
    const stream = new ReadableStream({
        start(controller) {
            const clientId = `client-${Date.now()}-${Math.random().toString(36).substring(2, 8)}`;
            clients.set(clientId, controller);
            controller.enqueue(new TextEncoder().encode(`data: Connected! Client ID: ${clientId}\n\n`));
            startIntervalIfNeeded();
            request.signal.onabort = () => {
                clients.delete(clientId);
                try { controller.close(); } catch { }
                if (clients.size === 0 && intervalId) {
                    clearInterval(intervalId);
                    intervalId = null;
                }
            };
        },
    });

    return new Response(stream, {
        headers: {
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
        },
    });
}