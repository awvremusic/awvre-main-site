'use client'
import Link from "next/link";
import { DiscographyData } from "../../../types";
import { motion } from "framer-motion";
import { Container, useAWVRETheme } from "@awvremusic/awvre-ui-web";
import Image from "next/image";

interface MusicPageProps {
    discography: DiscographyData[];
}

export const MusicPage = ({
    discography
}: MusicPageProps) => {
    const {theme} = useAWVRETheme();
    return (
        <Container style={{background: "transparent", marginLeft: "auto", marginRight: "auto"}}>
        <div
     className="grid" style={{gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gridAutoRows: "25vh", padding: "1rem", gap: "1rem", placeItems: "center", width: "100%"}}>
            {discography.sort((a, b) => {
                if (a.releaseDate > b.releaseDate) {
                    return -1
                }

                if (a.releaseDate < b.releaseDate) {
                    return 1
                }

                return 0
            }).map((release) => (
                        <motion.div
                        animate={{
                            scale: [1, 1.05, 1],
                            borderRadius: ["20%", "20%", "20%"]
                        }}
                        transition={{
                            duration: 0.5  
                        }}
                        key={release.slug}
                        >
                <Link  href={`/music/${release.slug}`}>
                <div className="cursor-pointer ">
                    <Image width={250} height={250} src={release.coverArt.url} alt={release.title} style={{width: "20vh", height: "20vh", maxHeight: 500, maxWidth: 500, borderRadius: theme.borderRadius.xs}} />
                </div>
                </Link>
                </motion.div>
            ))}
        </div>
        </Container>
    )
}