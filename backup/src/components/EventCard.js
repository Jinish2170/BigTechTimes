import React from 'react';

function EventCard({ event }) {
  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <h4 className="text-xl font-bold mb-2">{event.title}</h4>
      <p className="text-gray-400">{event.date}</p>
      <p className="text-sm mt-2">{event.location}</p>
      <p className="text-sm mt-2">{event.description}</p>
      <a href={event.link} className="text-neon-turquoise hover:text-white mt-4 inline-block">Register Now</a>
    </div>
  );
}

export default EventCard;
