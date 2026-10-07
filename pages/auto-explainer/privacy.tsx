import LegalLayout, {
  APP_NAME,
  CONTACT_EMAIL,
  EFFECTIVE_DATE,
  ExtLink,
  Section,
} from "../../components/auto-explainer/legal-layout.component";

export default function Privacy() {
  return (
    <LegalLayout title="Privacy Policy">
      <p className="mb-6 text-gray-500">Effective {EFFECTIVE_DATE}</p>

      <Section title="Who we are">
        <p>
          {APP_NAME} is a private tool operated by Mark Hagethorn, an
          individual developer, for publishing videos to his own YouTube
          channel. Contact:{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-blue-500 underline">
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </Section>

      <Section title="YouTube API Services">
        <p className="mb-2">
          {APP_NAME} uses YouTube API Services. By using its YouTube features
          you are also subject to the{" "}
          <ExtLink href="https://policies.google.com/privacy">
            Google Privacy Policy
          </ExtLink>{" "}
          and agree to the{" "}
          <ExtLink href="https://www.youtube.com/t/terms">
            YouTube Terms of Service
          </ExtLink>
          .
        </p>
      </Section>

      <Section title="What data is accessed, stored and why">
        <p className="mb-2">
          When the channel owner authorises {APP_NAME} with their Google
          account, the tool accesses and stores only what it needs to upload
          and manage the owner&apos;s own videos:
        </p>
        <ul className="list-disc ml-6 space-y-1 mb-2">
          <li>
            <strong>OAuth tokens</strong> issued by Google, used to call the
            YouTube Data API on the owner&apos;s behalf.
          </li>
          <li>
            <strong>Channel ID</strong>, used to check that uploads go
            to the intended channel.
          </li>
          <li>
            <strong>Video IDs, metadata and status</strong> of videos the tool
            itself uploaded (title, description, tags, privacy status,
            scheduled publish time, processing and upload status), used to
            finish publishing, add thumbnails and captions, and report progress
            to the owner.
          </li>
        </ul>
        <p>
          The tool does not access other channels, viewer data, comments,
          analytics, or any YouTube data unrelated to the videos it uploads.
        </p>
      </Section>

      <Section title="Where the data is stored">
        <p>
          All data is stored locally on the owner&apos;s own computer. OAuth
          tokens are kept in a file readable only by the owner&apos;s user
          account. The tool has no server, database or user accounts of its
          own on the internet.
        </p>
      </Section>

      <Section title="Sharing">
        <p className="mb-2">
          YouTube API data is not sold, shared with, or disclosed to third
          parties, and is not used for advertising or profiling.
        </p>
        <p>
          Status notifications, which can include a video&apos;s title and
          link and the channel ID, are sent only to the owner&apos;s private
          Telegram chat.
          Services the tool uses to create videos (for example text and speech
          generation) receive the video&apos;s subject, script and narration
          text, but no YouTube API data or Google account data.
        </p>
      </Section>

      <Section title="Cookies and tracking">
        <p>
          {APP_NAME} does not use cookies, tracking pixels or analytics, and
          does not store information on, or read information from, anyone
          else&apos;s device.
        </p>
      </Section>

      <Section title="Retention and deletion">
        <ul className="list-disc ml-6 space-y-1">
          <li>
            Stored YouTube API data is refreshed or deleted at least every 30
            days, as required by the YouTube API Services Developer Policies.
          </li>
          <li>
            Video IDs are re-checked with the YouTube Data API at least every 30
            days, and the IDs of videos that no longer exist are deleted.
          </li>
          <li>
            When access is revoked, stored OAuth tokens and YouTube API data
            are deleted within 7 days.
          </li>
          <li>
            To delete the stored data, the owner sends /revoke to the bot (or
            runs pnpm ae revoke-youtube): the token is revoked with Google, and
            the token and the stored YouTube API data are deleted at once
            (database backups included). Deleting the data stored by{" "}
            {APP_NAME} does not affect any data stored by YouTube; to delete
            videos or other data on YouTube, use YouTube Studio or another
            YouTube application.
          </li>
          <li>
            To request deletion or ask a question about your data, email{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-blue-500 underline"
            >
              {CONTACT_EMAIL}
            </a>
            .
          </li>
        </ul>
      </Section>

      <Section title="Revoking access">
        <p>
          You can revoke {APP_NAME}&apos;s access to your Google account at any
          time from the{" "}
          <ExtLink href="https://security.google.com/settings/security/permissions">
            Google security settings page
          </ExtLink>
          . The owner can also revoke access from the tool itself, which
          revokes the token with Google and deletes the stored data.
        </p>
      </Section>

      <Section title="Changes">
        <p>
          Changes to this policy are published on this page with a new
          effective date.
        </p>
      </Section>
    </LegalLayout>
  );
}
