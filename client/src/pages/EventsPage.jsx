import React from "react";

const EventsPage = () => {
  const pastEvents = [
    {
      title: "Royal Wedding Celebration",
      city: "Jaipur",
      guests: "1200 Guests",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "Luxury Farewell Night",
      city: "Mumbai",
      guests: "800 Guests",
      image:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "Grand Homecoming Event",
      city: "Delhi",
      guests: "500 Guests",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const timeline = [
    {
      year: "2023",
      title: "EzzyEve Founded",
      desc:
        "Started with a vision to simplify luxury event planning in India.",
    },

    {
      year: "2023",
      title: "1000+ Vendors Joined",
      desc:
        "Expanded across major Indian cities with verified premium vendors.",
    },

    {
      year: "2025",
      title: "10K+ Events Managed",
      desc:
        "Successfully planned weddings, farewells, and social celebrations.",
    },

    {
      year: "2026",
      title: "AI Event Planning",
      desc:
        "Introduced smart vendor recommendations and budget planning.",
    },
  ];

  return (
    <div className="bg-[#FBF6EE] text-[#2C1A10] overflow-x-hidden">

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center px-6 lg:px-16 pt-32 overflow-hidden">

        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#f6e5c3_0%,#FBF6EE_60%)]"></div>

        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C9922A]/10 rounded-full blur-3xl"></div>

        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#8B1A2E]/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <div>

            <p className="uppercase tracking-[3px] text-xs text-[#C9922A] mb-5">
              ✦ Elegant Event Experiences
            </p>

            <h1 className="font-serif text-6xl lg:text-8xl leading-none font-semibold">
              Creating
              <br />

              <span className="italic text-[#8B1A2E]">
                Unforgettable
              </span>

              <br />
              Celebrations
            </h1>

            <p className="mt-10 text-[#7A5C48] text-lg leading-9 max-w-2xl">
              EzzyEve transforms your special moments into
              luxurious experiences. From royal weddings and
              grand receptions to corporate parties and farewell
              nights — we design events that leave lasting memories.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">

              <button className="bg-[#8B1A2E] hover:bg-[#C4374F] transition text-white px-8 py-4 rounded-2xl uppercase tracking-[2px] text-sm">
                Explore Events
              </button>

              <button className="border border-[#8B1A2E] text-[#8B1A2E] hover:bg-[#8B1A2E] hover:text-white transition px-8 py-4 rounded-2xl uppercase tracking-[2px] text-sm">
                Start Planning
              </button>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="relative flex justify-center items-center">

            <div className="absolute w-[420px] h-[420px] rounded-full bg-gradient-to-r from-[#8B1A2E]/20 via-[#C9922A]/20 to-[#F6D08A]/20 blur-3xl"></div>

            <div className="relative bg-white/70 backdrop-blur-xl border border-[#C9922A]/20 rounded-[40px] shadow-2xl p-10 max-w-md">

              <div className="flex items-center justify-between mb-8">

                <div>
                  <p className="uppercase tracking-[2px] text-xs text-[#C9922A]">
                    Premium Events
                  </p>

                  <h3 className="text-3xl font-serif font-semibold mt-2">
                    Event Management
                  </h3>
                </div>

                <div className="w-16 h-16 rounded-2xl bg-[#8B1A2E] flex items-center justify-center text-white text-3xl shadow-xl">
                  🎉
                </div>

              </div>

              <div className="space-y-5">

                <div className="bg-[#FBF6EE] p-5 rounded-2xl flex justify-between items-center">

                  <div>
                    <p className="font-semibold">
                      Weddings Managed
                    </p>

                    <span className="text-sm text-[#7A5C48]">
                      Luxury wedding experiences
                    </span>
                  </div>

                  <span className="text-[#8B1A2E] font-bold text-xl">
                    12K+
                  </span>

                </div>

                <div className="bg-[#FBF6EE] p-5 rounded-2xl flex justify-between items-center">

                  <div>
                    <p className="font-semibold">
                      Happy Clients
                    </p>

                    <span className="text-sm text-[#7A5C48]">
                      Across India
                    </span>
                  </div>

                  <span className="text-[#8B1A2E] font-bold text-xl">
                    50K+
                  </span>

                </div>

                <div className="bg-[#FBF6EE] p-5 rounded-2xl flex justify-between items-center">

                  <div>
                    <p className="font-semibold">
                      Cities Covered
                    </p>

                    <span className="text-sm text-[#7A5C48]">
                      Nationwide premium services
                    </span>
                  </div>

                  <span className="text-[#8B1A2E] font-bold text-xl">
                    80+
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* PAST EVENTS */}
      <section className="py-28 px-6 lg:px-16">

        <div className="max-w-7xl mx-auto">

          <div className="flex items-center justify-between mb-14">

            <div>
              <p className="uppercase tracking-[3px] text-xs text-[#C9922A] mb-4">
                ✦ Past Events
              </p>

              <h2 className="font-serif text-5xl lg:text-6xl font-semibold">
                Memorable Celebrations
              </h2>
            </div>

            <p className="text-[#7A5C48] text-lg hidden lg:block">
              Experiences Crafted With Elegance
            </p>

          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {pastEvents.map((event, index) => (
              <div
                key={index}
                className="group bg-white rounded-[32px] overflow-hidden shadow-xl border border-[#C9922A]/10 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
              >

                {/* IMAGE */}
                <div className="relative overflow-hidden">

                  <img
                    src={event.image}
                    alt={event.title}
                    className="h-80 w-full object-cover group-hover:scale-110 transition duration-700"
                  />

                  <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold">
                    ⭐ Premium
                  </div>

                </div>

                {/* CONTENT */}
                <div className="p-8">

                  <div className="flex items-center justify-between">

                    <span className="text-[#7A5C48] text-sm">
                      📍 {event.city}
                    </span>

                    <span className="text-[#C9922A] text-sm font-semibold">
                      {event.guests}
                    </span>

                  </div>

                  <h3 className="mt-5 font-serif text-3xl font-semibold">
                    {event.title}
                  </h3>

                  <p className="mt-5 text-[#7A5C48] leading-8">
                    Elegant event planning with premium décor,
                    luxury hospitality and unforgettable experiences.
                  </p>

                  <button className="mt-8 w-full bg-[#8B1A2E] hover:bg-[#C4374F] transition text-white py-4 rounded-2xl uppercase tracking-[2px] text-sm">
                    View Event
                  </button>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* TIMELINE SECTION */}
      <section className="py-28 px-6 lg:px-16 bg-[#8B1A2E] text-white">

        <div className="max-w-7xl mx-auto">

          <div className="text-center">

            <p className="uppercase tracking-[3px] text-xs text-[#F6D08A] mb-5">
              ✦ Our Journey
            </p>

            <h2 className="font-serif text-5xl lg:text-6xl font-semibold">
              EzzyEve History
            </h2>

          </div>

          {/* TIMELINE */}
          <div className="mt-20 space-y-10">

            {timeline.map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8"
              >

                <div>
                  <p className="text-[#F6D08A] uppercase tracking-[3px] text-xs">
                    {item.year}
                  </p>

                  <h3 className="font-serif text-4xl font-semibold mt-4">
                    {item.title}
                  </h3>
                </div>

                <p className="text-white/70 leading-8 max-w-2xl">
                  {item.desc}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-28 px-6 lg:px-16">

        <div className="max-w-7xl mx-auto text-center">

          <p className="uppercase tracking-[3px] text-xs text-[#C9922A] mb-5">
            ✦ Why People Love EzzyEve
          </p>

          <h2 className="font-serif text-5xl lg:text-6xl font-semibold">
            More Than Event Planning
          </h2>

          <div className="grid md:grid-cols-3 gap-10 mt-20">

            <div className="bg-white rounded-3xl p-10 shadow-xl border border-[#C9922A]/10 hover:-translate-y-2 transition">

              <div className="text-5xl mb-6">💎</div>

              <h3 className="font-serif text-3xl font-semibold">
                Luxury Experience
              </h3>

              <p className="mt-5 text-[#7A5C48] leading-8">
                Premium event planning tailored for modern Indian celebrations.
              </p>

            </div>

            <div className="bg-white rounded-3xl p-10 shadow-xl border border-[#C9922A]/10 hover:-translate-y-2 transition">

              <div className="text-5xl mb-6">⭐</div>

              <h3 className="font-serif text-3xl font-semibold">
                Trusted Vendors
              </h3>

              <p className="mt-5 text-[#7A5C48] leading-8">
                Verified professionals delivering world-class event services.
              </p>

            </div>

            <div className="bg-white rounded-3xl p-10 shadow-xl border border-[#C9922A]/10 hover:-translate-y-2 transition">

              <div className="text-5xl mb-6">⚡</div>

              <h3 className="font-serif text-3xl font-semibold">
                Smart Planning
              </h3>

              <p className="mt-5 text-[#7A5C48] leading-8">
                Budget tracking, seamless bookings and stress-free experiences.
              </p>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default EventsPage;