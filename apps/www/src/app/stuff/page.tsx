import Link from "next/link";

import { Metadata } from "next";

import { linkClasses } from "@/lib/utils";

export const metadata: Metadata = {
    title: "my stuff",
};

export default function StuffPage() {
    return (
        <main className="w-full py-8 sm:py-12">
            <h1 className="sr-only">my stuff</h1>

            <section className="relative border p-4">
                <header className="bg-background absolute -top-4 left-1/2 w-fit -translate-x-1/2 border px-2 py-1">
                    <h2 className="font-mono text-sm">
                        <strong>programs</strong>
                    </h2>
                </header>

                <article id="shodex" className="w-full">
                    <div className="flex items-center justify-between gap-4">
                        <h3 className="font-serif text-2xl/6 [font-weight:520]">
                            shodex
                        </h3>

                        <div className="flex flex-wrap items-center gap-x-[1ch] font-mono">
                            <Link
                                href="https://shodex.manbug.dev/?from=manbug.dev"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={linkClasses}
                            >
                                [Live]
                            </Link>
                            <Link
                                href="https://github.com/man-bug/manbug.dev"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={linkClasses}
                            >
                                [GitHub]
                            </Link>
                        </div>
                    </div>

                    <div className="mb-6 mt-2">
                        <p className="text-foreground/80 text-pretty font-mono">
                            Browse network-exposed services and find associated CVEs.
                        </p>
                    </div>
                </article>

                <article id="ocmc" className="w-full">
                    <div className="flex items-center justify-between gap-4">
                        <h3 className="font-serif text-2xl/6 [font-weight:520]">ocmc</h3>

                        <div className="flex flex-wrap items-center gap-x-[1ch] font-mono">
                            <Link
                                href="https://ocmccounseling.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={linkClasses}
                            >
                                [Live]
                            </Link>
                            <Link
                                href="https://github.com/man-bug/ocmc"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={linkClasses}
                            >
                                [GitHub]
                            </Link>
                        </div>
                    </div>

                    <div className="mb-6 mt-2">
                        <p className="text-foreground/80 text-pretty font-mono">
                            My mom&apos;s therapy practice 😊
                        </p>
                    </div>
                </article>

                <article id="accountabilibuddy" className="w-full">
                    <div className="flex items-center justify-between gap-4">
                        <h3 className="font-serif text-2xl/6 [font-weight:520]">
                            accountabilibuddy
                        </h3>

                        <div className="flex flex-wrap items-center gap-x-[1ch] font-mono">
                            <Link
                                href="https://github.com/man-bug/accountabilibuddy"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={linkClasses}
                            >
                                [GitHub]
                            </Link>
                        </div>
                    </div>

                    <div className="mt-2">
                        <p className="text-foreground/80 text-pretty font-mono">
                            CLI task tracking program.
                        </p>
                    </div>
                </article>
            </section>

            <section className="relative mt-8 border p-4 sm:mt-12">
                <header className="bg-background absolute -top-4 left-1/2 w-fit -translate-x-1/2 border px-2 py-1">
                    <h2 className="font-mono text-sm">
                        <strong>tools</strong>
                    </h2>
                </header>

                <article id="monorepo" className="w-full">
                    <div className="flex items-center justify-between gap-4">
                        <h3 className="font-serif text-2xl/6 [font-weight:520]">
                            monorepo
                        </h3>

                        <div className="flex flex-wrap items-center gap-x-[1ch] font-mono">
                            <Link
                                href="https://github.com/man-bug/monorepo-starter"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={linkClasses}
                            >
                                [GitHub]
                            </Link>
                        </div>
                    </div>

                    <div className="mt-2">
                        <p className="text-foreground/80 text-pretty font-mono">
                            Template for web application development.
                        </p>
                    </div>
                </article>
            </section>

            <section className="relative mt-8 border p-4 sm:mt-12">
                <header className="bg-background absolute -top-4 left-1/2 w-fit -translate-x-1/2 border px-2 py-1">
                    <h2 className="font-mono text-sm">
                        <strong>resources</strong>
                    </h2>
                </header>

                <article id="dotfiles" className="w-full">
                    <div className="flex items-center justify-between gap-4">
                        <h3 className="font-serif text-2xl/6 [font-weight:520]">
                            dotfiles
                        </h3>

                        <div className="flex flex-wrap items-center gap-x-[1ch] font-mono">
                            <Link
                                href="https://github.com/man-bug/dotfiles"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={linkClasses}
                            >
                                [GitHub]
                            </Link>
                        </div>
                    </div>

                    <div className="mb-6 mt-2">
                        <p className="text-foreground/80 text-pretty font-mono">
                            My dotfiles.
                        </p>
                    </div>
                </article>

                <article id="c" className="w-full">
                    <div className="flex items-center justify-between gap-4">
                        <h3 className="font-serif text-2xl/6 [font-weight:520]">C</h3>

                        <div className="flex flex-wrap items-center gap-x-[1ch] font-mono">
                            <Link
                                href="https://github.com/man-bug/c"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={linkClasses}
                            >
                                [GitHub]
                            </Link>
                        </div>
                    </div>

                    <div className="mt-2">
                        <p className="text-foreground/80 text-pretty font-mono">
                            Notes &amp; exercises from papers, books, and courses.
                        </p>
                    </div>
                </article>
            </section>
        </main>
    );
}
