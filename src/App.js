import './App.css';

function App() {
  return (
    <div className="App font-sans text-gray-900 bg-white min-h-screen flex flex-col justify-between">
      <header className="bg-blue-900 text-white p-6 text-center shadow-lg">
        <h1 className="text-4xl font-bold">ClassyWash</h1>
        <p className="text-lg mt-2">Sydney’s Premium Cleaning & Pressure Washing Service</p>
      </header>

      <main className="flex-grow p-6 max-w-4xl mx-auto">
        <section className="text-center py-12">
          <h2 className="text-3xl font-bold mb-4">We Clean. You Chill.</h2>
          <p className="text-gray-700 mb-6">
            House cleaning, end-of-lease, office, restaurant & driveway pressure washing.
            Trusted by Sydney residents and businesses for fast, reliable results.
          </p>
          <a href="#quote" className="inline-block bg-blue-700 text-white px-6 py-3 rounded font-semibold hover:bg-blue-800 transition">
            Get a Free Quote
          </a>
        </section>

        <section className="py-12">
          <h3 className="text-2xl font-bold text-center mb-8">Our Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border p-4 rounded shadow hover:shadow-md transition">🏠 House Cleaning</div>
            <div className="border p-4 rounded shadow hover:shadow-md transition">🏢 Office Cleaning</div>
            <div className="border p-4 rounded shadow hover:shadow-md transition">📦 End of Lease Cleaning</div>
            <div className="border p-4 rounded shadow hover:shadow-md transition">🧽 Post-Construction Cleaning</div>
            <div className="border p-4 rounded shadow hover:shadow-md transition">🍽️ Restaurant Cleaning</div>
            <div className="border p-4 rounded shadow hover:shadow-md transition">💦 Driveway Pressure Washing</div>
          </div>
        </section>

        <section id="quote" className="bg-blue-50 p-8 mt-12 rounded shadow">
          <h3 className="text-2xl font-bold mb-4 text-center">Request a Free Quote</h3>
          <form className="grid gap-4">
            <input type="text" placeholder="Your Name" className="p-3 border rounded" required />
            <input type="email" placeholder="Email Address" className="p-3 border rounded" required />
            <input type="tel" placeholder="Phone Number" className="p-3 border rounded" required />
            <textarea placeholder="Tell us what you need cleaned..." className="p-3 border rounded" rows="4" />
            <button type="submit" className="bg-blue-700 text-white py-3 px-6 rounded hover:bg-blue-800">Send Quote Request</button>
          </form>
        </section>
      </main>

      <footer className="bg-blue-900 text-white text-center p-4 text-sm">
        &copy; 2025 ClassyWash | Sydney, AU | yourclassywash@gmail.com | 0492 839 791
      </footer>
    </div>
  );
}

export default App;