"use client";

import * as React from "react";

import { ThemeProvider as NextThemesProvider } from "next-themes";

// https://github.com/pacocoursey/next-themes/pull/354
const fixedThemeBlindScript = `((e,t,s,l,c,a,r,i)=>{let m=document.documentElement,n=["light","dark"];function h(t){let s=Array.isArray(e)?e:[e];s.forEach(e=>{let s="class"===e,l=s&&a?c.map(e=>a[e]||e):c;s?(m.classList.remove(...l),m.classList.add(a&&a[t]?a[t]:t)):m.setAttribute(e,t)}),o(t)}function o(e){i&&n.includes(e)&&(m.style.colorScheme=e)}function d(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}if(l)h(l);else try{let u=localStorage.getItem(t)||s,f=r&&"system"===u,y=f?d():u;h(y)}catch(g){}})("class","theme","system",null,["light","dark"],null,!0,!0);`;

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <NextThemesProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            enableColorScheme
            // https://github.com/pacocoursey/next-themes?tab=readme-ov-file#using-with-cloudflare-rocket-loader
            scriptProps={{ "data-cfasync": "false" }}
        >
            <script>{fixedThemeBlindScript}</script>
            {children}
        </NextThemesProvider>
    );
}
