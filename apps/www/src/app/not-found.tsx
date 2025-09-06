import Image from "next/image";
import Link from "next/link";

import { cn, linkClasses } from "@/lib/utils";

export default function NotFound() {
    return (
        <main className="flex grow flex-col items-center justify-center gap-y-4">
            <span className="font-mono">HTTP 404</span>
            <Link href="/" aria-label="Return to homepage">
                <Image
                    src="/manbug-dead.svg"
                    alt="manbug dead logo"
                    className="size-32 dark:invert"
                    width={128}
                    height={128}
                    priority
                />
            </Link>
            <div className="flex flex-col items-center gap-y-2">
                <h1 className="text-2xl [font-weight:520]">Page not found</h1>
                <p className="text-muted-foreground text-center">
                    You found a bug! Looks dead though...{" "}
                    <Link href="/" className={cn("whitespace-nowrap", linkClasses)}>
                        [head home?]
                    </Link>
                </p>
            </div>
        </main>
    );
}
