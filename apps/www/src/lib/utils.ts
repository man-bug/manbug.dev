import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const linkClasses =
    "font-mono cursor-pointer dark:text-[#9cd0d9] dark:hover:text-[#6bb8c5] text-[#3b9fbc] hover:text-[#2d7a8f]";

export const glowClasses =
    "text-[#3b9fbc] hover:text-[#2d7a8f] dark:text-[#9cd0d9] dark:hover:text-[#6bb8c5] shadow-none [text-shadow:0_0_2px_#3b9fbc40,0_0_2px_#3b9fbc40] dark:[text-shadow:0_0_2px_#9cd0d940,0_0_2px_#6bb8c540]";
