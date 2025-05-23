const Events = () => {
    const mockEvents = [
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
    ];
  
    return (
      <section className="px-4 py-10 max-w-6xl mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#8F36FF]">Upcoming Events</h1>
          <p className="text-gray-600 mt-2 text-lg">
            Stay connected and join our community events designed for families.
          </p>
        </header>
  
        <div className="grid gap-8 md:grid-cols-2">
          {mockEvents.map((event) => (
            <div
              key={event.id}
              className="border border-gray-300 rounded-2xl p-6 shadow-sm hover:shadow-md transition duration-300"
            >
              <h2 className="text-2xl font-semibold text-[#8F36FF]">{event.title}</h2>
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
  
              <button className="mt-4 px-6 py-2 bg-[#8F36FF] text-white rounded-full font-medium hover:bg-purple-700 transition">
                Register
              </button>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Events;
  