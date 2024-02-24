import axios from "axios";
import { BioPageData } from "../../../types";
import { BioPage } from "@/features/bio/components/BioPage";

async function getBioPageData(): Promise<BioPageData | null> {
    const response = await axios.post(process.env.HYGRAPH_CONTENT_URL, JSON.stringify({
        query: `
        {
            quickLinksPages(where: {displayLive: true}) {
              id
              profileImage {
                url
              }
              heading
              description
              mediaLinks {
                icon {
                  url
                }
                linkColor { 
                    hex
                }
                href
                platform
              }
            }
          }`
          }), {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${process.env.HYGRAPH_API_KEY}`,
        }
    }).then((response) => {
        if (response.status === 200) {
            return response.data.data.quickLinksPages[0]
        }
        return null
    }).catch((error) => {
        console.error(error.response.data)
        return null
})

return response;
}

export default async function Bio() {
    const data = await getBioPageData();
    return (
        <BioPage
            data={data}
        />
    )
}