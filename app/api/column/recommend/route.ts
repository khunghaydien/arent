import { NextRequest, NextResponse } from 'next/server';
const allItems = [
    {
        recommend: "recommendColumn",
        src: "/image/column-1.jpg",
        alt: "column-1",
        date: "2021.05.17",
        time: "23:25",
        comment:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
        hashtag: ["魚料理", "和食", "DHA"],
    },
    {
        recommend: "recommendColumn",
        src: "/image/column-2.jpg",
        alt: "column-2",
        date: "2021.05.17",
        time: "23:25",
        comment:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
        hashtag: ["魚料理", "和食", "DHA"],
    },

    {
        recommend: "recommendColumn",
        src: "/image/column-3.jpg",
        alt: "column-3",
        date: "2021.05.17",
        time: "23:25",
        comment:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
        hashtag: ["魚料理", "和食", "DHA"],
    },
    {
        recommend: "recommendColumn",
        src: "/image/column-4.jpg",
        alt: "column-4",
        date: "2021.05.17",
        time: "23:25",
        comment:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
        hashtag: ["魚料理", "和食", "DHA"],
    },
    {
        recommend: "recommendColumn",
        src: "/image/column-5.jpg",
        alt: "column-5",
        date: "2021.05.17",
        time: "23:25",
        comment:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
        hashtag: ["魚料理", "和食", "DHA"],
    },
    {
        recommend: "recommendColumn",
        src: "/image/column-6.jpg",
        alt: "column-6",
        date: "2021.05.17",
        time: "23:25",
        comment:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
        hashtag: ["魚料理", "和食", "DHA"],
    },
    {
        recommend: "recommendColumn",
        src: "/image/column-7.jpg",
        alt: "column-7",
        date: "2021.05.17",
        time: "23:25",
        comment:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
        hashtag: ["魚料理", "和食", "DHA"],
    },
    {
        recommend: "recommendColumn",
        src: "/image/column-8.jpg",
        alt: "column-8",
        date: "2021.05.17",
        time: "23:25",
        comment:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
        hashtag: ["魚料理", "和食", "DHA"],
    },
    {
        recommend: "recommendColumn",
        src: "/image/column-1.jpg",
        alt: "column-1",
        date: "2021.05.17",
        time: "23:25",
        comment:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
        hashtag: ["魚料理", "和食", "DHA"],
    },
    {
        recommend: "recommendColumn",
        src: "/image/column-2.jpg",
        alt: "column-2",
        date: "2021.05.17",
        time: "23:25",
        comment:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
        hashtag: ["魚料理", "和食", "DHA"],
    },

    {
        recommend: "recommendDiet",
        src: "/image/column-3.jpg",
        alt: "column-3",
        date: "2021.05.17",
        time: "23:25",
        comment:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
        hashtag: ["魚料理", "和食", "DHA"],
    },
    {
        recommend: "recommendDiet",
        src: "/image/column-4.jpg",
        alt: "column-4",
        date: "2021.05.17",
        time: "23:25",
        comment:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
        hashtag: ["魚料理", "和食", "DHA"],
    },
    {
        recommend: "recommendDiet",
        src: "/image/column-5.jpg",
        alt: "column-5",
        date: "2021.05.17",
        time: "23:25",
        comment:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
        hashtag: ["魚料理", "和食", "DHA"],
    },
    {
        recommend: "recommendDiet",
        src: "/image/column-6.jpg",
        alt: "column-6",
        date: "2021.05.17",
        time: "23:25",
        comment:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
        hashtag: ["魚料理", "和食", "DHA"],
    },
    {
        recommend: "recommendDiet",
        src: "/image/column-7.jpg",
        alt: "column-7",
        date: "2021.05.17",
        time: "23:25",
        comment:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
        hashtag: ["魚料理", "和食", "DHA"],
    },
    {
        recommend: "recommendDiet",
        src: "/image/column-8.jpg",
        alt: "column-8",
        date: "2021.05.17",
        time: "23:25",
        comment:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
        hashtag: ["魚料理", "和食", "DHA"],
    },


    {
        recommend: "recommendDiet",
        src: "/image/column-1.jpg",
        alt: "column-1",
        date: "2021.05.17",
        time: "23:25",
        comment:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
        hashtag: ["魚料理", "和食", "DHA"],
    },
    {
        recommend: "recommendDiet",
        src: "/image/column-2.jpg",
        alt: "column-2",
        date: "2021.05.17",
        time: "23:25",
        comment:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
        hashtag: ["魚料理", "和食", "DHA"],
    },

    {
        recommend: "recommendDiet",
        src: "/image/column-3.jpg",
        alt: "column-3",
        date: "2021.05.17",
        time: "23:25",
        comment:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
        hashtag: ["魚料理", "和食", "DHA"],
    },
    {
        recommend: "recommendDiet",
        src: "/image/column-4.jpg",
        alt: "column-4",
        date: "2021.05.17",
        time: "23:25",
        comment:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
        hashtag: ["魚料理", "和食", "DHA"],
    },
    {
        recommend: "recommendDiet",
        src: "/image/column-5.jpg",
        alt: "column-5",
        date: "2021.05.17",
        time: "23:25",
        comment:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
        hashtag: ["魚料理", "和食", "DHA"],
    },
    {
        recommend: "recommendDiet",
        src: "/image/column-6.jpg",
        alt: "column-6",
        date: "2021.05.17",
        time: "23:25",
        comment:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
        hashtag: ["魚料理", "和食", "DHA"],
    },
    {
        recommend: "recommendDiet",
        src: "/image/column-7.jpg",
        alt: "column-7",
        date: "2021.05.17",
        time: "23:25",
        comment:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
        hashtag: ["魚料理", "和食", "DHA"],
    },
    {
        recommend: "recommendDiet",
        src: "/image/column-8.jpg",
        alt: "column-8",
        date: "2021.05.17",
        time: "23:25",
        comment:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
        hashtag: ["魚料理", "和食", "DHA"],
    },
    {
        recommend: "recommendDiet",
        src: "/image/column-1.jpg",
        alt: "column-1",
        date: "2021.05.17",
        time: "23:25",
        comment:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
        hashtag: ["魚料理", "和食", "DHA"],
    },
    {
        recommend: "recommendDiet",
        src: "/image/column-2.jpg",
        alt: "column-2",
        date: "2021.05.17",
        time: "23:25",
        comment:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
        hashtag: ["魚料理", "和食", "DHA"],
    },

    {
        recommend: "recommendDiet",
        src: "/image/column-3.jpg",
        alt: "column-3",
        date: "2021.05.17",
        time: "23:25",
        comment:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
        hashtag: ["魚料理", "和食", "DHA"],
    },
    {
        recommend: "recommendDiet",
        src: "/image/column-4.jpg",
        alt: "column-4",
        date: "2021.05.17",
        time: "23:25",
        comment:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
        hashtag: ["魚料理", "和食", "DHA"],
    },
    {
        recommend: "recommendDiet",
        src: "/image/column-5.jpg",
        alt: "column-5",
        date: "2021.05.17",
        time: "23:25",
        comment:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
        hashtag: ["魚料理", "和食", "DHA"],
    },
    {
        recommend: "recommendDiet",
        src: "/image/column-6.jpg",
        alt: "column-6",
        date: "2021.05.17",
        time: "23:25",
        comment:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
        hashtag: ["魚料理", "和食", "DHA"],
    },
    {
        recommend: "recommendDiet",
        src: "/image/column-7.jpg",
        alt: "column-7",
        date: "2021.05.17",
        time: "23:25",
        comment:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
        hashtag: ["魚料理", "和食", "DHA"],
    },
    {
        recommend: "recommendColumn",
        src: "/image/column-8.jpg",
        alt: "column-8",
        date: "2021.05.17",
        time: "23:25",
        comment:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
        hashtag: ["魚料理", "和食", "DHA"],
    },

    {
        recommend: "recommendHealth",
        src: "/image/column-4.jpg",
        alt: "column-4",
        date: "2021.05.17",
        time: "23:25",
        comment:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
        hashtag: ["魚料理", "和食", "DHA"],
    },
    {
        recommend: "recommendBeauty",
        src: "/image/column-5.jpg",
        alt: "column-5",
        date: "2021.05.17",
        time: "23:25",
        comment:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
        hashtag: ["魚料理", "和食", "DHA"],
    },
    {
        recommend: "recommendBeauty",
        src: "/image/column-6.jpg",
        alt: "column-6",
        date: "2021.05.17",
        time: "23:25",
        comment:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
        hashtag: ["魚料理", "和食", "DHA"],
    },
    {
        recommend: "recommendBeauty",
        src: "/image/column-7.jpg",
        alt: "column-7",
        date: "2021.05.17",
        time: "23:25",
        comment:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
        hashtag: ["魚料理", "和食", "DHA"],
    },
    {
        recommend: "recommendBeauty",
        src: "/image/column-8.jpg",
        alt: "column-8",
        date: "2021.05.17",
        time: "23:25",
        comment:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
        hashtag: ["魚料理", "和食", "DHA"],
    },


    {
        recommend: "recommendBeauty",
        src: "/image/column-1.jpg",
        alt: "column-1",
        date: "2021.05.17",
        time: "23:25",
        comment:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
        hashtag: ["魚料理", "和食", "DHA"],
    },
    {
        recommend: "recommendBeauty",
        src: "/image/column-2.jpg",
        alt: "column-2",
        date: "2021.05.17",
        time: "23:25",
        comment:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
        hashtag: ["魚料理", "和食", "DHA"],
    },

    {
        recommend: "recommendBeauty",
        src: "/image/column-3.jpg",
        alt: "column-3",
        date: "2021.05.17",
        time: "23:25",
        comment:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
        hashtag: ["魚料理", "和食", "DHA"],
    },
    {
        recommend: "recommendBeauty",
        src: "/image/column-4.jpg",
        alt: "column-4",
        date: "2021.05.17",
        time: "23:25",
        comment:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
        hashtag: ["魚料理", "和食", "DHA"],
    },
    {
        recommend: "recommendBeauty",
        src: "/image/column-5.jpg",
        alt: "column-5",
        date: "2021.05.17",
        time: "23:25",
        comment:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
        hashtag: ["魚料理", "和食", "DHA"],
    },
    {
        recommend: "recommendBeauty",
        src: "/image/column-6.jpg",
        alt: "column-6",
        date: "2021.05.17",
        time: "23:25",
        comment:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
        hashtag: ["魚料理", "和食", "DHA"],
    },
    {
        recommend: "recommendBeauty",
        src: "/image/column-7.jpg",
        alt: "column-7",
        date: "2021.05.17",
        time: "23:25",
        comment:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
        hashtag: ["魚料理", "和食", "DHA"],
    },
    {
        recommend: "recommendBeauty",
        src: "/image/column-8.jpg",
        alt: "column-8",
        date: "2021.05.17",
        time: "23:25",
        comment:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
        hashtag: ["魚料理", "和食", "DHA"],
    },
    {
        recommend: "recommendBeauty",
        src: "/image/column-1.jpg",
        alt: "column-1",
        date: "2021.05.17",
        time: "23:25",
        comment:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
        hashtag: ["魚料理", "和食", "DHA"],
    },
    {
        recommend: "recommendBeauty",
        src: "/image/column-2.jpg",
        alt: "column-2",
        date: "2021.05.17",
        time: "23:25",
        comment:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
        hashtag: ["魚料理", "和食", "DHA"],
    },

    {
        recommend: "recommendBeauty",
        src: "/image/column-3.jpg",
        alt: "column-3",
        date: "2021.05.17",
        time: "23:25",
        comment:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
        hashtag: ["魚料理", "和食", "DHA"],
    },
    {
        recommend: "recommendBeauty",
        src: "/image/column-4.jpg",
        alt: "column-4",
        date: "2021.05.17",
        time: "23:25",
        comment:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
        hashtag: ["魚料理", "和食", "DHA"],
    },
    {
        recommend: "recommendBeauty",
        src: "/image/column-5.jpg",
        alt: "column-5",
        date: "2021.05.17",
        time: "23:25",
        comment:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
        hashtag: ["魚料理", "和食", "DHA"],
    },
    {
        recommend: "recommendBeauty",
        src: "/image/column-6.jpg",
        alt: "column-6",
        date: "2021.05.17",
        time: "23:25",
        comment:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
        hashtag: ["魚料理", "和食", "DHA"],
    },
    {
        recommend: "recommendDiet",
        src: "/image/column-7.jpg",
        alt: "column-7",
        date: "2021.05.17",
        time: "23:25",
        comment:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
        hashtag: ["魚料理", "和食", "DHA"],
    },
    {
        recommend: "recommendColumn",
        src: "/image/column-8.jpg",
        alt: "column-8",
        date: "2021.05.17",
        time: "23:25",
        comment:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
        hashtag: ["魚料理", "和食", "DHA"],
    },
    {
        recommend: "recommendBeauty",
        src: "/image/column-4.jpg",
        alt: "column-4",
        date: "2021.05.17",
        time: "23:25",
        comment:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
        hashtag: ["魚料理", "和食", "DHA"],
    },
    {
        recommend: "recommendBeauty",
        src: "/image/column-5.jpg",
        alt: "column-5",
        date: "2021.05.17",
        time: "23:25",
        comment:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
        hashtag: ["魚料理", "和食", "DHA"],
    },
    {
        recommend: "recommendHealth",
        src: "/image/column-6.jpg",
        alt: "column-6",
        date: "2021.05.17",
        time: "23:25",
        comment:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
        hashtag: ["魚料理", "和食", "DHA"],
    },
    {
        recommend: "recommendHealth",
        src: "/image/column-7.jpg",
        alt: "column-7",
        date: "2021.05.17",
        time: "23:25",
        comment:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
        hashtag: ["魚料理", "和食", "DHA"],
    },
    {
        recommend: "recommendHealth",
        src: "/image/column-8.jpg",
        alt: "column-8",
        date: "2021.05.17",
        time: "23:25",
        comment:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
        hashtag: ["魚料理", "和食", "DHA"],
    },


    {
        recommend: "recommendHealth",
        src: "/image/column-1.jpg",
        alt: "column-1",
        date: "2021.05.17",
        time: "23:25",
        comment:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
        hashtag: ["魚料理", "和食", "DHA"],
    },
    {
        recommend: "recommendHealth",
        src: "/image/column-2.jpg",
        alt: "column-2",
        date: "2021.05.17",
        time: "23:25",
        comment:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
        hashtag: ["魚料理", "和食", "DHA"],
    },

    {
        recommend: "recommendHealth",
        src: "/image/column-3.jpg",
        alt: "column-3",
        date: "2021.05.17",
        time: "23:25",
        comment:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
        hashtag: ["魚料理", "和食", "DHA"],
    },
    {
        recommend: "recommendHealth",
        src: "/image/column-4.jpg",
        alt: "column-4",
        date: "2021.05.17",
        time: "23:25",
        comment:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
        hashtag: ["魚料理", "和食", "DHA"],
    },
    {
        recommend: "recommendHealth",
        src: "/image/column-5.jpg",
        alt: "column-5",
        date: "2021.05.17",
        time: "23:25",
        comment:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
        hashtag: ["魚料理", "和食", "DHA"],
    },
    {
        recommend: "recommendHealth",
        src: "/image/column-6.jpg",
        alt: "column-6",
        date: "2021.05.17",
        time: "23:25",
        comment:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
        hashtag: ["魚料理", "和食", "DHA"],
    },
    {
        recommend: "recommendHealth",
        src: "/image/column-7.jpg",
        alt: "column-7",
        date: "2021.05.17",
        time: "23:25",
        comment:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
        hashtag: ["魚料理", "和食", "DHA"],
    },
    {
        recommend: "recommendHealth",
        src: "/image/column-8.jpg",
        alt: "column-8",
        date: "2021.05.17",
        time: "23:25",
        comment:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
        hashtag: ["魚料理", "和食", "DHA"],
    },
    {
        recommend: "recommendHealth",
        src: "/image/column-1.jpg",
        alt: "column-1",
        date: "2021.05.17",
        time: "23:25",
        comment:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
        hashtag: ["魚料理", "和食", "DHA"],
    },
    {
        recommend: "recommendHealth",
        src: "/image/column-2.jpg",
        alt: "column-2",
        date: "2021.05.17",
        time: "23:25",
        comment:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
        hashtag: ["魚料理", "和食", "DHA"],
    },

    {
        recommend: "recommendHealth",
        src: "/image/column-3.jpg",
        alt: "column-3",
        date: "2021.05.17",
        time: "23:25",
        comment:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
        hashtag: ["魚料理", "和食", "DHA"],
    },
    {
        recommend: "recommendHealth",
        src: "/image/column-4.jpg",
        alt: "column-4",
        date: "2021.05.17",
        time: "23:25",
        comment:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
        hashtag: ["魚料理", "和食", "DHA"],
    },
    {
        recommend: "recommendHealth",
        src: "/image/column-5.jpg",
        alt: "column-5",
        date: "2021.05.17",
        time: "23:25",
        comment:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
        hashtag: ["魚料理", "和食", "DHA"],
    },
    {
        recommend: "recommendHealth",
        src: "/image/column-6.jpg",
        alt: "column-6",
        date: "2021.05.17",
        time: "23:25",
        comment:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
        hashtag: ["魚料理", "和食", "DHA"],
    },
    {
        recommend: "recommendDiet",
        src: "/image/column-7.jpg",
        alt: "column-7",
        date: "2021.05.17",
        time: "23:25",
        comment:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
        hashtag: ["魚料理", "和食", "DHA"],
    },
    {
        recommend: "recommendColumn",
        src: "/image/column-8.jpg",
        alt: "column-8",
        date: "2021.05.17",
        time: "23:25",
        comment:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
        hashtag: ["魚料理", "和食", "DHA"],
    },
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
            const lowerCaseLabel = item.recommend.toLowerCase();
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