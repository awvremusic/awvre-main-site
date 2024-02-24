'use client'
import { Container, MediaLinkIcon, Text, useAWVRETheme } from "@awvremusic/awvre-ui-web";
import { MusicReleaseData } from "../../../types";
import { useRouter } from "next/navigation";
import Image from "next/image";

export const MusicReleasePage = ({data}: {data: MusicReleaseData}) => {
    const {theme} = useAWVRETheme();
    const localDate = new Date(data.releaseDate).toLocaleDateString();
    const router = useRouter();
    return (
        <Container className="p-5 flex flex-col justify-center items-center gap-5" style={{backgroundColor: "transparent"}}>
            <span onClick={router.back} style={{marginTop: "10vh"}} className="self-start mb-5">←  Back</span>
        <Image width={300} height={300} src={data.coverArt.url} alt={data.title} style={{width: "30vh", height: "30vh", maxHeight: 500, maxWidth: 500}} priority/>
        <p>{data.musicType} - {localDate}</p>
        <Text variant="h3" className="text-center">{data.title}</Text>        
        <div className="gap-5 flex flex-row justify-center mb-12">
            {data.externalLinks.map((link) => (
                <MediaLinkIcon key={link.name} platform={link.platform} href={link.href} style={{width: "6vh", height: "6vh", maxWidth: 150, maxHeight: 150, margin: 10}}/>
            ))}
        </div>
        </Container>
    )
}
