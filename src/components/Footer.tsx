import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dusk-deep text-paper/90">
      <div className="h-[3px] bg-gradient-to-r from-gold via-gold-soft to-gold" aria-hidden="true" />
      <div className="container-page py-16">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          {/* Brand blurb */}
          <div>
            <p className="font-display text-2xl text-paper">
              Food of Life <span className="italic text-gold-soft">Foundation</span>
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-paper/60 max-w-xs">
              Reaching the needy with food across the Nation — fighting hunger
              and restoring hope for vulnerable families, widows, and children
              in Abuja and across Nigeria.
            </p>
          </div>

          {/* Explore */}
          <nav aria-label="Explore links">
            <p className="text-sm font-medium text-gold-soft mb-4">Explore</p>
            <ul className="space-y-3 text-[15px] text-paper/70">
              <li><Link href="/about" className="hover:text-paper transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm">About us</Link></li>
              <li><Link href="/what-we-do" className="hover:text-paper transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm">What we do</Link></li>
              <li><Link href="/outreach" className="hover:text-paper transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm">Outreach Gallery</Link></li>
              <li><Link href="/campaigns" className="hover:text-paper transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm">Campaigns</Link></li>
            </ul>
          </nav>

          {/* Get involved */}
          <nav aria-label="Get involved links">
            <p className="text-sm font-medium text-gold-soft mb-4">Get involved</p>
            <ul className="space-y-3 text-[15px] text-paper/70">
              <li><Link href="/get-involved#donate" className="hover:text-paper transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm">Donate</Link></li>
              <li><Link href="/get-involved#volunteer" className="hover:text-paper transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm">Volunteer with us</Link></li>
              <li><Link href="/get-involved#partner" className="hover:text-paper transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm">Partner with us</Link></li>
              <li><Link href="/contact" className="hover:text-paper transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm">Contact us</Link></li>
            </ul>
          </nav>

          {/* Reach us */}
          <address className="not-italic">
            <p className="text-sm font-medium text-gold-soft mb-4">Reach us</p>
            <ul className="space-y-3 text-[15px] text-paper/70">
              <li className="flex items-start gap-2">
                <MapPin size={17} className="mt-0.5 shrink-0 text-gold-soft" aria-hidden="true" />
                <span>Abuja, FCT, Nigeria</span>
              </li>
              <li className="flex items-start gap-2 min-w-0">
                <Mail size={17} className="mt-0.5 shrink-0 text-gold-soft" aria-hidden="true" />
                <a
                  href="mailto:info@foodoflifefoundation.org"
                  className="hover:text-gold-soft transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm break-all min-w-0"
                >
                  info@foodoflifefoundation.org
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={17} className="mt-0.5 shrink-0 text-gold-soft" aria-hidden="true" />
                <div className="flex flex-col gap-1">
                  <a
                    href="tel:+2348119539062"
                    className="hover:text-gold-soft transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm"
                  >
                    0811&nbsp;953&nbsp;9062
                  </a>
                  <a
                    href="tel:+2348039483955"
                    className="hover:text-gold-soft transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm"
                  >
                    0803&nbsp;948&nbsp;3955
                  </a>
                </div>
              </li>
            </ul>
          </address>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-paper/10 flex flex-col md:flex-row gap-3 justify-between text-[13px] text-paper/45">
          <p>© {new Date().getFullYear()} Food of Life Foundation. All rights reserved.</p>
          <p>Reaching the needy with food across Abuja and Nigeria.</p>
        </div>
      </div>
    </footer>
  );
}
