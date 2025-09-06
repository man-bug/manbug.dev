import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        loader: "custom",
        loaderFile: "./cf-image-transform.ts",
    },
};

export default nextConfig;

// added by create cloudflare to enable calling `getCloudflareContext()` in `next dev`
initOpenNextCloudflareForDev();
