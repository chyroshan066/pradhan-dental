interface PostalAddress {
  "@type": "PostalAddress";
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  addressCountry: string;
}

interface AggregateRating {
  "@type": "AggregateRating";
  ratingValue: string;
  ratingCount: string;
}

interface GeoCoordinates {
  "@type": "GeoCoordinates";
  latitude: string;
  longitude: string;
}

interface EntryPoint {
  "@type": "EntryPoint";
  urlTemplate: string;
}

interface Appointment {
  "@type": "Appointment";
  name: string;
}

interface ScheduleAction {
  "@type": "ScheduleAction";
  target: EntryPoint;
  result: Appointment;
}

interface AnatomicalStructure {
  "@type": "AnatomicalStructure";
  name: string;
}

interface MedicalProcedure {
  "@type": "MedicalProcedure";
  name: string;
  description: string;
  procedureType: string;
  bodyLocation: AnatomicalStructure;
}

interface MedicalSpecialty {
  "@type": "MedicalSpecialty";
  name: string;
  description: string;
  includedServices: string[];
}

interface ListItem {
  "@type": "ListItem";
  position: number;
  item: MedicalSpecialty;
}

interface MedicalBusinessStructuredData {
  "@context": "https://schema.org";
  "@type": "MedicalBusiness";
  name: string;
  description: string;
  url: string | undefined;
  address: PostalAddress;
  telephone: string;
  email: string;
  openingHours: string[];
  medicalSpecialty: string[];
  priceRange: string;
  aggregateRating: AggregateRating;
  geo: GeoCoordinates;
  sameAs: string[];
  potentialAction: ScheduleAction;
}

interface MedicalServicesStructuredData {
  "@context": "https://schema.org";
  "@type": "MedicalBusiness";
  name: string;
  description: string;
  availableService: MedicalProcedure[];
}

interface SpecialtiesStructuredData {
  "@context": "https://schema.org";
  "@type": "ItemList";
  name: string;
  description: string;
  itemListElement: ListItem[];
}

export const skinHairClinicStructuredData: MedicalBusinessStructuredData = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Dr. Karuna's Skin Hair & Laser Centre", 
  "description": "Professional dermatology and cosmetic treatment services specializing in skin care, hair restoration, laser treatments, and aesthetic procedures. Advanced technology, experienced specialists, and comprehensive beauty solutions.", 
  "url": process.env.NEXT_PUBLIC_BASE_URL,
  
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Putali Line",
    "addressLocality": "Dharan",
    "addressRegion": "Koshi Province",
    "postalCode": "56700",
    "addressCountry": "NP"
  },
  
  "telephone": "+977-9811316273",
  "email": "drkaruna.clinic@gmail.com",
  
  "openingHours": [
    "Su-Fr 8:00-19:00",
  ],
  
  "medicalSpecialty": [
    "Dermatology", 
    "Cosmetic Surgery", 
    "Laser Medicine", 
    "Hair Restoration", 
    "Aesthetic Medicine"
  ],
  "priceRange": "$$$",
  
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.6",
    "ratingCount": "14"
  },
  
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "26.81239", 
    "longitude": "87.28110"
  },
  
  "sameAs": [
    "https://www.facebook.com/drkarunasskinclinic#",
    "https://www.instagram.com/dr.karunasingh/",
    "https://www.tiktok.com/@drkarunaofficial?_t=ZS-8zYjc3a6LfU"
  ],
  
  "potentialAction": {
    "@type": "ScheduleAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${process.env.NEXT_PUBLIC_BASE_URL}/#contact`
    },
    "result": {
      "@type": "Appointment",
      "name": "Consultation Appointment"
    }
  }
};

