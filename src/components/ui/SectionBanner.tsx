interface SectionBannerProps {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
}

export default function SectionBanner({ title, subtitle, breadcrumb }: SectionBannerProps) {
  return (
    <section
      className="py-16 px-4 text-center text-white"
      style={{ background: "linear-gradient(135deg, #1E2A5E 0%, #1E3A8A 100%)" }}
    >
      {breadcrumb && (
        <p className="text-sm font-medium mb-3 opacity-70 uppercase tracking-widest">
          Home / {breadcrumb}
        </p>
      )}
      <h1 className="text-4xl md:text-5xl font-bold mb-3">{title}</h1>
      {subtitle && (
        <p className="text-lg opacity-80 max-w-2xl mx-auto">{subtitle}</p>
      )}
    </section>
  );
}
