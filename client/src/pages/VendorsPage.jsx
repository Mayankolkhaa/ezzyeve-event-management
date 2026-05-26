import React, { useState } from "react";

const VendorsPage = () => {
  const vendors = [
    {
      id: 1,
      name: "Royal Palace Weddings",
      category: "Wedding Venue",
      city: "Mumbai",
      rating: 4.9,
      price: "₹5L+",
      image:
        "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1200&auto=format&fit=crop",
      description:
        "Luxury palace weddings with royal décor and premium hospitality.",
    },

    {
      id: 2,
      name: "Elegant Bridal Couture",
      category: "Bridal Wear",
      city: "Delhi",
      rating: 4.8,
      price: "₹1L - ₹5L",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop",
      description:
        "Designer lehengas and premium bridal collections for modern weddings.",
    },

    {
      id: 3,
      name: "Golden Feast Catering",
      category: "Catering",
      city: "Pune",
      rating: 4.7,
      price: "₹50K - ₹1L",
      image:
        "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1200&auto=format&fit=crop",
      description:
        "Traditional and modern cuisines crafted for unforgettable celebrations.",
    },

    {
      id: 4,
      name: "Vintage Baraat Cars",
      category: "Car Rental",
      city: "Jaipur",
      rating: 4.6,
      price: "₹10K - ₹50K",
      image:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop",
      description:
        "Luxury vintage and premium cars for royal baraat experiences.",
    },

    {
      id: 5,
      name: "Dream Moments Studio",
      category: "Photography",
      city: "Bangalore",
      rating: 5.0,
      price: "₹1L - ₹5L",
      image:
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop",
      description:
        "Cinematic wedding films and premium photography experiences.",
    },

    {
      id: 6,
      name: "Floral Aura Decor",
      category: "Decor",
      city: "Hyderabad",
      rating: 4.9,
      price: "₹50K - ₹1L",
      image:
        "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=1200&auto=format&fit=crop",
      description:
        "Luxury floral decorations and elegant thematic event styling.",
    },
  ];

  const [search, setSearch] = useState("");

  const filteredVendors = vendors.filter((vendor) =>
    vendor.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-[#FBF6EE] min-h-screen text-[#2C1A10] overflow-x-hidden">

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-24 px-6 lg:px-16 overflow-hidden">

        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#f6e5c3_0%,#FBF6EE_60%)]"></div>

        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C9922A]/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto">

          <p className="uppercase tracking-[3px] text-xs text-[#C9922A] mb-5">
            ✦ Premium Vendors
          </p>

          <h1 className="font-serif text-6xl lg:text-8xl leading-none font-semibold">
            Discover Trusted
            <br />

            <span className="italic text-[#8B1A2E]">
              Event Professionals
            </span>
          </h1>

          <p className="mt-10 text-[#7A5C48] text-lg leading-9 max-w-3xl">
            Explore India's finest wedding venues, catering services,
            photographers, decorators, bridal designers and more —
            carefully curated for luxurious and unforgettable celebrations.
          </p>

          {/* SEARCH BAR */}
          <div className="mt-12 bg-white rounded-3xl shadow-2xl border border-[#C9922A]/20 p-5 flex flex-col lg:flex-row gap-5">

            <input
              type="text"
              placeholder="Search premium vendors..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 border border-[#C9922A]/20 rounded-2xl px-6 py-5 outline-none focus:border-[#8B1A2E]"
            />

            <button className="bg-[#8B1A2E] hover:bg-[#C4374F] transition text-white px-10 py-5 rounded-2xl uppercase tracking-[2px] text-sm">
              Search
            </button>

          </div>

        </div>
      </section>

      {/* STATS SECTION */}
      <section className="px-6 lg:px-16 py-10">
        
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="bg-white rounded-3xl p-8 shadow-xl border border-[#C9922A]/10 text-center">
            
            <h2 className="font-serif text-5xl font-semibold text-[#8B1A2E]">
              8K+
            </h2>

            <p className="mt-3 uppercase tracking-[2px] text-xs text-[#7A5C48]">
              Verified Vendors
            </p>

          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl border border-[#C9922A]/10 text-center">
            
            <h2 className="font-serif text-5xl font-semibold text-[#8B1A2E]">
              80+
            </h2>

            <p className="mt-3 uppercase tracking-[2px] text-xs text-[#7A5C48]">
              Indian Cities
            </p>

          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl border border-[#C9922A]/10 text-center">
            
            <h2 className="font-serif text-5xl font-semibold text-[#8B1A2E]">
              50K+
            </h2>

            <p className="mt-3 uppercase tracking-[2px] text-xs text-[#7A5C48]">
              Events Managed
            </p>

          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl border border-[#C9922A]/10 text-center">
            
            <h2 className="font-serif text-5xl font-semibold text-[#8B1A2E]">
              4.9★
            </h2>

            <p className="mt-3 uppercase tracking-[2px] text-xs text-[#7A5C48]">
              Average Ratings
            </p>

          </div>

        </div>
      </section>

      {/* VENDORS GRID */}
      <section className="px-6 lg:px-16 py-20">
        
        <div className="max-w-7xl mx-auto">

          <div className="flex items-center justify-between mb-12">
            
            <div>
              <p className="uppercase tracking-[3px] text-xs text-[#C9922A] mb-3">
                ✦ Featured Vendors
              </p>

              <h2 className="font-serif text-5xl font-semibold">
                Luxury Vendor Collection
              </h2>
            </div>

            <p className="text-[#7A5C48] text-lg">
              {filteredVendors.length} Vendors Found
            </p>

          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {filteredVendors.map((vendor) => (
              <div
                key={vendor.id}
                className="group bg-white rounded-[32px] overflow-hidden shadow-xl border border-[#C9922A]/10 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
              >

                {/* IMAGE */}
                <div className="relative overflow-hidden">

                  <img
                    src={vendor.image}
                    alt={vendor.name}
                    className="h-80 w-full object-cover group-hover:scale-110 transition duration-700"
                  />

                  {/* RATING */}
                  <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    ⭐ {vendor.rating}
                  </div>

                  {/* CATEGORY */}
                  <div className="absolute bottom-5 left-5 bg-[#8B1A2E] text-white px-5 py-2 rounded-full text-xs uppercase tracking-[2px]">
                    {vendor.category}
                  </div>

                </div>

                {/* CONTENT */}
                <div className="p-8">

                  <div className="flex items-center justify-between">
                    
                    <span className="text-sm text-[#7A5C48]">
                      📍 {vendor.city}
                    </span>

                    <span className="text-[#C9922A] text-sm font-semibold">
                      Verified
                    </span>

                  </div>

                  <h3 className="mt-5 font-serif text-3xl font-semibold leading-tight">
                    {vendor.name}
                  </h3>

                  <p className="mt-5 text-[#7A5C48] leading-8">
                    {vendor.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between">

                    <div>
                      <p className="text-sm uppercase tracking-[2px] text-[#7A5C48]">
                        Starting From
                      </p>

                      <h4 className="text-3xl font-bold text-[#8B1A2E] mt-2">
                        {vendor.price}
                      </h4>
                    </div>

                    <div className="flex gap-2">

                      <span className="bg-[#FBF6EE] px-4 py-2 rounded-full text-xs uppercase tracking-[1px]">
                        Luxury
                      </span>

                    </div>

                  </div>

                  {/* BUTTONS */}
                  <div className="flex gap-4 mt-8">

                    <button className="flex-1 bg-[#8B1A2E] hover:bg-[#C4374F] transition text-white py-4 rounded-2xl uppercase tracking-[2px] text-sm">
                      Book Now
                    </button>

                    <button className="flex-1 border border-[#8B1A2E] text-[#8B1A2E] hover:bg-[#8B1A2E] hover:text-white transition py-4 rounded-2xl uppercase tracking-[2px] text-sm">
                      View Profile
                    </button>

                  </div>

                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* WHY CHOOSE SECTION */}
      <section className="py-28 px-6 lg:px-16 bg-[#8B1A2E] text-white">

        <div className="max-w-7xl mx-auto text-center">

          <p className="uppercase tracking-[3px] text-xs text-[#F6D08A] mb-5">
            ✦ Why Choose EzzyEve Vendors
          </p>

          <h2 className="font-serif text-5xl lg:text-6xl font-semibold">
            Premium Experiences
            <br />
            Crafted With Elegance
          </h2>

          <div className="grid md:grid-cols-3 gap-10 mt-20">

            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-10 border border-white/10">

              <div className="text-5xl mb-6">⭐</div>

              <h3 className="font-serif text-3xl font-semibold">
                Verified Professionals
              </h3>

              <p className="mt-5 text-white/70 leading-8">
                Every vendor is carefully verified for quality and trust.
              </p>

            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-10 border border-white/10">

              <div className="text-5xl mb-6">💎</div>

              <h3 className="font-serif text-3xl font-semibold">
                Luxury Services
              </h3>

              <p className="mt-5 text-white/70 leading-8">
                Premium event experiences designed for unforgettable celebrations.
              </p>

            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-10 border border-white/10">

              <div className="text-5xl mb-6">⚡</div>

              <h3 className="font-serif text-3xl font-semibold">
                Easy Booking
              </h3>

              <p className="mt-5 text-white/70 leading-8">
                Seamless planning and instant vendor connections.
              </p>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default VendorsPage;