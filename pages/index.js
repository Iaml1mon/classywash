import Head from 'next/head';

export default function Home() {
  return (
    <div className="font-sans text-gray-900">
      <Head>
        <title>ClassyWash | Sydney’s Premium Cleaning Team</title>
        <meta name="description" content="Book top-rated home, office & pressure cleaning services with ClassyWash. Professional. Fast. Trusted in Sydney." />
      </Head>

      {/* Hero Section (HyperUI Styled) */}
      <section className="relative bg-[url('/clean-bg.jpg')] bg-cover bg-center text-white">
        <div className="absolute inset-0 bg-blue-900/70 backdrop-blur-sm"></div>
        <div className="relative z-10 max-w-3xl mx-auto text-center py-28 px-6">
          <h1 className="text-5xl font-extrabold leading-tight mb-4">Your Space. Our Sparkle.</h1>
          <p className="text-lg mb-6">From homes to offices to driveways — ClassyWash delivers shine every time.</p>
          <a href="#quote" className="inline-block bg-white text-blue-800 px-6 py-3 rounded shadow font-bold hover:bg-gray-200 transition">Get a Free Quote</a>
        </div>
      </section>

      {/* Services (Feature Cards with Icons) */}
      <section id="services" className="bg-white py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">What We Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            ['🏠', 'House Cleaning', 'Top-to-bottom home cleaning with love and detail.'],
            ['🏢', 'Office Cleaning', 'Boost productivity with spotless workspaces.'],
            ['🧹', 'Move Out Cleaning', 'Stress-free bond-back cleaning guaranteed.'],
            ['🛠️', 'Post-Reno Cleanup', 'Dust & debris gone after every renovation.'],
            ['🍽️', 'Restaurant Hygiene', 'Kitchen-safe, inspection-ready deep cleaning.'],
            ['💦', 'Pressure Washing', 'Concrete, bricks, driveways restored fast.'],
          ].map(([icon, title, desc]) => (
            <div key={title} className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-md transition">
              <div className="text-4xl mb-3">{icon}</div>
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p className="text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Loved by Sydney</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              ['Sarah M.', '“They turned my rental into a hotel. Full bond refund!”'],
              ['Ali R.', '“Super professional crew — always punctual and polite.”'],
              ['Jenna K.', '“Driveway looks brand new. 10/10 pressure washing!”'],
            ].map(([name, quote]) => (
              <div key={name} className="bg-white p-6 rounded-lg shadow text-center">
                <p className="italic mb-4 text-gray-700">"{quote}"</p>
                <p className="font-bold text-blue-800">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Transparent Pricing</h2>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            {[
              ['Basic', '$99', ['2 Rooms', 'Standard Cleaning', '1 Cleaner']],
              ['Deep Clean', '$199', ['3–4 Rooms', 'Detailed Cleaning', 'Includes Windows']],
              ['Premium', '$349', ['Full Home', 'Team of 2', 'Pressure Wash Add-On']],
            ].map(([title, price, features]) => (
              <div key={title} className="border border-blue-200 p-6 rounded-lg shadow hover:shadow-md">
                <h3 className="text-xl font-bold text-blue-700 mb-2">{title}</h3>
                <p className="text-3xl font-extrabold mb-4">{price}</p>
                <ul className="text-gray-600 space-y-1 mb-4 list-disc list-inside">
                  {features.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <a href="#quote" className="block w-full text-center py-2 bg-blue-800 text-white rounded hover:bg-blue-900">Book Now</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section id="quote" className="bg-blue-900 text-white py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Book a Clean You’ll Feel</h2>
          <p className="mb-6">Drop your info and we’ll reply with a quote today.</p>
          <form className="bg-white text-black rounded p-6 space-y-4 shadow">
            <input type="text" placeholder="Full Name" className="w-full p-3 rounded border" />
            <input type="tel" placeholder="Phone Number" className="w-full p-3 rounded border" />
            <textarea placeholder="Cleaning Details" className="w-full p-3 rounded border" rows="4" />
            <button type="submit" className="w-full bg-blue-800 text-white py-3 rounded hover:bg-blue-900">Request Quote</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 text-white text-center py-6 text-sm">
        &copy; 2025 ClassyWash | Sydney, AU | yourclassywash@gmail.com | @classywashsydney
      </footer>
    </div>
  );
}
