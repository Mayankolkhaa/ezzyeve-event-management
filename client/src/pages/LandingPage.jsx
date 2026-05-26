import React, { useState } from "react";
import { Link } from "react-router-dom";
import AIChatbot from "../components/AIChatbot";

const LandingPage = () => {
  const [showChat, setShowChat] =
  useState(false);
  return (
    <div className="bg-[#FBF6EE] text-[#2C1A10] overflow-x-hidden font-[Jost]">
      
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#FBF6EE]/90 border-b border-[#C9922A]/20 px-6 lg:px-16 py-5 flex items-center justify-between">
        
        {/* LOGO */}
        <div className="text-3xl font-semibold font-[Cormorant_Garamond] text-[#8B1A2E]">
          Ezzy<span className="text-[#C9922A]">Eve</span>
        </div>

        {/* NAV LINKS */}
        <ul className="hidden lg:flex items-center gap-10 uppercase tracking-[2px] text-sm text-[#7A5C48]">
          
          <li>
            <Link
              to="/services"
              className="hover:text-[#C9922A] transition"
            >
              Services
            </Link>
          </li>

          <li>
            <Link
              to="/vendors"
              className="hover:text-[#C9922A] transition"
            >
              Vendors
            </Link>
          </li>

          <li>
            <Link
              to="/events"
              className="hover:text-[#C9922A] transition"
            >
              Events
            </Link>
          </li>

          <li>
            <Link
              to="/budget"
              className="hover:text-[#C9922A] transition"
            >
              Budget
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className="hover:text-[#C9922A] transition"
            >
              About
            </Link>
          </li>
          <Link
  to="/admin-login"
  className="border border-[#8B1A2E] text-[#8B1A2E] hover:bg-[#8B1A2E] hover:text-white transition px-5 py-3 rounded-2xl"
>

  Admin Login

</Link>

        </ul>

        {/* CTA BUTTON */}
        <Link
          to="/plan-event"
          className="bg-[#8B1A2E] hover:bg-[#C4374F] transition text-white px-6 py-3 uppercase tracking-[2px] text-sm"
        >
          Plan Your Event
        </Link>

      </nav>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center px-6 lg:px-16 pt-32 overflow-hidden">
        
        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,#f7e8c8_0%,#FBF6EE_60%)]"></div>

        {/* Decorative Blur */}
        <div className="absolute top-0 right-0 w-125 h-125 bg-[#C9922A]/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center w-full max-w-7xl mx-auto">
          
          {/* LEFT CONTENT */}
          <div>

            <div className="inline-block border border-[#C9922A]/40 bg-[#FDF3DC] text-[#C9922A] uppercase tracking-[3px] text-xs px-5 py-2 mb-6">
              ✦ India's Premier Event Platform
            </div>

            <h1 className="font-[Cormorant_Garamond] text-6xl lg:text-8xl leading-none font-semibold text-[#2C1A10]">
              Plan Every
              <br />

              <span className="italic text-[#8B1A2E]">
                Celebration
              </span>

              <br />
              with Elegance
            </h1>

            <p className="mt-8 text-[#7A5C48] text-lg leading-9 max-w-xl font-light">
              From lavish weddings to intimate farewells — EzzyEve
              connects you with the finest vendors, caterers,
              decorators, and more across every city in India.
            </p>

            {/* HERO BUTTONS */}
            <div className="flex flex-wrap gap-5 mt-10">
              
             {/* <Link
                to="/plan-event"
                className="bg-[#8B1A2E] hover:bg-[#C4374F] transition text-white px-8 py-4 uppercase tracking-[2px] text-sm"
              >
                Start Planning
              </Link>*/}
              <Link to="/booking">

  <button className="bg-[#8B1A2E] hover:bg-[#C4374F] transition text-white px-8 py-4 rounded-2xl uppercase tracking-[2px] text-sm">
    Start Planning
  </button>

</Link>

              <Link
  to="/vendor-register"
  className="border border-[#C9922A] text-[#C9922A] hover:bg-[#C9922A] hover:text-white transition px-8 py-4 uppercase tracking-[2px] text-sm rounded-2xl"
>

  Are You A Vendor?

</Link>

            </div>

          </div>

          {/* RIGHT VISUAL */}
          <div className="relative flex justify-center items-center h-137.5">

            {/* Floating Cards */}
            <div className="absolute top-10 left-0 bg-white shadow-2xl border border-[#C9922A]/20 p-5 rounded-md animate-bounce">
              <div className="text-2xl">💍</div>

              <p className="uppercase tracking-[2px] text-xs text-[#7A5C48] mt-2">
                Weddings Planned
              </p>

              <h3 className="font-[Cormorant_Garamond] text-3xl text-[#8B1A2E] font-semibold">
                12,400+
              </h3>
            </div>

            <div className="absolute bottom-16 left-0 bg-white shadow-2xl border border-[#C9922A]/20 p-5 rounded-md animate-pulse">
              <div className="text-2xl">⭐</div>

              <p className="uppercase tracking-[2px] text-xs text-[#7A5C48] mt-2">
                Avg Rating
              </p>

              <h3 className="font-[Cormorant_Garamond] text-3xl text-[#8B1A2E] font-semibold">
                4.9 / 5
              </h3>
            </div>

            <div className="absolute top-20 right-0 bg-white shadow-2xl border border-[#C9922A]/20 p-5 rounded-md animate-bounce">
              <div className="text-2xl">🏙️</div>

              <p className="uppercase tracking-[2px] text-xs text-[#7A5C48] mt-2">
                Cities Live
              </p>

              <h3 className="font-[Cormorant_Garamond] text-3xl text-[#8B1A2E] font-semibold">
                80+
              </h3>
            </div>

            {/* MAIN ORB */}
            <div className="relative w-[350px]; h-[350px]; rounded-full bg-gradient-to-r from-[#8B1A2E] via-[#C9922A] to-[#F0C76A] p-6 shadow-[0_40px_120px_rgba(139,26,46,0.25)] animate-pulse">
              
              <div className="w-full h-full rounded-full bg-gradient-to-br from-[#FDF3DC] via-[#e8c87a] to-[#6e3a1a] flex flex-col justify-center items-center text-center">
                
                <h2 className="font-[Cormorant_Garamond] text-5xl text-[#8B1A2E] font-semibold">
                  EzzyEve
                </h2>

                <p className="uppercase tracking-[4px] text-[#C9922A] text-xs mt-2">
                  Your event, perfected
                </p>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="bg-[#8B1A2E] py-10 px-6 lg:px-16">
        
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-10 text-center text-white">
          
          <div>
            <h2 className="font-[Cormorant_Garamond] text-5xl font-semibold">
              50,000+
            </h2>

            <p className="uppercase tracking-[2px] text-xs opacity-70 mt-2">
              Happy Families
            </p>
          </div>

          <div>
            <h2 className="font-[Cormorant_Garamond] text-5xl font-semibold">
              8,200+
            </h2>

            <p className="uppercase tracking-[2px] text-xs opacity-70 mt-2">
              Verified Vendors
            </p>
          </div>

          <div>
            <h2 className="font-[Cormorant_Garamond] text-5xl font-semibold">
              80+
            </h2>

            <p className="uppercase tracking-[2px] text-xs opacity-70 mt-2">
              Indian Cities
            </p>
          </div>

          <div>
            <h2 className="font-[Cormorant_Garamond] text-5xl font-semibold">
              ₹200Cr+
            </h2>

            <p className="uppercase tracking-[2px] text-xs opacity-70 mt-2">
              Events Managed
            </p>
          </div>

        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-28 px-6 lg:px-16">
        
        <div className="max-w-7xl mx-auto">

          <p className="uppercase tracking-[3px] text-xs text-[#C9922A] mb-5">
            ✦ Our Services
          </p>

          <h2 className="font-[Cormorant_Garamond] text-5xl lg:text-6xl font-semibold leading-tight">
            Everything Your
            <br />
            Event Deserves
          </h2>

          <div className="w-20 h-[2px] bg-gradient-to-r from-[#8B1A2E] to-[#C9922A] mt-8"></div>

          <p className="mt-8 text-[#7A5C48] max-w-2xl leading-9">
            Browse hundreds of curated vendors across every category
            you need — all in one elegant platform.
          </p>

          {/* SERVICES GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

            {[
              {
                icon: "🌸",
                title: "Wedding Venues",
                desc: "Palaces, farmhouses, banquet halls, and outdoor mandaps.",
                featured: true,
              },
              {
                icon: "👰",
                title: "Bridal Wear",
                desc: "Lehengas, sarees, and sherwanis from top designers.",
              },
              {
                icon: "🍽️",
                title: "Catering Services",
                desc: "Regional cuisines, live counters, fusion menus.",
              },
              {
                icon: "🚗",
                title: "Car Rentals",
                desc: "Luxury cars and baraat vehicles across cities.",
              },
              {
                icon: "🎨",
                title: "Décor & Florals",
                desc: "Marigold mandaps and thematic décor setups.",
              },
              {
                icon: "📸",
                title: "Photography",
                desc: "Cinematic reels and premium albums.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden border rounded-md p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                  item.featured
                    ? "bg-gradient-to-br from-[#8B1A2E] to-[#5a1020] text-white border-none"
                    : "bg-white border-[#C9922A]/20"
                }`}
              >
                
                <div className="text-5xl mb-6">
                  {item.icon}
                </div>

                <h3 className="font-[Cormorant_Garamond] text-3xl font-semibold mb-4">
                  {item.title}
                </h3>

                <p
                  className={`leading-8 ${
                    item.featured
                      ? "text-white/80"
                      : "text-[#7A5C48]"
                  }`}
                >
                  {item.desc}
                </p>

                {!item.featured && (
                  <span className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition text-[#C9922A] text-2xl">
                    →
                  </span>
                )}

              </div>
            ))}

          </div>
        </div>
      </section>
     {/* FLOATING AI CHATBOT */}

<div className="fixed bottom-6 right-6 z-[100]">

  {/* CHAT WINDOW */}

  {showChat && (

    <div className="mb-5 w-[380px] h-[600px] bg-white rounded-[32px] shadow-2xl overflow-hidden border border-[#E8D9BD] animate-[fadeIn_.3s_ease]">

      {/* HEADER */}

      <div className="bg-[#8B1A2E] text-white px-6 py-5 flex items-center justify-between">

        <div>

          <h3 className="font-[Cormorant_Garamond] text-3xl font-semibold">
            Ezzy AI
          </h3>

          <p className="text-white/70 text-sm">
            Luxury Event Assistant
          </p>

        </div>

        <button
          onClick={() =>
            setShowChat(false)
          }
          className="text-2xl"
        >
          ✕
        </button>

      </div>

      {/* CHATBOT */}

      <div className="h-[calc(100%-88px)] overflow-hidden">

        <AIChatbot />

      </div>

    </div>

  )}

  {/* FLOATING BUTTON */}

  <button
    onClick={() =>
      setShowChat(!showChat)
    }
    className="w-20 h-20 rounded-full bg-gradient-to-r from-[#8B1A2E] to-[#C9922A] text-white shadow-2xl flex items-center justify-center text-4xl hover:scale-110 transition duration-300"
  >

    🤖

  </button>

</div>

</div>

    
  );
};

export default LandingPage;