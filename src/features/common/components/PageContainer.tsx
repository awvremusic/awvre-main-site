'use client'

import { AWVREDarkTheme, AWVRELightTheme, AWVREProvider, AWVRE_GREEN, Footer, Text, useIsMobile } from "@awvremusic/awvre-ui-web"
import { MobileNavigation } from "./MobileNavigation";
import { DesktopNavigation } from "./DesktopNavigation";
import { createGlobalStyle } from "styled-components";
import Link from "next/link";

const GlobalStyles = createGlobalStyle`
    * {
        font-family: "Zen Antique", "Kaisei HarunoUmi", "Noto Serif", "Cambria", "Times New Roman", "Times", serif;
        font-size: 12pt;
    }
  
  @media screen and (min-width: 768px) {
    * {
      font-size: 13pt;
    }
  }
  
  @media screen and (min-width: 1024px) {
    * {
      font-size: 14pt;
    }
  }
  
  @media screen and (min-width: 1440px) {
    * {
      font-size: 16pt;
    }
  }
`

export const PageContainer = ({children}: {children: React.ReactNode}) => {
    const isMobile = useIsMobile();
    AWVRELightTheme
    return (
        <AWVREProvider
        // customTheme={{
        //     light: {...AWVRELightTheme, fontFamily: { ...AWVRELightTheme.fontFamily, serif: "Zen Antique, Kaisei HarunoUmi, Noto Serif, Cambria, Times New Roman, Times, serif"}},
        //     dark: {...AWVREDarkTheme, fontFamily: { ...AWVRELightTheme.fontFamily, serif: "Zen Antique, Kaisei HarunoUmi, Noto Serif, Cambria, Times New Roman, Times, serif"}}
        // }}
        >
            <GlobalStyles />
            {isMobile ? <MobileNavigation /> : <DesktopNavigation />}
            <div>
            {children}
            </div>
            {/* <Footer
                style={{backgroundColor: AWVRE_GREEN}}
            />   */}
            <footer
                style={{backgroundColor: AWVRE_GREEN, height: "25vh", marginTop: "10vh"}}
                className="flex flex-col justify-center items-center gap-5 w-full p-5"
            >
                <Link href="/press-kit">
                    <Text variant="h3" style={{color: "white", textAlign: "center"}}>Press Kit</Text>
                </Link>
            </footer>
        </AWVREProvider>
    )
}