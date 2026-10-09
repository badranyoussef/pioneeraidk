import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { company } from "@/lib/company";

const title = "Data Processing Agreement | Pioneer";
const description = "Pioneer's Data Processing Agreement for customers under GDPR art. 28.";

const tbd = "[To be completed after legal review.]";

export const Route = createFileRoute("/dpa")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: () => (
    <LegalPage
      title="Data Processing Agreement"
      updated="[Date — to be confirmed]"
      draft
      sections={[
        {
          heading: "Parties",
          body: (
            <p>
              Between the customer (data controller) and {company.legalName}, CVR {company.cvr},{" "}
              {company.street}, {company.postalCity}, {company.country} (data processor).
            </p>
          ),
        },
        { heading: "Subject and duration", body: <p>Processing of call audio, transcripts and analysis results to deliver Pioneer's coaching and post-call analysis, for the duration of the customer agreement.</p> },
        { heading: "Categories of data and data subjects", body: <p>{tbd}</p> },
        { heading: "Processor obligations", body: <p>{tbd}</p> },
        { heading: "Security measures", body: <p>{tbd}</p> },
        { heading: "Sub-processors", body: <p>[List of sub-processors — to be confirmed.]</p> },
        { heading: "Transfers to third countries", body: <p>{tbd}</p> },
        { heading: "Deletion and return of data", body: <p>{tbd}</p> },
      ]}
    />
  ),
});
