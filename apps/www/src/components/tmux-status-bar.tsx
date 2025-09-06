"use client";

import React from "react";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { cn, glowClasses, linkClasses } from "@/lib/utils";

import { Button } from "./ui/button";

const rootPages = [
    { index: 0, title: "tldr", path: "/" },
    { index: 1, title: "work", path: "/work" },
    { index: 2, title: "stuff", path: "/stuff" },
    { index: 3, title: "blog", path: "/blog" },
];

export function TmuxStatusBar() {
    const pathname = usePathname();
    const router = useRouter();

    const [leader, setLeader] = React.useState<null | "ctrl">(null);

    const handleNavigation = React.useCallback(
        (direction: "next" | "prev") => {
            const currentIndex = rootPages.findIndex((p) => p.path === pathname);
            if (currentIndex === -1) return;

            let nextIndex;
            if (direction === "next") {
                nextIndex = (currentIndex + 1) % rootPages.length;
            } else {
                if (currentIndex === 0) {
                    nextIndex = rootPages.length - 1;
                } else {
                    nextIndex = currentIndex - 1;
                }
            }

            const nextPath = rootPages[nextIndex]?.path;
            if (nextPath) {
                router.push(nextPath);
            }
        },
        [pathname, router]
    );

    React.useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            const target = event.target as HTMLElement;

            // TODO: is this buggy for form fields? this should stop it i think?
            if (["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName)) {
                return;
            }

            // ignore modifier keys
            if (["Shift", "Control", "Alt", "Meta"].includes(event.key)) {
                return;
            }

            // a leader key is active, wait for & handle the command
            if (leader) {
                let navigated = false;

                // clear leader on Esc/Del
                if (event.key === "Escape" || event.key === "Backspace") {
                    event.preventDefault();
                    setLeader(null);
                    return;
                }

                if (leader) {
                    const pageIndex = parseInt(event.key, 10);
                    if (event.key === "n") {
                        // Ctrl<>n
                        handleNavigation("next");
                        navigated = true;
                    } else if (event.key === "p") {
                        // Ctrl<>p
                        handleNavigation("prev");
                        navigated = true;
                    } else if (
                        !isNaN(pageIndex) &&
                        rootPages.find((p) => p.index === pageIndex)
                    ) {
                        // Ctrl<>#
                        const targetPath = rootPages[pageIndex]?.path;
                        if (targetPath) {
                            router.push(targetPath);
                        }
                        navigated = true;
                    }
                }

                if (navigated) event.preventDefault();
                setLeader(null); // clear leader after nav or invalid combo
                return;
            }

            // no leader active, check for a sequence starter
            if (event.ctrlKey) {
                // any ctrl combo works as a leader
                event.preventDefault();
                setLeader("ctrl");
                return;
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [leader, handleNavigation, router]);

    return (
        <header className="bg-background/95 text-muted-foreground fixed top-0 z-50 inline-flex w-full items-center justify-center font-mono">
            <nav>
                <ul className="flex flex-wrap items-center justify-center">
                    {rootPages.map(({ index, title, path }) => (
                        <li key={index}>
                            <Button
                                size="unset"
                                variant="unset"
                                asChild
                                className="h-8 px-[1ch] text-base"
                            >
                                <Link
                                    className={cn(
                                        linkClasses,
                                        path !== pathname &&
                                            "text-muted-foreground dark:text-muted-foreground"
                                    )}
                                    href={path}
                                >
                                    {path === pathname ? (
                                        <strong className={glowClasses}>
                                            {index}:{title}
                                        </strong>
                                    ) : (
                                        <>
                                            {index}:{title}
                                        </>
                                    )}
                                </Link>
                            </Button>
                        </li>
                    ))}
                </ul>
            </nav>
            {leader && (
                <>
                    <kbd
                        className={cn(
                            "text-foreground bg-muted absolute -left-[calc(4ch+8px+2px)] -translate-x-[2ch] rounded-sm border px-1 py-0.5 text-sm"
                        )}
                    >
                        {leader}
                    </kbd>
                    <kbd
                        className={cn(
                            "text-foreground bg-muted absolute -right-[calc(5ch+8px+2px)] translate-x-[2ch] rounded-sm border px-1 py-0.5 text-sm"
                        )}
                    >
                        n|p|#
                    </kbd>
                </>
            )}
        </header>
    );
}
