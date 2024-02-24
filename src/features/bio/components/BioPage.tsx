'use client'
import { Container, MediaLinkIcon, Text, useAWVRETheme } from "@awvremusic/awvre-ui-web";
import { BioPageData } from "../../../../types";
import Image from "next/image";

export const BioPage = ({ data }: { data: BioPageData | null }) => {
    const {theme} = useAWVRETheme();
    if (!data) {
        return null;
    }
    return (
        <Container className="flex flex-col justify-cente p-5" style={{backgroundColor: theme.colors.background}}>
            <Image width={250} height={250} src={data.profileImage.url} style={{width: "25vh", height: "25vh", maxWidth: 700, maxHeight: 700, margin: "auto"}} className="rounded-full overflow-hidden" alt={data.heading + "profile pic"} priority/>
            <Text variant="h1" className="text-center mt-5 mb-5">{data.heading}</Text>
            <Text variant="body1" className="text-center" style={{marginTop: theme.spacing.md, marginBottom: theme.spacing.md }}>{data.description}</Text>
            <div className="flex flex-row flex-wrap justify-center items-center gap-5 mr-auto ml-auto mt-5 mb-5" style={{maxWidth: 750}}>
                {data.mediaLinks.map((link) => {

                    if (!link.platform && link.icon.url) {
                        return (
                            <MediaLinkIcon key={link.href} platform={link.platform} href={link.href} customIcon={<img src={link.icon.url} width={40} height={40} />} style={{backgroundColor: link.linkColor.hex, width: "6vh", height: "6vh", maxWidth: 150, maxHeight: 150, margin: 10}}/>
                        )
                    }

                    return (
                        <MediaLinkIcon key={link.href} platform={link.platform} href={link.href} style={{width: "6vh", height: "6vh", maxWidth: 150, maxHeight: 150, margin: 10}} />
                    )
                })}
            </div>
        </Container>
    )
}