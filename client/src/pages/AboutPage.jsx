import React from "react";

const AboutPage = () => {
  return (
    <div className="bg-[#FBF6EE] text-[#2C1A10] overflow-x-hidden">

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center px-6 lg:px-16 pt-32 overflow-hidden">
        
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#f6e5c3_0%,#FBF6EE_60%)]"></div>

        {/* Decorative Blurs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C9922A]/10 rounded-full blur-3xl"></div>

        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#8B1A2E]/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">

          {/* LEFT CONTENT */}
          <div>

            <p className="uppercase tracking-[3px] text-xs text-[#C9922A] mb-5">
              ✦ About EzzyEve
            </p>

            <h1 className="font-serif text-6xl lg:text-8xl leading-none font-semibold">
              Redefining
              <br />

              <span className="italic text-[#8B1A2E]">
                Event Planning
              </span>

              <br />
              Across India
            </h1>

            <p className="mt-10 text-[#7A5C48] text-lg leading-9 max-w-2xl">
              EzzyEve is a premium event planning platform designed
              to simplify and elevate every celebration experience.
              From luxurious weddings and farewell parties to
              homecomings and cultural events, we connect users
              with trusted vendors, elegant services, and seamless
              planning tools — all in one place.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">
              
              <button className="bg-[#8B1A2E] hover:bg-[#C4374F] transition text-white px-8 py-4 rounded-xl uppercase tracking-[2px] text-sm">
                Explore Services
              </button>

              <button className="border border-[#8B1A2E] text-[#8B1A2E] hover:bg-[#8B1A2E] hover:text-white transition px-8 py-4 rounded-xl uppercase tracking-[2px] text-sm">
                Contact Us
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
                    Premium Platform
                  </p>

                  <h3 className="text-3xl font-serif font-semibold mt-2">
                    EzzyEve
                  </h3>
                </div>

                <div className="w-16 h-16 rounded-2xl bg-[#8B1A2E] flex items-center justify-center text-white text-3xl shadow-xl">
                  ✨
                </div>

              </div>

              <div className="space-y-5">

                <div className="bg-[#FBF6EE] p-5 rounded-2xl flex justify-between items-center">
                  <div>
                    <p className="font-semibold">
                      Trusted Vendors
                    </p>

                    <span className="text-sm text-[#7A5C48]">
                      Verified premium services
                    </span>
                  </div>

                  <span className="text-[#8B1A2E] font-bold text-xl">
                    8,200+
                  </span>
                </div>

                <div className="bg-[#FBF6EE] p-5 rounded-2xl flex justify-between items-center">
                  <div>
                    <p className="font-semibold">
                      Cities Covered
                    </p>

                    <span className="text-sm text-[#7A5C48]">
                      Across major Indian cities
                    </span>
                  </div>

                  <span className="text-[#8B1A2E] font-bold text-xl">
                    80+
                  </span>
                </div>

                <div className="bg-[#FBF6EE] p-5 rounded-2xl flex justify-between items-center">
                  <div>
                    <p className="font-semibold">
                      Successful Events
                    </p>

                    <span className="text-sm text-[#7A5C48]">
                      Weddings & celebrations
                    </span>
                  </div>

                  <span className="text-[#8B1A2E] font-bold text-xl">
                    50K+
                  </span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="py-28 px-6 lg:px-16">
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <div>
            
            <p className="uppercase tracking-[3px] text-xs text-[#C9922A] mb-5">
              ✦ Our Mission
            </p>

            <h2 className="font-serif text-5xl lg:text-6xl font-semibold leading-tight">
              Creating Elegant
              <br />
              Experiences
            </h2>

            <div className="w-24 h-[2px] bg-gradient-to-r from-[#8B1A2E] to-[#C9922A] mt-8"></div>

            <p className="mt-10 text-[#7A5C48] leading-9 text-lg">
              We believe event planning should be effortless,
              beautiful, and stress-free. EzzyEve empowers users
              to discover premium services, compare vendors,
              manage budgets, and plan unforgettable experiences
              with confidence and elegance.
            </p>

          </div>

          {/* RIGHT */}
          <div className="grid grid-cols-2 gap-6">

            <div className="bg-white rounded-3xl p-8 shadow-xl border border-[#C9922A]/10 hover:-translate-y-2 transition">
              
              <div className="text-5xl mb-6">💍</div>

              <h3 className="font-serif text-3xl font-semibold">
                Weddings
              </h3>

              <p className="mt-4 text-[#7A5C48] leading-8">
                Luxury wedding planning and premium vendor
                experiences.
              </p>

            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border border-[#C9922A]/10 hover:-translate-y-2 transition mt-10">
              
              <div className="text-5xl mb-6">🎉</div>

              <h3 className="font-serif text-3xl font-semibold">
                Celebrations
              </h3>

              <p className="mt-4 text-[#7A5C48] leading-8">
                Farewells, homecomings, birthdays and elegant
                social events.
              </p>

            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border border-[#C9922A]/10 hover:-translate-y-2 transition">
              
              <div className="text-5xl mb-6">🍽️</div>

              <h3 className="font-serif text-3xl font-semibold">
                Catering
              </h3>

              <p className="mt-4 text-[#7A5C48] leading-8">
                Premium cuisines and curated dining experiences.
              </p>

            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border border-[#C9922A]/10 hover:-translate-y-2 transition mt-10">
              
              <div className="text-5xl mb-6">📸</div>

              <h3 className="font-serif text-3xl font-semibold">
                Memories
              </h3>

              <p className="mt-4 text-[#7A5C48] leading-8">
                Photography, videography and timeless moments.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-28 px-6 lg:px-16 bg-[#8B1A2E] text-white">
        
        <div className="max-w-7xl mx-auto text-center">

          <p className="uppercase tracking-[3px] text-xs text-[#F6D08A] mb-5">
            ✦ Why Choose EzzyEve
          </p>

          <h2 className="font-serif text-5xl lg:text-6xl font-semibold">
            Designed For Modern
            <br />
            Indian Celebrations
          </h2>

          <div className="grid md:grid-cols-3 gap-10 mt-20">

            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-10">
              
              <div className="text-5xl mb-6">⭐</div>

              <h3 className="font-serif text-3xl font-semibold">
                Verified Vendors
              </h3>

              <p className="mt-5 text-white/70 leading-8">
                Trusted professionals across every category and city.
              </p>

            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-10">
              
              <div className="text-5xl mb-6">💎</div>

              <h3 className="font-serif text-3xl font-semibold">
                Luxury Experience
              </h3>

              <p className="mt-5 text-white/70 leading-8">
                Elegant designs and premium event planning solutions.
              </p>

            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-10">
              
              <div className="text-5xl mb-6">⚡</div>

              <h3 className="font-serif text-3xl font-semibold">
                Smart Planning
              </h3>

              <p className="mt-5 text-white/70 leading-8">
                Budget tracking, vendor management and seamless booking.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-28 px-6 lg:px-16">
        
        <div className="max-w-6xl mx-auto bg-gradient-to-r from-[#8B1A2E] to-[#5A1020] rounded-[40px] p-14 lg:p-20 text-center text-white relative overflow-hidden">

          <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#C9922A]/20 rounded-full blur-3xl"></div>

          <div className="relative z-10">

            <h2 className="font-serif text-5xl lg:text-7xl font-semibold leading-tight">
              Let’s Plan Something
              <br />
              Beautiful Together
            </h2>

            <p className="mt-8 text-white/70 max-w-2xl mx-auto text-lg leading-9">
              Start your journey with EzzyEve and create unforgettable
              celebrations with elegance and ease.
            </p>

            <button className="mt-10 bg-white text-[#8B1A2E] hover:bg-[#F6D08A] transition px-10 py-5 rounded-2xl uppercase tracking-[2px] text-sm font-semibold">
              Start Planning
            </button>

          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;