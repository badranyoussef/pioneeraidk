import { createFileRoute } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";

import { Nav } from "@/components/site/Nav";
import { Contact, Download, Features, Footer, Hero } from "@/components/site/sections";
import { latestReleaseQueryOptions } from "@/lib/github-release";

const title = "Pioneer | AI Sales Coaching";
const description =
  "Real-time AI coaching for better sales conversations. Pioneer coaches reps during the call, based on your own sales methodology.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  loader: ({ context }) => context.queryClient.ensureQueryData(latestReleaseQueryOptions()),
  component: Index,
});

function Index() {
  const { data: release } = useSuspenseQuery(latestReleaseQueryOptions());

  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <Features />
        <Download release={release} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
