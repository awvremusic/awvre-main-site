import { MusicPage } from "@/features/music/MusicPage";
import axios from 'axios'
import { DiscographyData } from "../../../types";

async function getData(): Promise<DiscographyData[]> {
    const response = await axios.post(process.env.HYGRAPH_CONTENT_URL, JSON.stringify({
        query: `
        {
            discography {
                title
              coverArt {
                url
              }
              slug
              releaseDate
              musicType
            }
          }
        `
    }), {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.HYGRAPH_API_KEY}`,
            'Accept': 'application/json',
        },
    }).then((response) => {
        if (response.status === 200) {
            return response.data.data.discography
        }

        return []
    }).catch((error) => {
        console.error(error.response.data.data)
        return []
    })

    return response;
}

export default async function Music() {
    const data = await getData();
    return (
        <MusicPage
            discography={data}
        />
    )
}