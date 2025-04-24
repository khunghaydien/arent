import { NextRequest, NextResponse } from 'next/server';
const allItems = [
    { id: 1, src: "/image/m01.jpg", alt: "m01", date: "05.21", meal: "Morning" },
    { id: 2, src: "/image/l01.jpg", alt: "l01", date: "05.21", meal: "Lunch" },
    { id: 3, src: "/image/d01.jpg", alt: "d01", date: "05.21", meal: "Dinner" },
    { id: 4, src: "/image/s01.jpg", alt: "s01", date: "05.21", meal: "Snack" },
    { id: 5, src: "/image/m02.jpg", alt: "m02", date: "05.20", meal: "Morning" },
    { id: 6, src: "/image/l02.jpg", alt: "l02", date: "05.20", meal: "Lunch" },
    { id: 7, src: "/image/d02.jpg", alt: "d02", date: "05.20", meal: "Dinner" },
    { id: 8, src: "/image/l03.jpg", alt: "l03", date: "05.20", meal: "Snack" },
    { id: 9, src: "/image/m01.jpg", alt: "m01", date: "05.21", meal: "Morning" },
    { id: 10, src: "/image/l01.jpg", alt: "l01", date: "05.21", meal: "Lunch" },
    { id: 11, src: "/image/d01.jpg", alt: "d01", date: "05.21", meal: "Dinner" },
    { id: 12, src: "/image/s01.jpg", alt: "s01", date: "05.21", meal: "Snack" },
    { id: 13, src: "/image/m02.jpg", alt: "m02", date: "05.20", meal: "Morning" },
    { id: 14, src: "/image/l02.jpg", alt: "l02", date: "05.20", meal: "Lunch" },
    { id: 15, src: "/image/d02.jpg", alt: "d02", date: "05.20", meal: "Dinner" },
    { id: 16, src: "/image/l03.jpg", alt: "l03", date: "05.20", meal: "Snack" },
];
const ITEMS_PER_PAGE = 8;
export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const page = parseInt(searchParams.get('page') || '1', 10);
    const keywords = searchParams.getAll('keywords') || [];
    const lowerCaseKeywords = keywords.map(kw => kw.toLowerCase());
    console.log(`API Received - Page: ${page}, Keywords: ${keywords}`);
    const filteredItems = lowerCaseKeywords.length > 0
        ? allItems.filter(item => {
            const lowerCaseLabel = item.meal.toLowerCase();
            return lowerCaseKeywords.some(keyword => lowerCaseLabel.includes(keyword));
        })
        : allItems;
    const totalItems = filteredItems.length;
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const itemsForPage = filteredItems.slice(startIndex, endIndex);
    return NextResponse.json({
        items: itemsForPage,
        currentPage: page,
        totalPages: totalPages,
        totalItems: totalItems,
        hasMore: page < totalPages,
    });
}