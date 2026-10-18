import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact — Food of Life Foundation",
};

export default function Contact() {
  return (
    <section className="container-page pt-14 md:pt-20 pb-24">
      <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-16">
        <div>
          <p className="font-display italic text-lg text-clay mb-5">
            Reach out to us
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-dusk leading-tight">
            We&rsquo;d love to hear from you.
          </h1>
          <p className="mt-6 text-[17px] leading-relaxed text-ink-soft max-w-md">
            Whether you want to support an upcoming food outreach in Kuje,
            refer a vulnerable household, or volunteer with our team — write to
            us anytime.
          </p>

          <ul className="mt-10 space-y-5 text-[15px] text-ink-soft">
            <li className="flex items-start gap-3">
              <MapPin size={19} className="mt-0.5 text-clay shrink-0" aria-hidden="true" />
              Kuje Area Council, Abuja, FCT, Nigeria
            </li>
            <li className="flex items-start gap-3">
              <Mail size={19} className="mt-0.5 text-clay shrink-0" aria-hidden="true" />
              <a
                href="mailto:info@foodoflifefoundation.org"
                className="hover:text-clay transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm"
              >
                info@foodoflifefoundation.org
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Phone size={19} className="mt-0.5 text-clay shrink-0" aria-hidden="true" />
              <a
                href="tel:+2348000000000"
                className="hover:text-clay transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm"
              >
                +234&nbsp;(0)&nbsp;800&nbsp;000&nbsp;0000
              </a>
            </li>
          </ul>
        </div>

        <div className="card p-8 md:p-10">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
