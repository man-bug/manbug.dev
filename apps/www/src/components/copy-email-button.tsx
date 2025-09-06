"use client";

import { useState } from "react";

import { cn, linkClasses } from "@/lib/utils";

export function CopyEmailButton({ str }: { str: string }) {
    const [buttonText, setButtonText] = useState(str);
    const [isDisabled, setIsDisabled] = useState(false);

    async function handleCopyEmail() {
        setIsDisabled(true);

        try {
            await navigator.clipboard.writeText("hello@manbug.dev");

            setButtonText("email copied!");
        } catch (err) {
            // no way this ever happens?
            setButtonText("failed to copy");
        }

        setTimeout(() => {
            setButtonText(str);
            setIsDisabled(false);
        }, 1500);
    }

    return (
        <button
            className={cn(
                "text-left font-mono",
                linkClasses,
                isDisabled && "cursor-not-allowed opacity-50"
            )}
            onClick={handleCopyEmail}
            disabled={isDisabled}
        >
            &lt;{buttonText}&gt;
        </button>
    );
}
