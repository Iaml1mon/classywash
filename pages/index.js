import Head from 'next/head';
import { useEffect, useState } from 'react';

export default function Home() {
  const testimonials = [
    { name: 'Sarah M.', text: 'ClassyWash saved our move-out day. Sparkling clean & stress-free!', rating: 5 },
    { name: 'James K.', text: 'Their pressure wash made my driveway look brand new!', rating: 5 },
    { name: 'Anita R.', text: 'Professional team and spotless service every time.', rating: 5 },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-sans bg-white text-gray-900">
      <Head>
        <title>ClassyWash - Premium Cleaning Services in Sydney</title>
        <meta name="description" content="Book professional cleaning, pressure washing, and end-of-lease services in Sydney with ClassyWash." />
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

      <section className="relative bg-gradient-to-br from-blue-800 to-blue-500 text-white py-32 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-extrabold mb-4">We Clean. You Chill.</h2>
          <p className="text-xl mb-6">Book expert cleaners in Sydney in under 60 seconds.</p>
          <a href="#quote" className="bg-white text-blue-800 font-semibold py-3 px-6 rounded shadow hover:bg-blue-100">💬 Get Instant Quote</a>
        </div>
      </section>

      <section id="services" className="max-w-7xl mx-auto px-6 py-24">
        <h3 className="text-3xl font-bold text-center mb-12">Our Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            ['House Cleaning', 'We make your living space sparkle.'],
            ['Office Cleaning', 'Productivity starts with cleanliness.'],
            ['Move Out Cleaning', 'End-of-lease, hassle-free and spotless.'],
            ['Post-Construction', 'Remove all dust and debris after renos.'],
            ['Restaurant Cleaning', 'Kitchen, dining, and hygiene-compliant.'],
            ['Pressure Washing', 'Driveways, patios, and facades renewed.']
          ].map(([title, desc]) => (
            <div key={title} className="bg-white/80 backdrop-blur p-6 border-t-4 border-blue-600 rounded shadow hover:shadow-lg transition-all">
              <h4 className="text-xl font-bold mb-2">{title}</h4>
              <p className="text-gray-700">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="bg-gray-50 py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-4">About ClassyWash</h3>
          <p className="text-lg text-gray-700">ClassyWash is Sydney’s go-to cleaning team. Whether it’s a post-party kitchen, a dusty reno site, or your weekly house clean, we make it shine. 5-star reviews, real results, and a clean you can feel.</p>
        </div>
      </section>

      <section className="bg-blue-100 py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">What Our Clients Say</h3>
          <div className="bg-white shadow-lg p-6 rounded">
            <p className="text-xl italic mb-4">"{testimonials[currentTestimonial].text}"</p>
            <p className="font-semibold">- {testimonials[currentTestimonial].name}</p>
            <p className="text-yellow-500">{'⭐'.repeat(testimonials[currentTestimonial].rating)}</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Pricing</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              ['Basic', '$99', ['1 Bedroom', '1 Bathroom', 'Basic Surface Cleaning']],
              ['Deep Clean', '$199', ['3 Bedrooms', '2 Bathrooms', 'Deep Cleaning + Windows']],
              ['Premium', '$349', ['Full House', 'Balcony & Windows', 'Pressure Wash + Carpet']] 
            ].map(([title, price, features]) => (
              <div key={title} className="border rounded-lg p-6 shadow-md hover:shadow-xl transition">
                <h4 className="text-xl font-bold mb-2">{title}</h4>
                <p className="text-3xl font-extrabold mb-4">{price}</p>
                <ul className="mb-6 space-y-1 text-left list-disc list-inside text-gray-600">
                  {features.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 w-full">Book Now</button>
              </div>
            ))}
          </div>
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
        <p>&copy; 2025 ClassyWash. All rights reserved. ClassyWash, AU.</p>
        <p className="text-sm mt-1">Instagram @classywashsydney | Email: yourclassywash@gmail.com</p>
      </footer>
    </div>
  );
}
