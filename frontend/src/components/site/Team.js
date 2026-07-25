import React from "react";
import { TEAM } from "@/lib/content";

export default function Team() {
  return (
    <section id="team" className="py-24 lg:py-32 bg-op-bg" data-testid="team-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <div className="overline mb-5">The Chairs</div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ivory leading-tight">
            Meet the people behind <span className="font-italic-accent text-gold">us.</span>
          </h2>
        </div>
        <hr className="hairline mb-14" />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {TEAM.map((m, idx) => (
            <div key={m.name} className="group" data-testid={`team-member-${idx}`}>
              <div className="aspect-[3/4] overflow-hidden rounded-sm border border-[rgba(201,162,39,0.2)]">
                <img
                  src={m.photo}
                  alt={m.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="font-serif text-lg text-ivory mt-5">{m.name}</h3>
              <p className="text-xs uppercase tracking-[0.25em] text-gold mt-1">{m.role}</p>
              <p className="text-sm text-ivory/60 mt-2">{m.specialty}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
