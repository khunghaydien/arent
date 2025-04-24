import { NextResponse } from 'next/server';
export async function GET() {
    return NextResponse.json({
        data: {
            doughnutChart: {
                date: "05/21",
                percentage: 75,
            },
            lineChart: {
                date: [
                    "6月",
                    "7月",
                    "8月",
                    "9月",
                    "10月",
                    "11月",
                    "12月",
                    "1月",
                    "2月",
                    "3月",
                    "4月",
                    "5月",
                ],
                lineOne: [26, 26, 23, 26, 25, 26, 27, 26, 26, 24, 26, 26],
                lineTwo: [26, 24, 23, 23, 26, 26, 27, 25, 24, 25, 26, 26],
            }
        },
    });
}