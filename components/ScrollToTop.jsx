"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLenis } from "@/data/useLenis";

export default function ScrollToTop() {
    const pathname = usePathname();
    const lenisRef = useLenis();

    useEffect(() => {
        const lenis = lenisRef?.current;

        if (lenis) {
            lenis.scrollTo(0, { immediate: true, force: true });
        } else {
            window.scrollTo(0, 0);
        }
    }, [pathname, lenisRef]);

    return null;
}