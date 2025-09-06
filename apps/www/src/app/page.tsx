import Image from "next/image";
import Link from "next/link";

import { Metadata } from "next";

import { Super } from "@/components/super";
import { linkClasses } from "@/lib/utils";

export const metadata: Metadata = {
    title: "tldr | manbug",
};

export default function TldrPage() {
    return (
        <main className="mx-auto my-auto w-fit">
            <div className="space-y-4">
                <div className="flex items-end justify-center gap-2 sm:justify-start">
                    <Image
                        className="select-none dark:invert"
                        src="/manbug.svg"
                        alt="manbug logo"
                        width={48}
                        height={48}
                        draggable={false}
                        priority
                    />
                    <h1 className="text-4xl/8 [font-weight:520]">manbug</h1>
                </div>
            </div>

            <div className="bg-border my-4 h-px w-full" />

            <div className="text-foreground font-mono">
                <ul className="space-y-2 text-center sm:list-inside sm:list-disc sm:text-left">
                    <li className="marker:text-muted-foreground">
                        <span className="tracking-[-0.02em]">
                            System &amp; application security
                        </span>
                        <Super title="shodex project" asChild>
                            <Link
                                className={linkClasses}
                                target="_blank"
                                href="https://shodex.manbug.dev/?from=manbug.dev"
                            >
                                (1)
                            </Link>
                        </Super>
                    </li>
                    <li className="marker:text-muted-foreground">
                        <span className="tracking-[-0.02em]">
                            Back-end architecture &amp; tooling
                        </span>
                        <Super title="monorepo template" asChild>
                            <Link
                                href="https://github.com/man-bug/monorepo-starter"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={linkClasses}
                            >
                                (1)
                            </Link>
                        </Super>
                        {/* <Super title="design philosophy" asChild> */}
                        {/*     <Link className={linkClasses} href="/blog/design-philosophy"> */}
                        {/*         (2) */}
                        {/*     </Link> */}
                        {/* </Super> */}
                    </li>
                    <li className="marker:text-muted-foreground">
                        <span className="tracking-[-0.02em]">
                            Cloud infrastructure &amp; automation
                        </span>
                        {/* <Super title="terraform" asChild> */}
                        {/*     <Link */}
                        {/*         className={linkClasses} */}
                        {/*         href="/blog/terraform" */}
                        {/*     > */}
                        {/*         (1) */}
                        {/*     </Link> */}
                        {/* </Super> */}
                    </li>
                </ul>
            </div>

            <div className="bg-border my-4 h-px w-full" />
            <div className="flex w-full flex-wrap items-center justify-center gap-[1ch] font-mono sm:justify-start">
                <Link
                    href="https://github.com/man-bug"
                    rel="noopener noreferrer"
                    target="_blank"
                    className={linkClasses}
                >
                    [GitHub]
                </Link>
                <Link
                    href="/damian-oconnor-resume-2025-08-28.pdf"
                    rel="noopener noreferrer"
                    target="_blank"
                    className={linkClasses}
                >
                    [Resume]
                </Link>
                <Link className={linkClasses} href="mailto:hello@manbug.dev">
                    [Email]
                </Link>
            </div>

            {/* <div className="bg-border my-4 h-px w-full" /> */}
            {/**/}
            {/* <div className="text-foreground/80 w-full text-center font-mono text-sm/6 sm:text-left"> */}
            {/*     <span className="italic"> */}
            {/*         I will only respond if you <CopyEmailButton str="send me an email" /> */}
            {/*     </span> */}
            {/* </div> */}
        </main>
    );
}
