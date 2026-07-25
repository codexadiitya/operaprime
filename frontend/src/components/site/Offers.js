import React, { useEffect, useState } from "react";
import { api } from "@/lib/api";
import { whatsappLink } from "@/lib/content";

export default function Offers() {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    api.get("/offers").then((r) => setOffers(r.data || [])).catch(() => setOffers([]));
  }, []);

  return (
    <section
      id="offers"
      className="py-24 lg:py-32"
      style={{ background: "rgba(44,6,10,0.4)" }}
      data-testid="offers-section"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <div className="overline mb-5">This Season</div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ivory leading-tight">
              Curated <span className="font-italic-accent text-gold">offers.</span>
            </h2>
          </div>
          <p className="text-ivory/60 max-w-sm text-sm">
            Limited quantities, real savings. Claim on WhatsApp and we'll block your slot.
          </p>
        </div>
        <hr className="hairline mb-14" />

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {offers.map((o) => (
            <article
              key={o.id}
              className="bg-op-panel border border-[rgba(201,162,39,0.25)] rounded-sm p-8 flex flex-col"
              data-testid={`offer-${o.id}`}
            >
              <div className="overline mb-4 text-[10px]">Valid · {o.valid_until || "Ongoing"}</div>
              <h3 className="font-serif text-2xl text-ivory mb-4">{o.title}</h3>
              <p className="text-sm text-ivory/70 mb-8 flex-1 leading-relaxed">{o.description}</p>
              <div className="flex items-baseline gap-3 mb-6">
                <span className="font-serif text-3xl text-gold">₹{o.price.toLocaleString("en-IN")}</span>
                {o.original_price ? (
                  <span className="text-sm text-ivory/40 line-through">
                    ₹{o.original_price.toLocaleString("en-IN")}
                  </span>
                ) : null}
              </div>
              <a
                href={whatsappLink(`Hi Opera Prime, I'd like to claim the "${o.title}" offer.`)}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
                data-testid={`offer-claim-${o.id}`}
              >
                Claim on WhatsApp
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
