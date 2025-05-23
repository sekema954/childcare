import { useState } from "react";

const Post_event = () => {
  // Initial mock data for events
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Autism Awareness Workshop",
      date: "April 20, 2025",
      time: "10:00 AM - 1:00 PM",
      location: "Atlanta Community Center",
      description:
        "Join us for an interactive workshop focused on autism awareness, parent support, and available resources.",
    },
    {
      id: 2,
      title: "Parent Networking Night",
      date: "May 5, 2025",
      time: "6:00 PM - 8:00 PM",
      location: "Kennesaw Family Hall",
      description:
        "Connect with other parents and professionals in a casual, supportive environment. Refreshments provided.",
    },
    {
      id: 3,
      title: "Summer Fun Fair",
      date: "June 10, 2025",
      time: "11:00 AM - 4:00 PM",
      location: "Brookhaven Park",
      description:
        "A day of games, music, snacks, and fun activities for children and families in the autism community.",
    },
  ]);

  // State for the new event form
  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    time: "",
    location: "",
    description: "",
  });

  // Handle adding a new event
  const handleAddEvent = (e: React.FormEvent) => {
    e.preventDefault();

    const event = {
      ...newEvent,
      id: events.length + 1, // Simple ID generation
    };

    setEvents([...events, event]);
    setNewEvent({
      title: "",
      date: "",
      time: "",
      location: "",
      description: "",
    });
  };

  // Handle deleting an event
  const handleDeleteEvent = (id: number) => {
    setEvents(events.filter((event) => event.id !== id));
  };

  return (
    <section className="px-6 py-10 max-w-6xl mx-auto mt-17">
      <header className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#8F36FF]">Admin Dashboard</h1>
        <p className="text-lg text-gray-600 mt-2">Manage your daycare events.</p>
      </header>

      {/* Add New Event Form */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-[#8F36FF]">Post a New Event</h2>
        <form onSubmit={handleAddEvent} className="space-y-4 mt-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium">Event Title</label>
            <input
              type="text"
              id="title"
              value={newEvent.title}
              onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
              className="p-2 border border-gray-300 rounded w-full"
              required
            />
          </div>
          <div>
            <label htmlFor="date" className="block text-sm font-medium">Event Date</label>
            <input
              type="date"
              id="date"
              value={newEvent.date}
              onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
              className="p-2 border border-gray-300 rounded w-full"
              required
            />
          </div>
          <div>
            <label htmlFor="time" className="block text-sm font-medium">Event Time</label>
            <input
              type="text"
              id="time"
              value={newEvent.time}
              onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })}
              className="p-2 border border-gray-300 rounded w-full"
              required
            />
          </div>
          <div>
            <label htmlFor="location" className="block text-sm font-medium">Event Location</label>
            <input
              type="text"
              id="location"
              value={newEvent.location}
              onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
              className="p-2 border border-gray-300 rounded w-full"
              required
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium">Event Description</label>
            <textarea
              id="description"
              value={newEvent.description}
              onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
              className="p-2 border border-gray-300 rounded w-full"
              required
            />
          </div>
          <button
            type="submit"
            className="mt-4 px-6 py-2 bg-[#8F36FF] text-white rounded-full font-medium hover:bg-purple-700 transition"
          >
            Add Event
          </button>
        </form>
      </div>

      {/* Display Events */}
      <div>
        <h2 className="text-2xl font-semibold text-[#8F36FF]">Manage Events</h2>
        <div
          className="grid gap-8 md:grid-cols-2 mt-6 max-h-96 overflow-y-auto" // Added max-height and overflow-y-auto
        >
          {events.map((event) => (
            <div
              key={event.id}
              className="border border-gray-300 rounded-2xl p-6 shadow-sm hover:shadow-md transition duration-300"
            >
              <h3 className="text-2xl font-semibold text-[#8F36FF]">{event.title}</h3>
              <p className="mt-2 text-gray-700">
                <strong>Date:</strong> {event.date}
              </p>
              <p className="text-gray-700">
                <strong>Time:</strong> {event.time}
              </p>
              <p className="text-gray-700">
                <strong>Location:</strong> {event.location}
              </p>
              <p className="mt-3 text-gray-600">{event.description}</p>

              <button
                onClick={() => handleDeleteEvent(event.id)}
                className="mt-4 px-6 py-2 bg-red-500 text-white rounded-full font-medium hover:bg-red-700 transition"
              >
                Delete Event
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Post_event;
