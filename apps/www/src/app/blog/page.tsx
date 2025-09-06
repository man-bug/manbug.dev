import Image from "next/image";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "blog",
};

export default function BlogPage() {
    return (
        <main className="inset-0 flex max-w-2xl flex-col items-center justify-center gap-4 py-8 sm:py-12">
            <Image
                priority
                src="/hurglet.webp"
                alt="Hurglet"
                width={544}
                height={544}
                className="size-24 rounded-full"
            />
            <h1 className="text-foreground font-serif text-3xl/6 [font-weight:520]">
                Coming soon...
            </h1>
        </main>
    );
}
