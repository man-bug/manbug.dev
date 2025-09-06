import Image from "next/image";

export default function Home() {
    return (
        <div className="flex h-svh flex-col items-center justify-center gap-8 p-8 pb-20 sm:p-20">
            <h1 className="font-serif text-3xl/6 [font-weight:520]">Hurglet</h1>
            <Image
                priority
                src="/hurglet.webp"
                alt="Hurglet"
                width={544}
                height={544}
            />
            <p className="font-mono">super cool guy.</p>
        </div>
    );
}
