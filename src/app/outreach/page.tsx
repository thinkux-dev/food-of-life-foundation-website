import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Camera, Film, MapPin, ArrowUpRight } from "lucide-react";
import { outreachMedia } from "@/data/outreachMedia";

export const metadata: Metadata = {
  title: "Kuje Outreach Gallery — Food of Life Foundation",
  description:
    "Photos and videos from Food of Life Foundation's community food outreaches in Kuje Area Council, Abuja.",
};

export default function OutreachGalleryPage() {
  const videos = outreachMedia.filter((m) => m.type === "video");
  const photos = outreachMedia.filter((m) => m.type === "image");

  return (
    <>
      <section className="container-page pt-14 md:pt-20 pb-14">
        <div className="max-w-2xl">
          <p className="font-display italic text-lg text-clay mb-4 flex items-center gap-2">
            <MapPin size={18} /> Kuje Area Council, Abuja
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-dusk leading-tight">
            Kuje Outreach Pictures &amp; Videos
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">
            Every outreach tells a story of neighbours showing up for
            neighbours. Browse moments captured during our food distributions and
            community visits in Kuje, Abuja.
          </p>
        </div>
      </section>

      {videos.length > 0 && (
        <section className="container-page pb-16">
          <div className="flex items-center gap-3 mb-8">
            <Film size={20} className="text-clay" />
            <h2 className="font-display text-2xl md:text-3xl text-dusk">
              Outreach Videos ({videos.length})
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {videos.map((v) => (
              <div key={v.id} className="card flex flex-col">
                <div className="relative aspect-video bg-dusk-deep">
                  <video
                    src={v.src}
                    poster={v.poster}
                    controls
                    preload="metadata"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-clay">
                    {v.location}
                  </p>
                  <h3 className="mt-1 font-display text-xl text-dusk">{v.title}</h3>
                  <p className="mt-2 text-[14px] text-ink-soft leading-relaxed">
                    {v.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="container-page pb-24">
        <div className="flex items-center gap-3 mb-8">
          <Camera size={20} className="text-clay" />
          <h2 className="font-display text-2xl md:text-3xl text-dusk">
            Outreach Photographs ({photos.length})
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {photos.map((p) => (
            <div key={p.id} className="card flex flex-col">
              <div className="img-card aspect-[4/3] relative">
                <Image
                  src={p.src}
                  alt={p.title}
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <p className="text-[11px] font-bold uppercase tracking-widest text-clay">
                  {p.location}
                </p>
                <h3 className="mt-1.5 font-display text-lg text-dusk">
                  {p.title}
                </h3>
                <p className="mt-1.5 text-[14px] text-ink-soft leading-relaxed">
                  {p.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-paper-dim border-t border-line">
        <div className="container-page py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="font-display text-2xl md:text-3xl text-dusk">
              Be part of our next Kuje outreach.
            </h2>
            <p className="mt-2 text-[15px] text-ink-soft">
              Sponsor food packs or join our volunteer team on the ground in Kuje.
            </p>
          </div>
          <Link href="/get-involved" className="btn-pill shrink-0">
            Join the next outreach
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
