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
        <span className="inline-flex items-center rounded-full border border-yellow-200 bg-yellow-100 px-5 py-2 text-sm font-semibold text-yellow-700">
          {badge}
        </span>
      )}

      <h2 className="mt-8 text-4xl font-black leading-tight tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
        {title}

        {highlight && (
          <>
            <br />
            <span className="text-yellow-500">
              {highlight}
            </span>
          </>
        )}
      </h2>

      {description && (
        <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-gray-600">
          {description}
        </p>
      )}
    </div>
  );
}