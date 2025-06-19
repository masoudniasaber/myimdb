'use client'

import { useEffect, useState } from 'react';

type Event = {
  name: string;
  url: string;
  dates: { start: { localDate: string; localTime?: string } };
  images: { url: string }[];
  _embedded?: { venues: { name: string; city: { name: string } }[] };
};

export default function Home() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const API_KEY = 'z1rylS0iiI3FFQUoVDclcuD4yfjRK8wp';

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch(
          `https://app.ticketmaster.com/discovery/v2/events.json?countryCode=NZ&size=40&apikey=${API_KEY}`
        );
        const data = await res.json();

        // Deduplicate by event name
        const uniqueMap = new Map();
        (data._embedded?.events || []).forEach((event: Event) => {
          if (!uniqueMap.has(event.name)) {
            uniqueMap.set(event.name, event);
          }
        });

        setEvents(Array.from(uniqueMap.values()));
      } catch (err) {
        console.error('Error fetching events:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12 text-gray-900">
      <h1 className="text-4xl font-bold text-center mb-10">
        🎟️ GoTicketNow – Live Events in NZ
      </h1>

      {loading ? (
        <p className="text-center text-lg">Loading events...</p>
      ) : events.length === 0 ? (
        <p className="text-center text-lg text-gray-600">No events found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, i) => (
            <div
              key={i}
              className="bg-white border rounded-lg shadow hover:shadow-md transition"
            >
              <img
                src={event.images[0]?.url}
                alt={event.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-1">{event.name}</h2>
                <p className="text-sm text-gray-600">
                  📍 {event._embedded?.venues?.[0]?.name},{" "}
                  {event._embedded?.venues?.[0]?.city?.name}
                </p>
                <p className="text-sm text-gray-500 my-1">
                  🗓 {new Date(
                    event.dates.start.localDate +
                      'T' +
                      (event.dates.start.localTime || '00:00')
                  ).toLocaleString()}
                </p>
                <a
                  href={event.url}
                  target="_blank"
                  className="text-sm text-blue-600 font-medium hover:underline"
                >
                  View Tickets →
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
