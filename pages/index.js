// ...existing code remains above

      <section id="testimonials" className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-10">What Our Clients Say</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              ['"ClassyWash made our office sparkle. Highly recommend!"', '– Alex, Sydney CBD'],
              ['"End-of-lease cleaning was spotless. Got my full bond back!"', '– Priya, Parramatta'],
              ['"They transformed our restaurant kitchen. So clean!"', '– Marco, Darlinghurst']
            ].map(([quote, name], index) => (
              <div key={index} className="bg-blue-50 p-6 rounded shadow text-left">
                <p className="text-lg italic text-gray-700 mb-4">{quote}</p>
                <p className="font-semibold text-blue-900">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="bg-gray-100 py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-10">Affordable Pricing</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[{
              title: 'Basic Clean',
              price: '$9',
              features: ['1 Bedroom', '1 Bathroom', 'Light Dusting & Mopping']
            }, {
              title: 'Standard Clean',
              price: '$149',
              features: ['2-3 Bedrooms', '2 Bathrooms', 'Kitchen & Living Area']
            }, {
              title: 'Deep Clean',
              price: '$249',
              features: ['4+ Bedrooms', 'Full House Detailing', 'Walls, Windows, & Floors']
            }].map((pkg, i) => (
              <div key={i} className="bg-white p-8 rounded shadow hover:shadow-lg">
                <h4 className="text-xl font-bold mb-2 text-blue-800">{pkg.title}</h4>
                <p className="text-4xl font-bold text-blue-900 mb-4">{pkg.price}</p>
                <ul className="text-gray-600 space-y-2 mb-6">
                  {pkg.features.map((f, idx) => <li key={idx}>✓ {f}</li>)}
                </ul>
                <a href="#quote" className="inline-block bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">Book Now</a>
              </div>
            ))}
          </div>
        </div>
      </section>

// ...footer and closing tags remain
