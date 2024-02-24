'use client'
import { AWVRENameLogoV1, Container, useAWVRETheme } from "@awvremusic/awvre-ui-web"

export const HomePage = () => {
    const {theme} = useAWVRETheme();
    return (
        <Container style={{backgroundColor: "transparent", width: "100%", height: "95vh"}} className="flex flex-col items-center justify-center">
            <AWVRENameLogoV1 height={"10vh"} fill={theme.colors.font}/>
        </Container>
    )
    }