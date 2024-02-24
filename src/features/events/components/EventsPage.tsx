'use client'
import { Container, Text, useAWVRETheme } from "@awvremusic/awvre-ui-web"
import { EventsData } from "../../../../types"
import Link from "next/link";
import Image from "next/image";

export const EventsPage = ({ data }: {data: EventsData[]}) => {
    const {theme} = useAWVRETheme();
    return (
        <Container
            style={{backgroundColor: theme.colors.background}}
            className="flex flex-col justify-center p-5"
        >
            <Text variant="h1">Events</Text>
            <div className="flex flex-col gap-5">
                {data.map((event) => (
                    <Link key={event.eventSlug} href={`/events/${event.eventSlug}`}>
                        <Image width={300} height={300} className="cursor-pointer" style={{margin: theme.spacing.sm, aspectRatio: "1:1", width: "100%", maxWidth: 350, borderRadius: theme.borderRadius.xs, overflow: "hidden"}} alt={event.name+" poster image"} src={event.poster.url}/>
                    </Link>
                ))}
            </div>
        </Container>
    )
}