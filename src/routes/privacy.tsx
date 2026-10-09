import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { company } from "@/lib/company";

const title = "Privacy Policy | Pioneer";
const description = "How Pioneer collects, uses and protects personal data.";

export const Route = createFileRoute("/privacy")({
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
      title="Privacy Policy"
      updated="[Date — to be confirmed]"
      sections={[
        {
          heading: "Data controller",
          body: (
            <p>
              {company.legalName}, CVR {company.cvr}, {company.street}, {company.postalCity},{" "}
              {company.country} is responsible for personal data processed through {company.domain}.
              Contact: {company.email}.
            </p>
          ),
        },
        {
          heading: "What we collect on this website",
          body: (
            <p>
              When you email us, we receive your name, email address and the content of your
              message. When you download the Pioneer app, files are served from GitHub, which may
              log technical data such as your IP address under its own privacy policy.
            </p>
          ),
        },
        {
          heading: "Data processed by the Pioneer product",
          body: (
            <p>
              When customers use Pioneer, call audio is transcribed and analysed to provide
              coaching hints and post-call analysis against the customer's sales methodology.
              Pioneer does not analyse emotions, stress, personality or tone of voice. Customers
              act as data controller for call data; Pioneer processes it on their behalf under a
              Data Processing Agreement. [Hosting location, sub-processors and retention periods —
              to be confirmed.]
            </p>
          ),
        },
        {
          heading: "Purpose and legal basis",
          body: (
            <p>
              We process contact enquiries to respond to you, based on our legitimate interest
              (GDPR art. 6(1)(f)), and customer data to deliver the service under contract (art.
              6(1)(b)).
            </p>
          ),
        },
        {
          heading: "Your rights",
          body: (
            <p>
              You have the right to access, rectify, erase, restrict and object to processing, and
              to data portability. Contact {company.email}. You may also complain to the Danish Data
              Protection Agency (Datatilsynet), datatilsynet.dk.
            </p>
          ),
        },
      ]}
    />
  ),
});
