import { MediaPlatform } from "@awvremusic/awvre-ui-web";

interface MusicReleaseData {
    title: string;
    coverArt: {
        url: string;
    };
    externalLinks: {
        name: string;
        href: string;
        platform: MediaPlatform;
    }[];
    slug: string;
    releaseDate: string;
    musicType: "single" | "album" | "ep" | "mix";
}

interface DiscographyData {
    title: string;
    coverArt: {
        url: string;
    };
    slug: string;
    releaseDate: string;
    musicType: "single" | "album" | "ep" | "mix";
}

interface BioPageData {
    heading: string
    profileImage: {
        url: string;
    };
    description: string
    mediaLinks: {
        icon: {
            url: string;
        };
        linkColor: {
            hex: string;
        };
        href: string
        platform: MediaPlatform
        }[]
}

interface EventsData {
    name: string
    eventSlug: string;
    poster: {
        url: string;
    }
    price: number | null;
    freeEvent: boolean;
    eventDate: string;
}

interface EventPageData {
    name: string
    eventSlug: string;
    poster: {
        url: string;
    }
    price: number | null;
    freeEvent: boolean;
    eventDate: string;
    venueAddress: string
    ticketingUrl: string | null
    description: string
}