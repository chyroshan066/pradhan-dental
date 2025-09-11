import { MediaItem } from "@/types";

export const MEDIA_ITEMS: MediaItem[] = [
    {
        id: 1,
        src: "/images/media/gallery/g1.webp",
        alt: "Meet Dr. Karuna Singh: Expert in Skin, Hair & Laser Treatments",
        title: "Meet Dr. Karuna Singh: Expert in Skin, Hair & Laser Treatments",
        type: "image"
    },
    {
        id: 2,
        src: "/images/media/videos/v1.webm",
        alt: "Professional Mole Removal at Dr. Karuna Skin Center",
        title: "Professional Mole Removal at Dr. Karuna Skin Center",
        type: "video",
        // poster: "/images/gallery/v1-poster.webp" // Optional: thumbnail for the video
    },
    {
        id: 3,
        src: "/images/media/gallery/g2.webp",
        alt: "Meet Dr. Karuna Singh: Expert in Skin, Hair & Laser Treatments",
        title: "Meet Dr. Karuna Singh: Expert in Skin, Hair & Laser Treatments",
        type: "image"
    },
    {
        id: 4,
        src: "/images/media/gallery/g3.webp",
        alt: "Meet Dr. Karuna Singh: Expert in Skin, Hair & Laser Treatments",
        title: "Meet Dr. Karuna Singh: Expert in Skin, Hair & Laser Treatments",
        type: "image"
    },
    {
        id: 5,
        src: "/images/media/gallery/g4.webp",
        alt: "Successful Mole Removal: Post-Procedure Results",
        title: "Successful Mole Removal: Post-Procedure Results",
        type: "image"
    },
    {
        id: 6,
        src: "/images/media/gallery/g5.webp",
        alt: "Successful Cyst Removal: Post-Procedure Results",
        title: "Successful Cyst Removal: Post-Procedure Results",
        type: "image"
    },
    {
        id: 7,
        src: "/images/media/videos/v2.webm",
        alt: "Chin Cyst Removal - Surgical Procedure",
        title: "Chin Cyst Removal - Surgical Procedure",
        type: "video"
    },
    {
        id: 8,
        src: "/images/media/gallery/g6.webp",
        alt: "Meet Dr. Karuna Singh: Expert in Skin, Hair & Laser Treatments",
        title: "Meet Dr. Karuna Singh: Expert in Skin, Hair & Laser Treatments",
        type: "image"
    },
    {
        id: 9,
        src: "/images/media/gallery/g7.webp",
        alt: "Complete Chin Cyst Removal - Specimen Collection",
        title: "Complete Chin Cyst Removal - Specimen Collection",
        type: "image"
    },
    {
        id: 10,
        src: "/images/media/videos/v3.webm",
        alt: "Mole Removal Surgery - Essential Surgical Instruments",
        title: "Mole Removal Surgery - Essential Surgical Instruments",
        type: "video"
    },
    {
        id: 11,
        src: "/images/media/gallery/g8.webp",
        alt: "Successfully Removed Mole - Post-Excision Specimen",
        title: "Successfully Removed Mole - Post-Excision Specimen",
        type: "image"
    },
    {
        id: 12,
        src: "/images/media/gallery/g9.webp",
        alt: "Cyst Removal Procedure - Patient Positioning",
        title: "Cyst Removal Procedure - Patient Positioning",
        type: "image"
    },
    {
        id: 13,
        src: "/images/media/videos/v4.webm",
        alt: "Wound Care After Cyst Excision - Cleaning Procedure",
        title: "Wound Care After Cyst Excision - Cleaning Procedure",
        type: "video"
    },
    {
        id: 14,
        src: "/images/media/videos/v5.webm",
        alt: "Professional Mole Removal at Dr. Karuna Skin Center",
        title: "Professional Mole Removal at Dr. Karuna Skin Center",
        type: "video"
    },
    {
        id: 15,
        src: "/images/media/videos/v6.webm",
        alt: "Chin Cyst Removal - Surgical Procedure",
        title: "Chin Cyst Removal - Surgical Procedure",
        type: "video"
    },
    {
        id: 16,
        src: "/images/media/videos/v7.webm",
        alt: "Professional Mole Removal at Dr. Karuna Skin Centere",
        title: "Professional Mole Removal at Dr. Karuna Skin Center",
        type: "video"
    },
    {
        id: 17,
        src: "/images/media/videos/v8.webm",
        alt: "Chin Cyst Removal - Surgical Procedure",
        title: "Chin Cyst Removal - Surgical Procedure",
        type: "video"
    },
    {
        id: 18,
        src: "/images/media/videos/v9.webm",
        alt: "Professional Mole Removal at Dr. Karuna Skin Centere",
        title: "Professional Mole Removal at Dr. Karuna Skin Centere",
        type: "video"
    },
];

// Legacy export for backward compatibility
export const PHOTOS = MEDIA_ITEMS.filter(item => item.type === 'image');

// Helper functions for filtering media
export const getImages = () => MEDIA_ITEMS.filter(item => item.type === 'image');
export const getVideos = () => MEDIA_ITEMS.filter(item => item.type === 'video');
export const getAllMedia = () => MEDIA_ITEMS;