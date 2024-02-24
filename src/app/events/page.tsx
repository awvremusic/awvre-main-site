import axios from "axios";
import { EventsData } from "../../../types";
import { EventsPage } from "@/features/events/components/EventsPage";

async function getEventsData(): Promise<EventsData[]> {
    const response = await axios.post(process.env.HYGRAPH_CONTENT_URL, JSON.stringify({
        query: `
            {
                events {
                    name
                    eventSlug
                    poster {
                        url
                    }
                    price
                    freeEvent
                    eventDate
                }
            }
        `
    }), {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${process.env.HYGRAPH_API_KEY}`,
        }
    }).then((response) => {
        if (response.status === 200) {
            return response.data.data.events
        }
        return []
    }).catch((error) => {
        console.error(error.response.data)
        return []
    })

    return response;
}

export default async function Events() {
    const data = await getEventsData();
    return (
        <EventsPage
            data={data}
        />
    )
}