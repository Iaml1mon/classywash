// Add this to pages/index.js (replace old content)

import Head from 'next/head';

export default function Home() {
  return (
    <div className="font-sans bg-gradient-to-tr from-white to-blue-50 min-h-screen text-gray-900">
      <Head>
        <title>ClassyWash - Premium Cleaning Services</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="sticky top-0 bg-white shadow z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-900">ClassyWash</h1>
          <a href="#quote" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Get a Quote</a>
        </div>
      </header>

      <section className="text-center py-20 px-6 bg-blue-100">
        <h2 className="text-4xl font-bold text-blue-900 mb-4">Stay Clean. Stay Classy.</h2>
        <p className="text-lg text-blue-800 max-w-xl mx-auto mb-6">Sydney’s trusted cleaning team for homes, businesses, and construction sites. Reliable, affordable, and always spotless.</p>
        <a href="#quote" className="inline-block bg-blue-700 text-white py-3 px-6 rounded-lg shadow hover:bg-blue-800">Book Your Clean</a>
      </section>

      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h3 className="text-3xl font-semibold text-center mb-10">Our Services</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            ['🏠', 'House Cleaning'],
            ['🏢', 'Office & Store Cleaning'],
            ['🧹', 'Move Out / End of Lease'],
            ['🛠️', 'Post-Construction'],
            ['🍽️', 'Restaurant Cleaning'],
            ['🚿', 'Pressure Washing']
          ].map(([icon, label]) => (
            <div key={label} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <div className="text-4xl mb-2">{icon}</div>
              <h4 className="text-xl font-bold mb-2">{label}</h4>
              <p className="text-gray-600">Professional {label.toLowerCase()} with a touch of class.</p>
            </div>
          ))}
        </div>
      </section>

      <section id="quote" className="bg-white py-16 px-6 max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold mb-6 text-center">Request a Free Quote</h3>
        <form className="grid gap-4">
          <input type="text" placeholder="Name" className="p-3 border rounded" required />
          <input type="tel" placeholder="Phone" className="p-3 border rounded" required />
          <input type="email" placeholder="Email" className="p-3 border rounded" required />
          <textarea placeholder="Your Message" rows="4" className="p-3 border rounded"></textarea>
          <button className="bg-blue-700 text-white py-3 px-6 rounded hover:bg-blue-800">Submit</button>
        </form>
      </section>

      <footer className="bg-blue-900 text-white text-center py-6 mt-12">
        <p>&copy; 2025 ClassyWash. Made in Sydney.</p>
        <p className="text-sm">Follow us: @classywashsydney</p>
      </footer>
    </div>
  );
}

// Run these after adding to project:
// git add .
// git commit -m "Upgraded UI with hero, services, and booking form"
// git push
