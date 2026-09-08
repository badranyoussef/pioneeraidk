import { createFileRoute } from "@tanstack/react-router";

import { Nav } from "@/components/site/Nav";
import {
  DemoCta,
  Dimensions,
  Download,
  FeedbackLoop,
  Footer,
  Hero,
  HowItWorks,
  Method,
  PostCall,
  SocialProof,
  Timing,
} from "@/components/site/sections";

const title = "Pioneer — real-time salgscoaching i selve samtalen";
const description =
  "Pioneer giver sælgere konkrete coaching-hints i realtid — baseret på jeres egen salgsmetodologi — så de kan handle, mens samtalen stadig foregår.";

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
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <Timing />
        <Method />
        <HowItWorks />
        <Dimensions />
        <PostCall />
        <FeedbackLoop />
        <SocialProof />
        <DemoCta />
        <Download />
      </main>
      <Footer />
    </div>
  );
}
