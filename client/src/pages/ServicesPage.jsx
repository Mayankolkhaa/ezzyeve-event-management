import React, {
  useEffect,
  useState,
} from "react";

import axios from "axios";

const ServicesPage = () => {

  // =========================
  // STATE
  // =========================

  const [vendors, setVendors] =
    useState([]);

  const [search, setSearch] =
    useState("");

  const [selectedCity, setSelectedCity] =
    useState("All");

  const [selectedCategory, setSelectedCategory] =
    useState("All");

  // =========================
  // FETCH APPROVED VENDORS
  // =========================

  useEffect(() => {

    fetchVendors();

  }, []);

  const fetchVendors = async () => {

    try {

      const response =
        await axios.get(
          "http://localhost:5000/api/vendors"
        );

      console.log(
        "APPROVED VENDORS:"
      );

      console.log(response.data);

      setVendors(response.data);

    } catch (error) {

      console.log(
        "FETCH ERROR:"
      );

      console.log(error);

    }

  };

  // =========================
  // FILTER LOGIC
  // =========================

  const filteredVendors =
    vendors.filter((vendor) => {

      const matchesSearch =

        vendor.name
          ?.toLowerCase()
          .includes(
            search.toLowerCase()
          ) ||

        vendor.category
          ?.toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const matchesCity =

        selectedCity === "All" ||

        vendor.city === selectedCity;

      const matchesCategory =

        selectedCategory === "All" ||

        vendor.category ===
          selectedCategory;

      return (

        matchesSearch &&
        matchesCity &&
        matchesCategory

      );

    });

  return (

    <div className="min-h-screen bg-[#FBF6EE] text-[#2C1A10] px-6 lg:px-16 py-20">

      {/* ========================= */}
      {/* HEADER */}
      {/* ========================= */}

      <div className="text-center max-w-4xl mx-auto">

        <p className="uppercase tracking-[3px] text-xs text-[#C9922A] mb-5">

          ✦ Premium Event Services

        </p>

        <h1 className="font-serif text-6xl lg:text-7xl font-semibold leading-tight">

          Explore
          <span className="italic text-[#8B1A2E]">

            {" "}Luxury Vendors

          </span>

        </h1>

        <p className="mt-8 text-[#7A5C48] text-lg leading-8">

          Discover trusted vendors across India
          for weddings, birthdays, farewell parties,
          homecomings and luxury celebrations.

        </p>

      </div>

      {/* ========================= */}
      {/* FILTER SECTION */}
      {/* ========================= */}

      <div className="max-w-6xl mx-auto mt-16 bg-white rounded-[32px] shadow-xl p-8 border border-[#E8D9BD]">

        <div className="grid md:grid-cols-4 gap-5">

          {/* SEARCH */}

          <input
            type="text"
            placeholder="Search vendors..."
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
            className="border border-[#D9C6A5] px-5 py-4 rounded-2xl outline-none"
          />

          {/* CITY */}

          <select
            value={selectedCity}
            onChange={(e) =>
              setSelectedCity(
                e.target.value
              )
            }
            className="border border-[#D9C6A5] px-5 py-4 rounded-2xl outline-none"
          >

            <option>
              All
            </option>

            <option>
              Mumbai
            </option>

            <option>
              Pune
            </option>

            <option>
              Delhi
            </option>

            <option>
              Jaipur
            </option>

            <option>
              Bangalore
            </option>

          </select>

          {/* CATEGORY */}

          <select
            value={selectedCategory}
            onChange={(e) =>
              setSelectedCategory(
                e.target.value
              )
            }
            className="border border-[#D9C6A5] px-5 py-4 rounded-2xl outline-none"
          >

            <option>
              All
            </option>

            <option>
              Venue
            </option>

            <option>
              Catering
            </option>

            <option>
              Photography
            </option>

            <option>
              Decoration
            </option>

            <option>
              Entertainment
            </option>

          </select>

          {/* TOTAL */}

          <div className="bg-[#8B1A2E] text-white rounded-2xl flex items-center justify-center text-lg font-semibold">

            {filteredVendors.length} Vendors

          </div>

        </div>

      </div>

      {/* ========================= */}
      {/* VENDOR GRID */}
      {/* ========================= */}

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">

        {filteredVendors.length > 0 ? (

          filteredVendors.map((vendor) => (

            <div
              key={vendor._id}
              className="bg-white rounded-[32px] overflow-hidden shadow-xl border border-[#E8D9BD] hover:-translate-y-2 transition duration-300"
            >

              {/* IMAGE */}

              <img
                src={
                  vendor.image ||

                  "https://images.unsplash.com/photo-1519167758481-83f550bb49b3"
                }
                alt={vendor.name}
                className="h-72 w-full object-cover"
              />

              {/* CONTENT */}

              <div className="p-7">

                {/* TOP */}

                <div className="flex justify-between items-center">

                  <h2 className="text-3xl font-serif font-semibold">

                    {vendor.name}

                  </h2>

                  <span className="bg-[#8B1A2E] text-white px-4 py-2 rounded-full text-sm">

                    ⭐ {vendor.rating || 4.5}

                  </span>

                </div>

                {/* CATEGORY */}

                <p className="mt-4 text-[#7A5C48] text-lg">

                  {vendor.category}
                  {" • "}
                  {vendor.city}

                </p>

                {/* DESCRIPTION */}

                <p className="mt-5 text-[#555] leading-7">

                  {vendor.description}

                </p>

                {/* FOOTER */}

                <div className="mt-8 flex justify-between items-center">

                  <div>

                    <p className="text-sm text-[#7A5C48]">

                      Starting From

                    </p>

                    <h3 className="text-3xl font-semibold text-[#8B1A2E]">

                      ₹{vendor.price}

                    </h3>

                  </div>

                  <button className="bg-[#8B1A2E] hover:bg-[#C4374F] transition text-white px-6 py-3 rounded-2xl">

                    Book Now

                  </button>

                </div>

              </div>

            </div>

          ))

        ) : (

          <div className="col-span-3 bg-white rounded-[32px] shadow-xl p-16 text-center">

            <h2 className="text-4xl font-serif font-semibold">

              No Vendors Found

            </h2>

            <p className="mt-5 text-[#7A5C48]">

              Try changing filters or approve vendors from admin panel.

            </p>

          </div>

        )}

      </div>

    </div>

  );

};

export default ServicesPage;