export const skinHairServicesStructuredData: MedicalServicesStructuredData = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Dr. Karuna's Skin Hair & Laser Centre",
  "description": "Comprehensive dermatological and aesthetic treatments including surgical procedures, laser treatments, cosmetic enhancements, and hair restoration",
  
  "availableService": [
    {
      "@type": "MedicalProcedure",
      "name": "Mole Removal",
      "description": "Safe surgical removal of moles for cosmetic or medical reasons using advanced techniques.",
      "procedureType": "Dermatological Surgery",
      "bodyLocation": {
        "@type": "AnatomicalStructure",
        "name": "Skin"
      }
    },
    {
      "@type": "MedicalProcedure",
      "name": "Wart Removal",
      "description": "Effective treatment to remove viral warts using various medical techniques including cryotherapy and laser.",
      "procedureType": "Dermatological Treatment",
      "bodyLocation": {
        "@type": "AnatomicalStructure",
        "name": "Skin"
      }
    },
    {
      "@type": "MedicalProcedure",
      "name": "Skin Tag Removal",
      "description": "Quick, painless removal of benign skin tags for smoother skin appearance using precision techniques.",
      "procedureType": "Minor Surgery",
      "bodyLocation": {
        "@type": "AnatomicalStructure",
        "name": "Skin"
      }
    },
    {
      "@type": "MedicalProcedure",
      "name": "Corn Removal",
      "description": "Professional removal of painful corns to restore foot comfort and mobility through podiatric care.",
      "procedureType": "Podiatric Treatment",
      "bodyLocation": {
        "@type": "AnatomicalStructure",
        "name": "Feet"
      }
    },
    {
      "@type": "MedicalProcedure",
      "name": "Split Ear Lobe Repair",
      "description": "Surgical repair of torn or stretched earlobes for natural appearance restoration with minimal scarring.",
      "procedureType": "Reconstructive Surgery",
      "bodyLocation": {
        "@type": "AnatomicalStructure",
        "name": "Ear Lobe"
      }
    },
    {
      "@type": "MedicalProcedure",
      "name": "Medipeel",
      "description": "Professional chemical peel treatment to rejuvenate and improve skin texture, reducing fine lines and pigmentation.",
      "procedureType": "Chemical Peel",
      "bodyLocation": {
        "@type": "AnatomicalStructure",
        "name": "Facial Skin"
      }
    },
    {
      "@type": "MedicalProcedure",
      "name": "PRP Treatment",
      "description": "Platelet-rich plasma injections to stimulate natural hair growth and thickness using your own blood platelets.",
      "procedureType": "Regenerative Medicine",
      "bodyLocation": {
        "@type": "AnatomicalStructure",
        "name": "Scalp"
      }
    },
    {
      "@type": "MedicalProcedure",
      "name": "GFC Treatment",
      "description": "Growth factor concentrate therapy to promote natural hair regrowth and density through advanced biotechnology.",
      "procedureType": "Hair Restoration",
      "bodyLocation": {
        "@type": "AnatomicalStructure",
        "name": "Scalp"
      }
    },
    {
      "@type": "MedicalProcedure",
      "name": "Acne Scar Treatment",
      "description": "Advanced treatments to reduce acne scars and restore smooth skin texture using laser and micro-needling techniques.",
      "procedureType": "Scar Revision",
      "bodyLocation": {
        "@type": "AnatomicalStructure",
        "name": "Facial Skin"
      }
    },
    {
      "@type": "MedicalProcedure",
      "name": "Botox",
      "description": "Injectable treatment to reduce wrinkles and achieve smoother facial appearance by relaxing facial muscles.",
      "procedureType": "Injectable Treatment",
      "bodyLocation": {
        "@type": "AnatomicalStructure",
        "name": "Facial Muscles"
      }
    },
    {
      "@type": "MedicalProcedure",
      "name": "Fillers",
      "description": "Injectable treatments to restore facial volume and enhance natural contours using hyaluronic acid.",
      "procedureType": "Cosmetic Injectable",
      "bodyLocation": {
        "@type": "AnatomicalStructure",
        "name": "Face"
      }
    },
    {
      "@type": "MedicalProcedure",
      "name": "Thread Lift",
      "description": "Non-surgical lifting procedure using PDO threads to tighten and rejuvenate skin with immediate results.",
      "procedureType": "Non-Surgical Facelift",
      "bodyLocation": {
        "@type": "AnatomicalStructure",
        "name": "Face and Neck"
      }
    },
    {
      "@type": "MedicalProcedure",
      "name": "Skin Boosters Treatment",
      "description": "Hydrating injections to improve skin texture, elasticity, and natural glow using micro-droplets of hyaluronic acid.",
      "procedureType": "Skin Rejuvenation",
      "bodyLocation": {
        "@type": "AnatomicalStructure",
        "name": "Face and Neck"
      }
    },
    {
      "@type": "MedicalProcedure",
      "name": "Laser Hair Reduction",
      "description": "Advanced laser technology to permanently reduce unwanted hair growth safely on all skin types.",
      "procedureType": "Laser Treatment",
      "bodyLocation": {
        "@type": "AnatomicalStructure",
        "name": "Body Hair"
      }
    },
    {
      "@type": "MedicalProcedure",
      "name": "Laser Tattoo Removal",
      "description": "Advanced Q-switched laser technology to safely fade and remove unwanted tattoos effectively with minimal scarring.",
      "procedureType": "Laser Surgery",
      "bodyLocation": {
        "@type": "AnatomicalStructure",
        "name": "Tattooed Skin"
      }
    },
    {
      "@type": "MedicalProcedure",
      "name": "Meso Facial",
      "description": "Micro-injections of vitamins and nutrients to revitalize and hydrate skin at the cellular level.",
      "procedureType": "Mesotherapy",
      "bodyLocation": {
        "@type": "AnatomicalStructure",
        "name": "Facial Skin"
      }
    },
    {
      "@type": "MedicalProcedure",
      "name": "Medi Facial",
      "description": "Medical-grade facial treatment to address specific skin concerns and conditions with professional products.",
      "procedureType": "Medical Facial",
      "bodyLocation": {
        "@type": "AnatomicalStructure",
        "name": "Face"
      }
    },
    {
      "@type": "MedicalProcedure",
      "name": "Oxy-Hydra Facial",
      "description": "Deep cleansing and hydrating facial treatment using oxygen and water therapy for instant skin refresh.",
      "procedureType": "Hydrating Facial",
      "bodyLocation": {
        "@type": "AnatomicalStructure",
        "name": "Facial Skin"
      }
    },
    {
      "@type": "MedicalProcedure",
      "name": "Oxy-Geneo Facial",
      "description": "Advanced 3-in-1 facial combining exfoliation, oxygenation, and nourishing infusion for comprehensive skin renewal.",
      "procedureType": "Advanced Facial",
      "bodyLocation": {
        "@type": "AnatomicalStructure",
        "name": "Face"
      }
    },
    {
      "@type": "MedicalProcedure",
      "name": "Laser Facial",
      "description": "Laser technology treatment to improve skin texture and reduce imperfections with precision and safety.",
      "procedureType": "Laser Skin Treatment",
      "bodyLocation": {
        "@type": "AnatomicalStructure",
        "name": "Facial Skin"
      }
    },
    {
      "@type": "MedicalProcedure",
      "name": "Photo Facial",
      "description": "Intense Pulsed Light (IPL) therapy to treat pigmentation, redness, and improve overall skin tone.",
      "procedureType": "Light Therapy",
      "bodyLocation": {
        "@type": "AnatomicalStructure",
        "name": "Face"
      }
    },
    {
      "@type": "MedicalProcedure",
      "name": "Vampire Facial",
      "description": "Platelet-rich plasma therapy using your own blood to rejuvenate skin and stimulate collagen production.",
      "procedureType": "PRP Facial",
      "bodyLocation": {
        "@type": "AnatomicalStructure",
        "name": "Facial Skin"
      }
    },
    {
      "@type": "MedicalProcedure",
      "name": "Hair Transplant",
      "description": "Advanced surgical procedure to relocate hair follicles for permanent hair restoration using FUE or FUT techniques.",
      "procedureType": "Hair Restoration Surgery",
      "bodyLocation": {
        "@type": "AnatomicalStructure",
        "name": "Scalp"
      }
    }
  ]
};

