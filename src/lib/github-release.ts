import { createServerFn } from "@tanstack/react-start";
import { queryOptions } from "@tanstack/react-query";
import { z } from "zod";

export const releaseSchema = z.object({
  version: z.string(),
  tag: z.string(),
  macUrl: z.string().url(),
  winUrl: z.string().url(),
  fallback: z.boolean(),
});

export type LatestRelease = z.infer<typeof releaseSchema>;

const REPO = "badranyoussef/pioneer-desktop-releases";
const FALLBACK_VERSION = "0.1.3";
const FALLBACK_TAG = "v0.1.3";
const FALLBACK_BASE = `https://github.com/${REPO}/releases/download/${FALLBACK_TAG}`;

const fallbackRelease: LatestRelease = {
  version: FALLBACK_VERSION,
  tag: FALLBACK_TAG,
  macUrl: `${FALLBACK_BASE}/PioneerAI-${FALLBACK_VERSION}-universal.dmg`,
  winUrl: `${FALLBACK_BASE}/PioneerAI-${FALLBACK_VERSION}-win.zip`,
  fallback: true,
};

const releaseApiSchema = z.object({
  tag_name: z.string(),
  assets: z.array(
    z.object({
      name: z.string(),
      browser_download_url: z.string().url(),
    }),
  ),
});

export const getLatestRelease = createServerFn({ method: "GET" }).handler(
  async (): Promise<LatestRelease> => {
    try {
      const res = await fetch(`https://api.github.com/repos/${REPO}/releases/latest`, {
        cache: "no-store",
        headers: {
          Accept: "application/vnd.github+json",
          "X-GitHub-Api-Version": "2022-11-28",
        },
      });

      if (!res.ok) {
        console.warn(
          `GitHub release API returned ${res.status} ${res.statusText}; using fallback release`,
        );
        return fallbackRelease;
      }

      const body = await res.json();
      const parsed = releaseApiSchema.safeParse(body);
      if (!parsed.success) {
        console.warn("GitHub release response shape unexpected; using fallback release", parsed.error);
        return fallbackRelease;
      }

      const { tag_name, assets } = parsed.data;
      const version = tag_name.replace(/^v/, "");
      const mac = assets.find((a) => a.name.endsWith("-universal.dmg"));
      const win = assets.find((a) => a.name.endsWith("-win.zip"));

      if (!mac || !win) {
        console.warn("Latest release missing expected Pioneer assets; using fallback release");
        return fallbackRelease;
      }

      return {
        version,
        tag: tag_name,
        macUrl: mac.browser_download_url,
        winUrl: win.browser_download_url,
        fallback: false,
      };
    } catch (err) {
      console.warn("Failed to fetch latest GitHub release; using fallback release", err);
      return fallbackRelease;
    }
  },
);

export const latestReleaseQueryOptions = () =>
  queryOptions({
    queryKey: ["pioneer-latest-release"],
    queryFn: () => getLatestRelease(),
    staleTime: 1000 * 60 * 5, // 5 minutes
    refetchOnMount: "always",
    refetchOnWindowFocus: true,
    refetchInterval: 1000 * 60 * 5,
  });
