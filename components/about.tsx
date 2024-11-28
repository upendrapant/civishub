export function AboutSection() {
    return (
      <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Us</h2>
          <p className="mt-4 text-gray-500 md:text-xl">
          Join the future of citizen services. Access everything you need in one place.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold">Our Mission</h3>
              <p className="mt-2 text-gray-600">To make government services seemless.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold">Our Vision</h3>
              <p className="mt-2 text-gray-600">To be the leading platform for digital transformation and innovation.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold">Our Values</h3>
              <p className="mt-2 text-gray-600">Innovation, integrity, collaboration, and customer-centricity guide everything we do.</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  