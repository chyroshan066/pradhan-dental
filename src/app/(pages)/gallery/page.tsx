import { MEDIA_ITEMS } from '@/constants/gallery';
import Gallery from './_components/Gallery/Gallery';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Pradhan Dental Gallery - Modern Dental Clinic Facilities in Birtamode",
  description: "Explore Pradhan Dental's state-of-the-art facilities in Birtamode, Nepal. View our modern dental equipment, comfortable treatment rooms, sterilization facilities, and patient-friendly environment designed for quality dental care.",
  keywords: [
    "Pradhan Dental gallery",
    "dental clinic photos Birtamode",
    "modern dental equipment",
    "dental facility Birtamode",
    "dental clinic interior",
    "sterilization facilities",
    "comfortable dental environment",
    "advanced dental technology",
    "dental treatment rooms",
    "clinic facilities Nepal",
    "dental equipment photos",
    "professional dental setup",
    "clean dental clinic",
    "patient comfort facilities",
    "dental office tour",
    "clinic atmosphere",
    "dental workspace",
    "hygienic dental clinic",
    "dental clinic amenities",
    "Birtamode dental facilities"
  ],
  authors: [{ name: "Pradhan Dental" }],
  creator: "Pradhan Dental",
  publisher: "Pradhan Dental",
  metadataBase: new URL("https://pradhandental.com"),
  alternates: {
    canonical: "/gallery",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large", // Important for gallery images
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Pradhan Dental Gallery - Modern Facilities & Equipment",
    description: "Take a virtual tour of Pradhan Dental's modern facilities in Birtamode. See our advanced dental equipment, comfortable treatment rooms, and patient-centered environment.",
    type: "website",
    locale: "en_US",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/gallery`,
    siteName: "Pradhan Dental",
    images: [
      {
        url: "/images/preview.webp",
        width: 1200,
        height: 630,
        alt: "Pradhan Dental Clinic Facilities and Equipment Gallery",
      },
    ],
  },
  other: {
    "og:image:type": "image/webp",
    "twitter:card": "summary_large_image",
    "twitter:title": "Pradhan Dental Gallery - Modern Facilities",
    "twitter:description": "Explore our state-of-the-art dental facilities and equipment in Birtamode, Nepal",
    "twitter:image": "/images/preview.webp",
  },
  category: "health",
  classification: "Dental Clinic Gallery",
  referrer: "origin-when-cross-origin",
  applicationName: "Pradhan Dental",
  generator: "Next.js",
};

export default function GalleryPage() {
  return (
    <main>
      <Gallery
        mediaItems={MEDIA_ITEMS}
      />
    </main>
  );
}