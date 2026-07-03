import { Button } from "@/components/ui/button";

export default function DownloadPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-24 text-center">
      <h1 className="text-6xl font-black">
        CampusServe App
      </h1>

      <p className="mt-8 text-xl text-gray-600">
        Android and iOS launching soon.
      </p>

      <div className="mt-12 flex justify-center gap-6">

        <Button className="h-14 rounded-2xl bg-black px-10">
          Google Play
        </Button>

        <Button className="h-14 rounded-2xl">
          App Store
        </Button>

      </div>
    </main>
  );
}