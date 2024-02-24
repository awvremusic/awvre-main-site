import { usePathname, useRouter } from "next/navigation";

export const useSiteNavigation = () => {
    const router = useRouter();
    const pathname = usePathname();

    const navigateTo = (path: string) => {
        router.push(path);
    }

    return {
        goToHome: () => navigateTo("/"),
        goToMusic: () => navigateTo("/music"),
        goToBio: () => navigateTo("/bio"),
        goToEvents: () => navigateTo("/events"),
        currentPath: pathname
    }
}