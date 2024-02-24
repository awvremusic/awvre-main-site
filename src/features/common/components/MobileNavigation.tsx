import React from 'react';
import { AWVRENameLogoV1, Divider, Drawer, Text, useAWVRETheme } from "@awvremusic/awvre-ui-web"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from 'next/link';
import { useSiteNavigation } from '../hooks/useSiteNavigation';

export const MobileNavigation = () => {
    const [isOpen, setIsOpen] =React.useState(false);
    const {theme} = useAWVRETheme();
    const {goToHome} = useSiteNavigation();

    const onLogoClick = () => {
        goToHome();
        setIsOpen(false);
    }

    return (
        <>
        <nav
            className="flex justify-between items-center shadow-sm font-mono sticky left-0 right-0 top-0 z-50"
            style={{
                backgroundColor: theme.colors.container,
                padding: theme.spacing.xl
            }}
        >
            <AWVRENameLogoV1 height="3.5vh" onClick={onLogoClick}/>
            <FontAwesomeIcon
                icon={fas.faBars}
                className="fa-solid fa-xl"
                onClick={() => setIsOpen(true)}
            />
        </nav>
        <Drawer open={isOpen} onClose={() => setIsOpen(false)}>
            <div className="flex flex-col gap-5 items-center p-5">
                <AWVRENameLogoV1 height="5vh" onClick={onLogoClick}/>
                <Divider/>
                <Link href="/">
                    <Text variant="h4" onClick={() => setIsOpen(false)}>Home</Text>
                </Link>
                <Link href="/music">
                    <Text variant="h4" onClick={() => setIsOpen(false)}>Music</Text>
                </Link>
                <Link href="/events">
                    <Text variant="h4" onClick={() => setIsOpen(false)}>Events</Text>
                </Link>
                <Link href="/bio">
                    <Text variant="h4" onClick={() => setIsOpen(false)}>Bio</Text>
                </Link>
                <Divider className='mt-10'/>
                <Link href="/press-kit">
                    <Text variant="h4" onClick={() => setIsOpen(false)}>Press Kit</Text>
                </Link>
                </div>
            </Drawer>
        </>
    )
}