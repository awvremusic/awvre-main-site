'use client';
import { Container, Divider, ExternalLink, Text, useAWVRETheme } from "@awvremusic/awvre-ui-web";
import { EventPageData } from "../../../../types";
import Image from "next/image";

export const IndividualEventPage = ({ event }: { event: EventPageData | null }) => {
    const {theme} = useAWVRETheme();
    if (!event) {
        return <div>Event does not exist.</div>
    }

    const localDate = new Date(event.eventDate).toLocaleDateString();

    return (
        <Container className="p-5 flex flex-col" style={{marginBottom: theme.spacing.xl, backgroundColor: theme.colors.background}}>
            <Text variant="h1" style={{marginTop: theme.spacing.md, marginBottom: theme.spacing.md}}>{event.name}</Text>
            <Divider style={{marginTop: theme.spacing.xl, marginBottom: theme.spacing.xl}}/>
            <span className="m-5 py-2 px-5 rounded-full font-bold text-center" style={{backgroundColor: theme.colors.info}}>{event.freeEvent ? "Free" : (event.price ?? "No Price")}</span>
                <Image width={300} height={300} src={event.poster.url} alt={event.name + " poster"} className="my-5" style={{borderRadius: theme.borderRadius.xs, overflow: "hidden"}} />
            <Text className="font-bold">{localDate}</Text>
            <Text variant="body1">{event.description}</Text>
            <Divider style={{marginTop: theme.spacing.xl, marginBottom: theme.spacing.xl}}/>
            <Text variant="h3">Address</Text>
            {event.venueAddress ? (
                <ExternalLink href={`https://maps.google.com/?q=${event.venueAddress}`} style={{color: theme.colors.primary, textDecoration: "underline", marginTop: theme.spacing.md}}>{event.venueAddress}</ExternalLink>
            ) : (
                <Text>TBA</Text>
            )}
            {event.ticketingUrl && <a href={event.ticketingUrl}>Get Tickets</a>}
        </Container>
    )
}