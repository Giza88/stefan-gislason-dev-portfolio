type LinkedInEmbedProps = {
  embedUrl: string;
  title: string;
};

export default function LinkedInEmbed({ embedUrl, title }: LinkedInEmbedProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-white shadow-sm">
      <iframe
        src={embedUrl}
        title={title}
        height={620}
        className="w-full border-0"
        loading="lazy"
        allowFullScreen
      />
    </div>
  );
}
