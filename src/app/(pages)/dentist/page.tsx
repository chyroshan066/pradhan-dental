import { Metadata } from "next";
import { Dentist } from "./_components/Dentist/Dentist";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export const metadata: Metadata = {
    title: "Meet Dr. Mukesh Kumar Shah - Lead Dentist at Pradhan Dental",
    description: "Learn about Dr. Mukesh Kumar Shah, lead dentist at Pradhan Dental in Birtamode, Nepal. With 8+ years of experience in advanced dental care, specializing in dental implants, cosmetic dentistry, and comprehensive oral health treatments.",
    keywords: [
        "Dr. Mukesh Kumar Shah dentist",
        "lead dentist Pradhan Dental",
        "experienced dentist Birtamode",
        "dental specialist Nepal",
        "dentist biography",
        "qualified dentist Birtamode",
        "dental expert Nepal",
        "professional dentist Birtamode",
        "certified dentist",
        "dental surgeon Birtamode",
        "cosmetic dentist specialist",
        "implant dentist expert",
        "orthodontic specialist",
        "root canal specialist",
        "dental qualifications",
        "dentist credentials",
        "best dentist Birtamode",
        "experienced dental care",
        "dental professional Nepal",
        "Pradhan Dental team"
    ],
    authors: [{ name: "Pradhan Dental" }],
    creator: "Pradhan Dental",
    publisher: "Pradhan Dental",
    metadataBase: new URL("https://pradhandental.com"),
    alternates: {
        canonical: "/dentist",
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
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    openGraph: {
        title: "Meet Dr. Mukesh Kumar Shah - Lead Dentist at Pradhan Dental",
        description: "Discover the expertise and qualifications of Dr. Mukesh Kumar Shah, our lead dentist with 8+ years of experience in advanced dental care, serving patients in Birtamode and surrounding areas.",
        type: "profile",
        locale: "en_US",
        url: `${baseURL}/dentist`,
        siteName: "Pradhan Dental",
        images: [
            {
                url: `${baseURL}/images/cta-baner.webp`,
                width: 1200,
                height: 630,
                alt: "Dr. Mukesh Kumar Shah - Lead Dentist at Pradhan Dental",
            }
        ],
    },
    other: {
        "profile:first_name": "Mukesh",
        "profile:last_name": "Shah",
        "profile:username": "dr-mukesh-kumar-shah-pradhan-dental",
    },
    category: "health",
    classification: "Dental Professional Profile",
    referrer: "origin-when-cross-origin",
    applicationName: "Pradhan Dental",
    generator: "Next.js",
};

export default function DentistPage() {
    return <Dentist />;
}