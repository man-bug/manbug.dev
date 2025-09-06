import Link from "next/link";

import { Metadata } from "next";

import { linkClasses } from "@/lib/utils";

export const metadata: Metadata = {
    title: "work experience",
};
export const revalidate = 86400; // 1d

const MS_IN_DAY = 1000 * 60 * 60 * 24;
function distanceInDays(targetDate: Date, currentDate: Date): number {
    let diffMs: number;
    const isFuture = targetDate.getTime() > currentDate.getTime();

    switch (isFuture) {
        case true:
            diffMs = targetDate.getTime() - currentDate.getTime();
            return Math.floor(diffMs / MS_IN_DAY);
        case false:
            diffMs = currentDate.getTime() - targetDate.getTime();
            return Math.ceil(Math.abs(diffMs) / MS_IN_DAY);
    }
}

export default function WorkPage() {
    const currentDate = new Date();

    const siteAscendStartDate = new Date("2025-09-27T09:00:00-04:00");
    const daysAtSiteAscend = distanceInDays(siteAscendStartDate, currentDate);

    return (
        <main className="w-full py-8 sm:py-12">
            <h1 className="sr-only">work experience</h1>

            <article id="site-ascend" className="w-full border-y py-8">
                <header className="mb-8 flex w-full flex-col gap-4 sm:grid sm:grid-cols-[1fr_auto_1fr] sm:items-center sm:gap-2">
                    <div className="text-foreground/80 flex flex-col items-center gap-1 font-serif sm:items-start">
                        <span>Sep &apos;25 &ndash; Present</span>
                        <span>New York City, NY</span>
                    </div>

                    <div className="order-first flex flex-col items-center gap-1 sm:order-none">
                        <h2 className="text-center font-serif text-[28px]/6 [font-weight:520]">
                            Software Engineer
                        </h2>
                        <span>@ Site Ascend</span>
                    </div>

                    <div className="text-foreground/80 flex flex-col items-center gap-1 font-serif sm:items-end">
                        <span>Shaquille Upshaw</span>
                        <Link
                            href="https://www.siteascend.com"
                            rel="noopener noreferrer"
                            target="_blank"
                            className={linkClasses}
                        >
                            [siteascend.com]
                        </Link>
                    </div>
                </header>

                <ul className="text-foreground list-inside list-disc space-y-4 font-mono text-base">
                    <li className="marker:text-muted-foreground text-pretty tracking-[-0.02em]">
                        <span>
                            Full-stack role, primarily focused on a demand generation
                            platform.
                        </span>
                    </li>
                    <li className="marker:text-muted-foreground text-pretty tracking-[-0.02em]">
                        <span>
                            {siteAscendStartDate > currentDate
                                ? `My start date is in ${daysAtSiteAscend} days!`
                                : `I've only been here for ${daysAtSiteAscend} days!`}{" "}
                            Upon completion of substantial work, I&apos;ll detail my
                            responsibilities.
                        </span>
                    </li>
                </ul>
            </article>

            <article id="leap-brands" className="w-full border-b py-8">
                <header className="mb-8 flex w-full flex-col gap-4 sm:grid sm:grid-cols-[1fr_auto_1fr] sm:items-center sm:gap-2">
                    <div className="text-foreground/80 flex flex-col items-center gap-1 font-serif sm:items-start">
                        <span>Nov &apos;23 &ndash; Sep &apos;25</span>
                        <span>Whippany, NJ</span>
                    </div>

                    <div className="order-first flex flex-col items-center gap-1 sm:order-none">
                        <h2 className="text-center font-serif text-[28px]/6 [font-weight:520]">
                            Lead Developer
                        </h2>
                        <span>@ Leap Brands</span>
                    </div>

                    <div className="text-foreground/80 flex flex-col items-center gap-1 font-serif sm:items-end">
                        <span>Chaz Cervino</span>
                        <Link
                            href="https://leapbrands.io"
                            rel="noopener noreferrer"
                            target="_blank"
                            className={linkClasses}
                        >
                            [leapbrands.io]
                        </Link>
                    </div>
                </header>

                <ul className="text-foreground list-inside list-disc space-y-4 font-mono text-base">
                    <li className="marker:text-muted-foreground text-pretty tracking-[-0.02em]">
                        <span>
                            UI/UX Intern <span className="font-sans">&rarr;</span>{" "}
                            Frontend Developer <span className="font-sans">&rarr;</span>{" "}
                            Full-stack Developer <span className="font-sans">&rarr;</span>{" "}
                            Lead Developer within 12 months <strong>(team of 3)</strong>.
                        </span>
                    </li>
                    <li className="marker:text-muted-foreground text-pretty tracking-[-0.02em]">
                        <span>
                            Created Figma designs for one-pagers, company branding, and
                            webpage mockups.
                        </span>
                    </li>
                    <li className="marker:text-muted-foreground text-pretty tracking-[-0.02em]">
                        <span>
                            Designed and developed the{" "}
                            <Link
                                href="https://leapbrands.io"
                                rel="noopener noreferrer"
                                target="_blank"
                                className={linkClasses}
                            >
                                [company website]
                            </Link>
                            , integrating analytics to track user engagement metrics and
                            conversion rates.
                        </span>
                    </li>
                    <li className="marker:text-muted-foreground text-pretty tracking-[-0.02em]">
                        <span>
                            Architected a monorepo housing multiple web and API servers to
                            consolidate and increase reusability of legacy code.
                        </span>
                    </li>
                    <li className="marker:text-muted-foreground text-pretty tracking-[-0.02em]">
                        <span>
                            Implemented AWS CDK &amp; CI/CD (GitHub Actions) for
                            deployment reliability and environment consistency.
                        </span>
                    </li>
                    <li className="marker:text-muted-foreground text-pretty tracking-[-0.02em]">
                        <span>
                            Led development of an internal portal for ATS, CRM, &amp; CMS,
                            reducing third-party costs, providing 100% data ownership, and
                            consolidating data.
                        </span>
                    </li>
                    <li className="marker:text-muted-foreground text-pretty tracking-[-0.02em]">
                        <span>
                            Defined coding standards and managed development priorities
                            for product suite, reduced production downtime significantly.
                        </span>
                    </li>
                </ul>
            </article>

            <article id="drexel-it" className="w-full border-b py-8">
                <header className="mb-8 flex w-full flex-col gap-4 sm:grid sm:grid-cols-[1fr_auto_1fr] sm:items-center sm:gap-2">
                    <div className="text-foreground/80 flex flex-col items-center gap-1 font-serif sm:items-start">
                        <span>Sep &apos;23 &ndash; May &apos;24</span>
                        <span>Philadelphia, PA</span>
                    </div>

                    <div className="order-first flex flex-col items-center gap-1 sm:order-none">
                        <h2 className="text-center font-serif text-[28px]/6 [font-weight:520]">
                            Desktop Support Specialist
                        </h2>
                        <span>@ Drexel University</span>
                    </div>

                    <div className="text-foreground/80 flex flex-col items-center gap-1 font-serif sm:items-end">
                        <span>Robert Perazzo</span>
                        <Link
                            href="https://drexel.edu/it"
                            rel="noopener noreferrer"
                            target="_blank"
                            className={linkClasses}
                        >
                            [drexel.edu/it]
                        </Link>
                    </div>
                </header>

                <ul className="text-foreground list-inside list-disc space-y-4 font-mono text-base">
                    <li className="marker:text-muted-foreground text-pretty tracking-[-0.02em]">
                        <span>
                            Resolved 250+ technical support tickets across university
                            departments with minimal escalation to senior IT staff.
                        </span>
                    </li>
                    <li className="marker:text-muted-foreground text-pretty tracking-[-0.02em]">
                        <span>
                            Created comprehensive technical documentation for recurring
                            issues, reducing average resolution time and enabling
                            knowledge transfer
                        </span>
                    </li>
                    <li className="marker:text-muted-foreground text-pretty tracking-[-0.02em]">
                        <span>
                            Performed imaging and configuration of new and repurposed
                            laptops, ensuring consistent setup and security compliance.
                        </span>
                    </li>
                    <li className="marker:text-muted-foreground text-pretty tracking-[-0.02em]">
                        <span>
                            Provided in-person and remote technical assistance to faculty
                            and students, troubleshooting hardware and software issues.
                        </span>
                    </li>
                </ul>
            </article>
        </main>
    );
}
