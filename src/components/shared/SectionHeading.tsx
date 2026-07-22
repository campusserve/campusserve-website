interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  badge,
  title,
  highlight,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={`mx-auto max-w-4xl ${
        align === "center" ? "text-center" : "text-left"
      }`}
    >
      {badge && (
        <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-5 py-2 text-sm font-semibold text-primary shadow-sm">
          {badge}
        </span>
      )}

      <h2 className="mt-8 text-4xl font-black leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
        {title}

        {highlight && (
          <>
            <br />
            <span className="bg-gradient-to-r from-primary to-[#E67E0E] bg-clip-text text-transparent">
              {highlight}
            </span>
          </>
        )}
      </h2>

      {description && (
        <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}