import React from "react";
import { Calendar, MapPin } from "lucide-react";

export const EventCard = ({ event }) => {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="relative h-48 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover transform transition-transform object-center duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 bg-[#0097D7] text-white text-sm px-3 py-1 rounded-full">
          {event.category}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl text-[#0A0F29] font-semibold mb-3">
          {event.title}
        </h3>
        <p className="text-[#414042] mb-4 line-clamp-2">{event.description}</p>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4 text-[#0097D7]" />
            <span>{new Date(event.date).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-[#0097D7]" />
            <span className="truncate">{event.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
