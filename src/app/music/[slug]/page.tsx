import axios from "axios"
import { MusicReleaseData } from "../../../../types"
import { MusicReleasePage } from "@/features/music/MusicReleasePage"

async function getData(slug: string): Promise<MusicReleaseData> {
    const response = await axios.post(process.env.HYGRAPH_CONTENT_URL, JSON.stringify({
        query: `
        {
            music(where: {slug: "${slug}"}) {
              title
              coverArt {
                url
              }
              externalLinks {
                name
                href
                platform
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
            return response.data.data.music
        }

        return []
    }).catch((error) => {
        console.error(error.response.data)
        return []
    })

    return response;
}

export default async function MusicRelease({ params }: { params: { slug: string } }) {
    const data = await getData(params.slug);
    return (
       <MusicReleasePage
            data={data}
       />
    )
}