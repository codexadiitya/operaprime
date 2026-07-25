import React from "react";
import { MapPin, Clock, Phone } from "lucide-react";
import { SALON } from "@/lib/content";

export default function Location() {
  return (
    <section
      id="visit"
      className="py-24 lg:py-32"
      style={{ background: "rgba(44,6,10,0.4)" }}
      data-testid="location-section"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14">
        <div>
          <div className="overline mb-5">Find Us</div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ivory leading-tight">
            Come in, be <span className="font-italic-accent text-gold">yourself.</span>
          </h2>

          <div className="mt-12 space-y-6 max-w-md">
            <div className="flex items-start gap-4">
              <span className="w-10 h-10 rounded-full border border-gold flex items-center justify-center shrink-0">
                <MapPin size={16} className="text-gold" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-ivory/50 mb-1">Address</p>
                <p className="text-ivory leading-relaxed">{SALON.address}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="w-10 h-10 rounded-full border border-gold flex items-center justify-center shrink-0">
                <Clock size={16} className="text-gold" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-ivory/50 mb-1">Hours</p>
                <p className="text-ivory leading-relaxed">{SALON.hoursLong}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="w-10 h-10 rounded-full border border-gold flex items-center justify-center shrink-0">
                <Phone size={16} className="text-gold" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-ivory/50 mb-1">Phone</p>
                <a href={`tel:${SALON.phoneTel}`} className="text-ivory hover:text-gold" data-testid="location-phone">
                  {SALON.phoneDisplay}
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-12">
            <a
              href={SALON.mapsLink}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
              data-testid="location-directions"
            >
              Get Directions
            </a>
            <a href={`tel:${SALON.phoneTel}`} className="btn-secondary" data-testid="location-call">
              Call Now
            </a>
          </div>
        </div>

        <div className="rounded-sm overflow-hidden border border-[rgba(201,162,39,0.25)] min-h-[400px]">
          <iframe
            title="Opera Prime Salon map"
            src={SALON.mapsEmbed}
            className="w-full h-full min-h-[400px] map-frame"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            data-testid="location-map"
          />
        </div>
      </div>
    </section>
  );
}