export const skinHairSpecialtiesStructuredData:SpecialtiesStructuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Dermatology and Aesthetic Treatment Specialties",
  "description": "Comprehensive skin, hair, and aesthetic care organized by specialty areas",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "MedicalSpecialty",
        "name": "Dermatological Surgery",
        "description": "Surgical procedures for skin lesions and conditions",
        "includedServices": ["Mole Removal", "Wart Removal", "Skin Tag Removal", "Split Ear Lobe Repair", "Corn Removal"]
      }
    },
    {
      "@type": "ListItem", 
      "position": 2,
      "item": {
        "@type": "MedicalSpecialty",
        "name": "Laser Treatments",
        "description": "Advanced laser technology for hair removal and skin treatments",
        "includedServices": ["Laser Hair Reduction", "Laser Tattoo Removal", "Laser Facial"]
      }
    },
    {
      "@type": "ListItem",
      "position": 3, 
      "item": {
        "@type": "MedicalSpecialty",
        "name": "Hair Restoration",
        "description": "Comprehensive treatments for hair loss and thinning",
        "includedServices": ["Hair Transplant", "PRP Treatment", "GFC Treatment"]
      }
    },
    {
      "@type": "ListItem",
      "position": 4,
      "item": {
        "@type": "MedicalSpecialty", 
        "name": "Injectable Treatments",
        "description": "Cosmetic injectables for facial enhancement and rejuvenation",
        "includedServices": ["Botox", "Fillers", "Thread Lift", "Skin Boosters Treatment"]
      }
    },
    {
      "@type": "ListItem",
      "position": 5,
      "item": {
        "@type": "MedicalSpecialty",
        "name": "Facial Treatments", 
        "description": "Professional facial treatments for skin health and beauty",
        "includedServices": ["Medi Facial", "Meso Facial", "Oxy-Hydra Facial", "Oxy-Geneo Facial", "Photo Facial", "Vampire Facial"]
      }
    },
    {
      "@type": "ListItem",
      "position": 6,
      "item": {
        "@type": "MedicalSpecialty",
        "name": "Skin Rejuvenation",
        "description": "Advanced treatments to restore youthful skin appearance",
        "includedServices": ["Medipeel", "Acne Scar Treatment", "Skin Boosters Treatment", "Photo Facial"]
      }
    },
    {
      "@type": "ListItem",
      "position": 7,
      "item": {
        "@type": "MedicalSpecialty",
        "name": "Aesthetic Medicine",
        "description": "Cosmetic procedures to enhance natural beauty", 
        "includedServices": ["Botox", "Fillers", "Thread Lift", "Vampire Facial", "Laser Facial"]
      }
    },
    {
      "@type": "ListItem",
      "position": 8,
      "item": {
        "@type": "MedicalSpecialty",
        "name": "Regenerative Medicine",
        "description": "Cutting-edge treatments using body's natural healing",
        "includedServices": ["PRP Treatment", "GFC Treatment", "Vampire Facial", "Skin Boosters Treatment"]
      }
    }
  ]
};