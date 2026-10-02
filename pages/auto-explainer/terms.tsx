import LegalLayout, {
  APP_NAME,
  CONTACT_EMAIL,
  EFFECTIVE_DATE,
  ExtLink,
  InternalLink,
  Section,
} from "../../components/auto-explainer/legal-layout.component";

export default function Terms() {
  return (
    <LegalLayout title="Terms of Service">
      <p className="mb-6 text-gray-500">Effective {EFFECTIVE_DATE}</p>

      <Section title="The service">
        <p>
          {APP_NAME} is a private tool operated by Mark Hagethorn for
          producing explainer videos and publishing them to his own YouTube
          channel. It is not offered to the public, and access is limited to
          its owner.
        </p>
      </Section>

      <Section title="YouTube Terms of Service">
        <p>
          {APP_NAME} uses YouTube API Services. By using {APP_NAME} you agree
          to be bound by the{" "}
          <ExtLink href="https://www.youtube.com/t/terms">
            YouTube Terms of Service
          </ExtLink>
          . Use of Google account data is also governed by the{" "}
          <ExtLink href="https://policies.google.com/privacy">
            Google Privacy Policy
          </ExtLink>
          .
        </p>
      </Section>

      <Section title="Your control">
        <p>
          The channel owner decides whether uploads are published
          automatically and is notified before each video goes public, with
          the option to publish immediately, change it, or cancel it. The owner
          can revoke the tool&apos;s access at any time, as described in the{" "}
          <InternalLink href="/auto-explainer/privacy" className="text-blue-500 underline">
            Privacy Policy
          </InternalLink>
          .
        </p>
      </Section>

      <Section title="Content">
        <p>
          The channel owner is responsible for the videos published to their
          channel and for complying with YouTube&apos;s Community Guidelines
          and policies, including disclosure of altered or synthetic content.
        </p>
      </Section>

      <Section title="No warranty">
        <p>
          The tool is provided as is, without warranties of any kind, to the
          extent permitted by law.
        </p>
      </Section>

      <Section title="Contact">
        <p>
          Questions about these terms:{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-blue-500 underline">
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </Section>
    </LegalLayout>
  );
}
