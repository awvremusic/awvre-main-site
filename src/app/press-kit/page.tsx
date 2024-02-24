import { PressKitPage } from "@/features/press-kit/components/PressKitPage";
import { PressKitPageData } from "../../../types";
import axios from "axios";

async function getPressKitData(): Promise<PressKitPageData> {
    const quickPageDescriptionResponse = await axios.post(process.env.HYGRAPH_CONTENT_URL, JSON.stringify({
        query: `
        {
            quickLinksPages(where: {displayLive: true}) {
              description
            }
          }
        `
    }), {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${process.env.HYGRAPH_API_KEY}`
        }
    }).then((response) => {
        return response.data.data.quickLinksPages[0].description;
    }).catch((error) => {
        console.error(error);
        return "";
    });

    const pressKitResponse = await axios.post(process.env.HYGRAPH_CONTENT_URL, JSON.stringify({
        query: `
        {
            pressKit (where: {id: "clt0juqjevfja0div6ql008cg"}) {
              primaryColor {
                hex
              }
              secondaryColor {
                hex
              }
              croppedImages {
                url
              }
            }
          }
        `
    }), {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${process.env.HYGRAPH_API_KEY}`
        },
    }).then((response) => {
        return response.data.data.pressKit;
    }
    ).catch((error) => {
        console.error(error);
        return {};
    });

    return {
        description: quickPageDescriptionResponse,
        primaryColor: pressKitResponse.primaryColor.hex,
        secondaryColor: pressKitResponse.secondaryColor.hex,
        imageUrls: pressKitResponse.croppedImages ? pressKitResponse.croppedImages.map((image: { url: string }) => image.url) : [],
    }
}

export default async function PressKit() {
    const data = await getPressKitData();
    return (
        <PressKitPage data={data}/>
    )
}