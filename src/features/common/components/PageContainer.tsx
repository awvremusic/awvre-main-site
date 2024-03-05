'use client'

import { AWVREProvider, AWVRE_GREEN, Text, useIsMobile } from "@awvremusic/awvre-ui-web"
import { MobileNavigation } from "./MobileNavigation";
import { DesktopNavigation } from "./DesktopNavigation";
import Link from "next/link";

export const PageContainer = ({children}: {children: React.ReactNode}) => {
    const isMobile = useIsMobile();

    return (
        <AWVREProvider
        >
            {isMobile ? <MobileNavigation /> : <DesktopNavigation />}
            <div>
            {children}
            </div>
            <footer
                style={{backgroundColor: AWVRE_GREEN, height: "25vh", marginTop: "10vh"}}
                className="flex flex-col justify-center items-center gap-5 w-full p-5"
            >
                <Link href="/press-kit">
                    <Text variant="h3" style={{color: "white", textAlign: "center", fontWeight: "bold"}}>Press Kit</Text>
                </Link>
            </footer>
        </AWVREProvider>
    )
}