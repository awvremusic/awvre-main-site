import { AWVRENameLogoV1, Container, Tab, Tabs, useAWVRETheme } from "@awvremusic/awvre-ui-web"
import { useSiteNavigation } from "../hooks/useSiteNavigation";
import React from "react";

const AWVRELogo =<AWVRENameLogoV1 height={"3.5vh"} className="cursor-pointer mr-5"/>

export const DesktopNavigation = () => {
    const { theme } = useAWVRETheme();
    const {
        goToHome,
        goToMusic,
        goToBio,
        goToEvents,
        currentPath,
    } = useSiteNavigation();

    const [currentTab, setCurrentTab] = React.useState(() => {
        if (currentPath === "/") {
            return "1";
        } else if (currentPath === "/music") {
            return "2";
        } else if (currentPath === "/bio") {
            return "3";
        } else {
            return "1";
        }
    });

    React.useEffect(() => {
        if (currentPath === "/") {
            setCurrentTab("1");
        } else if (currentPath === "/music") {
            setCurrentTab("2");
        } else if (currentPath === "/bio") {
            setCurrentTab("3");
        } else {
            setCurrentTab("1");
        }
    }, [currentPath]);
    
    return (
        <nav
            className="sticky top-0 left-0 right-0 z-50 h-16 shadow-sm px-4 py-2"
            style={{backgroundColor: theme.colors.container}}
        >
            <Container>
                <Tabs initialTab={currentTab} className="flex gap-5 items-center">
                    <Tab value={"1"} label="Home" onClick={goToHome} component={AWVRELogo}/>
                    <Tab value={"1"} label="Home" onClick={goToHome}/>
                    <Tab value={"2"} label="Music" onClick={goToMusic}/>
                    <Tab value={"3"} label="Events" onClick={goToEvents}/>
                    <Tab value={"4"} label="Bio" onClick={goToBio} />
                </Tabs>
            </Container>
        </nav>
    )
}
