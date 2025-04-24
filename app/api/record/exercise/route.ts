import { NextRequest, NextResponse } from 'next/server';
const allItems = [
    {
        label: "家事全般（立位・軽い）",
        time: "10 min",
        kcal: "26kcal",
    },
    {
        label: "家事全般（立位・軽い）",
        time: "10 min",
        kcal: "26kcal",
    },
    {
        label: "家事全般（立位・軽い）",
        time: "10 min",
        kcal: "26kcal",
    },
    {
        label: "家事全般（立位・軽い）",
        time: "10 min",
        kcal: "26kcal",
    },
    {
        label: "家事全般（立位・軽い）",
        time: "10 min",
        kcal: "26kcal",
    },
    {
        label: "家事全般（立位・軽い）",
        time: "10 min",
        kcal: "26kcal",
    },
    {
        label: "家事全般（立位・軽い）",
        time: "10 min",
        kcal: "26kcal",
    },
    {
        label: "家事全般（立位・軽い）",
        time: "10 min",
        kcal: "26kcal",
    },
    {
        label: "家事全般（立位・軽い）",
        time: "10 min",
        kcal: "26kcal",
    },
    {
        label: "家事全般（立位・軽い）",
        time: "10 min",
        kcal: "26kcal",
    },
    {
        label: "家事全般（立位・軽い）",
        time: "10 min",
        kcal: "26kcal",
    },
    {
        label: "家事全般（立位・軽い）",
        time: "10 min",
        kcal: "26kcal",
    },
    {
        label: "家事全般（立位・軽い）",
        time: "10 min",
        kcal: "26kcal",
    },
    {
        label: "家事全般（立位・軽い）",
        time: "10 min",
        kcal: "26kcal",
    },
    {
        label: "家事全般（立位・軽い）",
        time: "10 min",
        kcal: "26kcal",
    },
    {
        label: "家事全般（立位・軽い）",
        time: "10 min",
        kcal: "26kcal",
    },
];
const ITEMS_PER_PAGE = 16;
export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const page = parseInt(searchParams.get('page') || '1', 16);
    const totalItems = allItems.length;
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const itemsForPage = allItems.slice(startIndex, endIndex);
    return NextResponse.json({
        items: itemsForPage,
        currentPage: page,
        totalPages: totalPages,
        totalItems: totalItems,
        hasMore: page < totalPages,
    });
}