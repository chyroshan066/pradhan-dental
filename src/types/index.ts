interface Name {
    name: string;
}

interface Href {
    href: string;
}

interface ImgSrc {
    imgSrc: string;
}

interface Id {
    id: number;
}

interface Text {
    text: string;
}

interface Alt {
    alt: string;
}

interface IonIcon {
    ionIconName: string;
    ionIconLink: string;
}

export interface MediaDetails {
    src: string;
    title: string;
}

export interface Services extends Name, ImgSrc, Text {
    id?: number;
    href?: string;
    idStr: string;
}

export interface DentistType extends Name, ImgSrc {
    ionIcon?: IonIcon[];
    position: string;
}

export interface Link extends Name, Href {}

export interface SocialLinkType extends Link {
    className: string;
}

export interface Testimonial extends Name, Id, Text {
    rating: number;
    image: string;
    position?: string;
}

export interface Photo extends Id, MediaDetails, Alt {}

export interface MediaItem extends Id, MediaDetails, Alt {
  type: 'image' | 'video';
  poster?: string; // Optional thumbnail for videos
}

export interface Contact extends Href {
    ionIcon: string;
    textNumber: string;
}