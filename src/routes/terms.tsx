import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { company } from "@/lib/company";

const title = "Terms of Service | Pioneer";
const description = "Terms governing the use of Pioneer's AI sales coaching software.";

const tbd = "[To be completed after legal review.]";

export const Route = createFileRoute("/terms")({
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
      title="Terms of Service"
      updated="[Date — to be confirmed]"
      draft
      sections={[
        {
          heading: "Provider",
          body: (
            <p>
              Pioneer is provided by {company.legalName}, CVR {company.cvr}, {company.street},{" "}
              {company.postalCity}, {company.country}.
            </p>
          ),
        },
        { heading: "The service", body: <p>Pioneer is desktop software and a web portal for real-time sales coaching and post-call analysis. {tbd}</p> },
        { heading: "Accounts and acceptable use", body: <p>{tbd}</p> },
        { heading: "Fees and payment", body: <p>{tbd}</p> },
        { heading: "Data protection", body: <p>Processing of personal data on behalf of customers is governed by the Data Processing Agreement.</p> },
        { heading: "Liability", body: <p>{tbd}</p> },
        { heading: "Term and termination", body: <p>{tbd}</p> },
        { heading: "Governing law", body: <p>[Governing law and venue — to be confirmed.]</p> },
      ]}
    />
  ),
});
