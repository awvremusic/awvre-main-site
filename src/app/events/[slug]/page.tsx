import axios from "axios";
import { EventPageData } from "../../../../types";
import { IndividualEventPage } from "@/features/events/components/IndividualEventPage";

async function getEventPageData(slug: string): Promise<EventPageData | null> {
    const response = await axios.post(process.env.HYGRAPH_CONTENT_URL, JSON.stringify({
        query: `
        {
            events (where: {eventSlug: "${slug}"}) {
              name
              eventSlug
              eventDate
              freeEvent
              description
              price
              poster {
                url
              }
              venueAddress
              ticketingUrl
            }
          }
        `
    }), {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization' : `Bearer ${process.env.HYGRAPH_API_KEY}`,
        }
    }).then((response) => {
        if (response.status === 200) {
            return response.data.data.events[0]
        }
        return null
    }).catch((error) => {
        console.error(error.response.data)
        return null
    })

    return response;
}

export default async function Event({params}: {params: { slug: string }}) {
    const data = await getEventPageData(params.slug);
    return (
        <IndividualEventPage
            event={data}
        />
    )
}