'use client'

import { AWVREProvider, AWVRE_GREEN, Footer, useIsMobile } from "@awvremusic/awvre-ui-web"
import { MobileNavigation } from "./MobileNavigation";
import { DesktopNavigation } from "./DesktopNavigation";

export const PageContainer = ({children}: {children: React.ReactNode}) => {
    const isMobile = useIsMobile();
    return (
        <AWVREProvider>
            {isMobile ? <MobileNavigation /> : <DesktopNavigation />}
            <div>
            {children}
            </div>
            {/* <Footer
                style={{backgroundColor: AWVRE_GREEN}}
            />   */}
            <footer
                style={{backgroundColor: AWVRE_GREEN, height: "40vh"}}
            ></footer>
        </AWVREProvider>
    )
}