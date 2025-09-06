"use client";

import React from "react";

import { ThemeToggle } from "./theme-toggle";

export function Footer() {
    return (
        <footer className="text-muted-foreground row-start-3 grid h-full w-full place-items-center font-mono">
            <ThemeToggle />
        </footer>
    );
}
