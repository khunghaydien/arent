import { SVGProps, useEffect, useState } from "react";

export default function IconMenuNotification({
  ...props
}: SVGProps<SVGSVGElement>) {
  const [messageCount, setMessageCount] = useState<number>(0);

  useEffect(() => {
    const eventSource = new EventSource("/api/sse");

    eventSource.onopen = () => {};

    eventSource.onerror = (error) => {
      eventSource.close();
    };
    eventSource.onmessage = (event) => {
      const receivedData = event.data as string;
      if (receivedData === "tin nhắn tự động sau 1 phút") {
        setMessageCount((prevCount) => prevCount + 1);
      } else if (receivedData.startsWith("Connected! Client ID:")) {
        console.log(
          "Received connection confirmation, counter remains at:",
          messageCount
        );
      } else {
        console.warn("Received unexpected SSE message:", receivedData);
      }
    };
    return () => {
      eventSource.close();
    };
  }, []);

  return (
    <div className="relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        {...props}
      >
        <rect opacity="0.01" width="32" height="32" fill="#FF963C" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M28.5 25.2975H16.0722L8.07178 31V25.2975H3.5V3H28.5V25.2975H28.5ZM26.2142 5.27186H5.78577V23.0256H10.3576V26.5755L15.3374 23.0256H26.2142V5.27186ZM17.3634 13.391V19.9249H14.7335V13.391H17.3634ZM16.048 11.4314C16.9555 11.4314 17.6913 10.6998 17.6913 9.79798C17.6913 8.896 16.9555 8.16444 16.048 8.16444C15.1405 8.16444 14.4044 8.89601 14.4044 9.79798C14.4044 10.6998 15.1405 11.4314 16.048 11.4314Z"
          fill="#FF963C"
        />
      </svg>
      <div className="absolute top-0 right-[-5px] w-4 h-4 rounded-full bg-primary-500 text-white text-[10px] flex justify-center items-center">
        {messageCount}
      </div>
    </div>
  );
}
