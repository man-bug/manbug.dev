"use client";

import { Lightbulb, LightbulbOff } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme();

    return (
        <button
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="text-muted-foreground hover:text-foreground focus-visible:ring-ring grid h-8 cursor-pointer place-items-center rounded-sm px-[1ch] outline-none focus-visible:ring-2"
        >
            <span className="visible col-start-1 row-start-1 flex items-center dark:invisible">
                <LightbulbOff className="size-4 shrink-0" />
                &nbsp;Dark mode
                <span className="sr-only">use dark mode</span>
            </span>
            <span className="invisible col-start-1 row-start-1 flex items-center dark:visible">
                <Lightbulb className="size-4 shrink-0" />
                &nbsp;Light mode
                <span className="sr-only">use light mode</span>
            </span>
        </button>
    );
}
