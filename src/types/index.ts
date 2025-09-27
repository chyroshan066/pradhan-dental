export interface Services {
    id?: number;
    imgSrc: string;
    name: string;
    text: string;
    href: string;
    idStr: string;
}

interface IonIcon {
    ionIconName: string;
    ionIconLink: string;
}

export interface DentistType {
    imgSrc: string;
    name: string;
    ionIcon?: IonIcon[];
    position: string;
}

export interface Link {
    name: string;
    href: string;
}

export interface Testimonial {
    id: number;
    name: string;
    rating: number;
    text: string;
    image: string;
    position?: string;
}

export interface Photo {
    id: number;
    src: string;
    alt: string;
    title: string;
}

export interface MediaItem {
  id: number;
  src: string;
  alt: string;
  title: string;
  type: 'image' | 'video';
  poster?: string; // Optional thumbnail for videos
}