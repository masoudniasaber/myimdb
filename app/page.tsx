export default function Home() {
  return (
    <main className="bg-white text-gray-900 min-h-screen">
      {/* Header */}
      <header className="border-b shadow-sm px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold tracking-tight">🎟 GoTicketNow</h1>
        <nav>
          <ul className="flex gap-4 text-sm font-medium text-gray-600">
            <li><a href="#" className="hover:text-black">Home</a></li>
            <li><a href="#" className="hover:text-black">Events</a></li>
            <li><a href="#" className="hover:text-black">About</a></li>
            <li><a href="#" className="hover:text-black">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-16 px-6 bg-gray-50">
        <h2 className="text-4xl font-bold mb-4">Find Your Next Live Experience</h2>
        <p className="text-lg text-gray-600 mb-6">
          Discover concerts, sports, theatre and more — powered by the Ticketmaster API.
        </p>
        <a
          href="#events"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Browse Events
        </a>
      </section>

      {/* Featured Events */}
      <section id="events" className="py-12 px-6 max-w-5xl mx-auto">
        <h3 className="text-2xl font-semibold mb-6 text-center">Featured Events</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="bg-white border rounded-lg shadow hover:shadow-md transition"
            >
              <div className="h-40 bg-gray-200 rounded-t-lg"></div>
              <div className="p-4">
                <h4 className="font-semibold text-lg mb-1">Sample Event {i + 1}</h4>
                <p className="text-sm text-gray-600 mb-2">Auckland • July 2025</p>
                <a
                  href="#"
                  className="text-sm text-blue-600 font-medium hover:underline"
                >
                  View Tickets →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-6 text-center text-sm text-gray-500 mt-12">
        &copy; {new Date().getFullYear()} GoTicketNow — Built with the Ticketmaster API
      </footer>
    </main>
  );
}
