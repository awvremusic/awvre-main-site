'use client'
import { Container, Text, useAWVRETheme } from "@awvremusic/awvre-ui-web"
import { EventsData } from "../../../../types"
import Link from "next/link";
import Image from "next/image";

export const EventsPage = ({ data }: {data: EventsData[]}) => {
    const {theme} = useAWVRETheme();
    return (
        <Container
            style={{backgroundColor: "transparent"}}
            className="flex flex-col justify-center p-5"
        >
            <Text variant="h1" className="mb-5">Events</Text>
            <div className="flex flex-col items-center gap-10 w-full">
                {data.map((event) => (
                    <Link key={event.eventSlug} href={`/events/${event.eventSlug}`} className="flex flex-col items-center">
                        <Image width={300} height={300} className="cursor-pointer" style={{margin: theme.spacing.sm, aspectRatio: "1:1", width: "75%", maxWidth: 350, borderRadius: theme.borderRadius.xs, overflow: "hidden"}} alt={event.name+" poster image"} src={event.poster.url}/>
                    </Link>
                ))}
            </div>
        </Container>
    )
}