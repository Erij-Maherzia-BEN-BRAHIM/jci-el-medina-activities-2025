import React from "react";
import { EventCard } from "./EventCard";

export const MonthlySection = ({ data }) => {
  return (
    <section className="mb-16">
      <div className="relative h-64 mb-8 rounded-2xl overflow-hidden">
        <img
          src={data.coverImage}
          alt={data.month}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0097D7]/70 to-yellow-300/10 flex items-center p-8">
          <div>
            <h2 className="text-white text-3xl font-bold mb-2">{data.month}</h2>
            <p className="text-white/90 text-lg">{data.theme}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {data.events.map((event, index) => (
          <EventCard event={event} />
        ))}
      </div>
    </section>
  );
};
