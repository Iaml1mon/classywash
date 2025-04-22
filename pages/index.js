import Head from 'next/head';

export default function Home() {
  return (
    <div className="font-sans bg-white text-gray-900">
      <Head>
        <title>ClassyWash - Premium Cleaning Services</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-blue-900 text-white py-5 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold">ClassyWash</h1>
          <nav className="space-x-6 hidden md:flex">
            <a href="#services" className="hover:underline">Services</a>
            <a href="#about" className="hover:underline">About</a>
            <a href="#quote" className="hover:underline">Quote</a>
          </nav>
          <a href="#quote" className="bg-white text-blue-900 px-4 py-2 rounded font-medium hover:bg-gray-100">Get a Quote</a>
        </div>
      </header>

      <section className="relative bg-[url('/cleaning-bg.jpg')] bg-cover bg-center text-white py-32 px-6">
        <div className="bg-black/50 backdrop-blur-sm py-20 px-6 text-center max-w-3xl mx-auto rounded">
          <h2 className="text-5xl font-bold mb-4 leading-tight">Bringing Shine to Your Home & Office</h2>
          <p className="text-lg mb-6">Expert cleaning, pressure washing, and post-construction cleanup all across Sydney.</p>
          <a href="#quote" className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded shadow">Book Now</a>
        </div>
      </section>

      <section id="services" className="max-w-7xl mx-auto px-6 py-24">
        <h3 className="text-3xl font-bold text-center mb-12">Our Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            ['House Cleaning', 'We make your living space sparkle with professional cleaning.'],
            ['Office Cleaning', 'Create a productive and hygienic workplace environment.'],
            ['Move Out Cleaning', 'End-of-lease cleaning to help you get your bond back.'],
            ['Post-Construction', 'Remove all dust and debris after renovation or build.'],
            ['Restaurant Cleaning', 'Keep your kitchen and dining spotless and compliant.'],
            ['Pressure Washing', 'Driveways, patios, and exteriors renewed and fresh.']
          ].map(([title, desc]) => (
            <div key={title} className="bg-white p-6 shadow-md rounded hover:shadow-lg transition-all border-t-4 border-blue-600">
              <h4 className="text-xl font-bold mb-2">{title}</h4>
              <p className="text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="quote" className="bg-blue-50 py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-8">Request a Free Quote</h3>
          <form className="grid gap-4 bg-white p-6 rounded shadow">
            <input type="text" placeholder="Full Name" className="p-3 border rounded" required />
            <input type="tel" placeholder="Phone Number" className="p-3 border rounded" required />
            <input type="email" placeholder="Email Address" className="p-3 border rounded" required />
            <textarea placeholder="Describe your cleaning needs..." rows="4" className="p-3 border rounded"></textarea>
            <button type="submit" className="bg-blue-700 text-white py-3 px-6 rounded hover:bg-blue-800">Send Request</button>
          </form>
        </div>
      </section>

      <footer className="bg-blue-900 text-white py-6 text-center">
        <p>&copy; 2025 ClassyWash. All rights reserved. Sydney, AU.</p>
        <p className="text-sm mt-1">Instagram @classywashsydney | Email: yourclassywash@gmail.com</p>
      </footer>
    </div>
  );
}
