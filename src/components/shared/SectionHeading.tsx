interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle: string;
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-16 max-w-3xl text-center">
      {badge && (
        <span className="inline-block rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
          {badge}
        </span>
      )}

      <h2 className="mt-5 text-4xl font-bold tracking-tight text-gray-900 lg:text-5xl">
        {title}
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
        {subtitle}
      </p>
    </div>
  );
}