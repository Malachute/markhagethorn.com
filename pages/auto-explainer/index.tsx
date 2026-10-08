import LegalLayout, {
  APP_NAME,
  CONTACT_EMAIL,
  ExtLink,
  InternalLink,
  Section,
} from "../../components/auto-explainer/legal-layout.component";

export default function AutoExplainer() {
  return (
    <LegalLayout title={APP_NAME}>
      <p className="mb-6">
        {APP_NAME} is a private, single-user tool that I (Mark Hagethorn) run
        on my own computer to produce explainer videos and publish them to my
        own YouTube channel through the YouTube API Services. It is not a
        public service: nobody else can sign in to it, and it only ever acts
        on the one YouTube channel I authorised.
      </p>

      <Section title="What it does">
        <ol className="list-decimal ml-6 space-y-1">
          <li>
            I send a subject to my private Telegram bot, optionally with a
            language and target length.
          </li>
          <li>
            The tool researches the subject from public sources, writes and
            fact-checks a script, generates narration, and renders an animated
            explainer video with captions.
          </li>
          <li>
            It prepares the title, description (with sources and chapters),
            tags, captions and thumbnail, and discloses the use of synthetic
            media where applicable.
          </li>
          <li>
            It uploads each video to my channel as private and schedules it for
            the next free slot: at most 2 videos go public per day and 14 per
            week. At least 60 minutes before a video goes public I get a
            Telegram card with the preview, title and description, and I can
            publish it now, keep it private, make it unlisted, edit the title or
            description, or cancel.
          </li>
          <li>
            Once a day the tool also picks one obscure, non-sensitive question
            itself and makes a 5-minute video about it; I can stop it in
            Telegram (/cancel) or turn the feature off.
          </li>
          <li>
            Until the YouTube API audit passes, a daily check keeps at most one
            5-second unlisted test clip on my channel to detect when uploads are
            no longer restricted to private; each clip is deleted within 72
            hours.
          </li>
          <li>
            Every description says that the narration is an AI voice and that
            the video was researched and written with AI assistance.
          </li>
        </ol>
      </Section>

      <Section title="YouTube API usage">
        <p className="mb-2">
          The tool uses the YouTube Data API v3 with a single OAuth scope
          (youtube.force-ssl), which is needed to upload captions. For my own
          channel only, it calls videos.insert, videos.list, videos.update,
          videos.delete, thumbnails.set, captions.insert, channels.list and,
          only when a playlist is set, playlistItems.insert.
        </p>
        <p className="mb-2">
          <a href="https://www.youtube.com/@Whatthefooky">
            <img
              src="/assets/auto-explainer/developed-with-youtube.png"
              alt="Developed with YouTube"
              width={180}
            />
          </a>
        </p>
        <p>
          By using YouTube features of this tool, users agree to be bound by
          the{" "}
          <ExtLink href="https://www.youtube.com/t/terms">
            YouTube Terms of Service
          </ExtLink>
          .
        </p>
      </Section>

      <Section title="Policies and contact">
        <ul className="list-disc ml-6 space-y-1">
          <li>
            <InternalLink href="/auto-explainer/privacy" className="text-blue-500 underline">
              Privacy Policy
            </InternalLink>
          </li>
          <li>
            <InternalLink href="/auto-explainer/terms" className="text-blue-500 underline">
              Terms of Service
            </InternalLink>
          </li>
          <li>
            Contact:{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-blue-500 underline"
            >
              {CONTACT_EMAIL}
            </a>
          </li>
        </ul>
      </Section>
    </LegalLayout>
  );
}
