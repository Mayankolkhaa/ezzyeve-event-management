import React, { useState } from "react";
import axios from "axios";

const BookingPage = () => {
    const [formData, setFormData] = useState({
  eventType: "",
  city: "",
  budget: "",
  guests: "",
  services: [],
});

    // SAVE BOOKING

const saveBooking = async () => {

  try {

    const response =
      await axios.post(

        "http://localhost:5000/api/bookings",

        {
          eventType:
            formData.eventType,

          city:
            formData.city,

          budget:
            formData.budget,

          guests:
            formData.guests,

          services:
            formData.services,
        }

      );

    console.log(
      "BOOKING SAVED:",
      response.data
    );

    alert(
      "Booking Confirmed Successfully 🎉"
    );

  } catch (error) {

    console.log(error);

    alert(
      "Booking Failed"
    );

  }

};

  // VENDORS DATABASE

  const vendorsData = [

    {
      id: 1,
      name: "Royal Feast Catering",
      city: "Jaipur",
      service: "Catering",
      price: 250000,
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1555244162-803834f70033",
    },

    {
      id: 2,
      name: "Dream Frame Photography",
      city: "Mumbai",
      service: "Photography",
      price: 180000,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc",
    },

    {
      id: 3,
      name: "Elite Wedding Decor",
      city: "Delhi",
      service: "Decoration",
      price: 320000,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1519167758481-83f550bb49b3",
    },

    {
      id: 4,
      name: "Luxury Palace Venue",
      city: "Jaipur",
      service: "Venue",
      price: 500000,
      rating: 5.0,
      image:
        "https://images.unsplash.com/photo-1519167758481-83f550bb49b3",
    },

    {
      id: 5,
      name: "Bollywood Entertainment",
      city: "Mumbai",
      service: "Entertainment",
      price: 150000,
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1505236858219-8359eb29e329",
    },

    {
      id: 6,
      name: "Royal Bridal Studio",
      city: "Delhi",
      service: "Bridal Wear",
      price: 120000,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    },

    {
      id: 7,
      name: "Pune Premium Catering",
      city: "Pune",
      service: "Catering",
      price: 140000,
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
    },

    {
      id: 8,
      name: "Elegant Decor Studio",
      city: "Pune",
      service: "Decoration",
      price: 210000,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1469371670807-013ccf25f16a",
    },

  ];

  // HANDLE INPUT

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  // TOGGLE SERVICES

  const toggleService = (service) => {

    if (
      formData.services.includes(service)
    ) {

      setFormData({
        ...formData,
        services:
          formData.services.filter(
            (item) => item !== service
          ),
      });

    } else {

      setFormData({
        ...formData,
        services: [
          ...formData.services,
          service,
        ],
      });

    }

  };

  // RECOMMENDED VENDORS

  const recommendedVendors =
    vendorsData.filter((vendor) => {

      return (

        vendor.city === formData.city &&

        formData.services.includes(
          vendor.service
        ) &&

        vendor.price <= Number(
          formData.budget
        )

      );

    });

  return (

    <div className="min-h-screen bg-[#FBF6EE] text-[#2C1A10] px-6 lg:px-16 py-20">

      {/* HEADER */}

      <div className="max-w-5xl mx-auto text-center">

        <p className="uppercase tracking-[3px] text-xs text-[#C9922A] mb-5">
          ✦ EzzyEve Planning System
        </p>

        <h1 className="font-serif text-6xl lg:text-7xl font-semibold leading-tight">
          Plan Your
          <span className="italic text-[#8B1A2E]">
            {" "}Dream Event
          </span>
        </h1>

      </div>

      {/* PROGRESS BAR */}

      <div className="max-w-4xl mx-auto mt-14">

        <div className="w-full h-3 bg-[#E8D9BD] rounded-full overflow-hidden">

          <div
            className="h-full bg-[#8B1A2E] transition-all duration-500"
            style={{
              width: `${(step / 4) * 100}%`,
            }}
          ></div>

        </div>

      </div>

      {/* FORM CONTAINER */}

      <div className="max-w-4xl mx-auto mt-16 bg-white rounded-[40px] shadow-2xl p-10 border border-[#C9922A]/10">

        {/* STEP 1 */}

        {step === 1 && (

          <div>

            <h2 className="font-serif text-4xl font-semibold">
              Event Details
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mt-10">

              <div>

                <label className="block mb-3 font-medium">
                  Event Type
                </label>

                <select
                  name="eventType"
                  onChange={handleChange}
                  className="w-full border border-[#D9C6A5] rounded-2xl px-5 py-4 outline-none"
                >

                  <option value="">
                    Select Event
                  </option>

                  <option>
                    Wedding
                  </option>

                  <option>
                    Farewell
                  </option>

                  <option>
                    Birthday
                  </option>

                  <option>
                    Homecoming
                  </option>

                </select>

              </div>

              <div>

                <label className="block mb-3 font-medium">
                  City
                </label>

                <select
                  name="city"
                  onChange={handleChange}
                  className="w-full border border-[#D9C6A5] rounded-2xl px-5 py-4 outline-none"
                >

                  <option value="">
                    Select City
                  </option>

                  <option>
                    Mumbai
                  </option>

                  <option>
                    Pune
                  </option>

                  <option>
                    Jaipur
                  </option>

                  <option>
                    Delhi
                  </option>

                </select>

              </div>

            </div>

            <button
              onClick={() => setStep(2)}
              className="mt-12 bg-[#8B1A2E] hover:bg-[#C4374F] transition text-white px-10 py-4 rounded-2xl"
            >
              Continue
            </button>

          </div>

        )}

        {/* STEP 2 */}

        {step === 2 && (

          <div>

            <h2 className="font-serif text-4xl font-semibold">
              Budget & Guests
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mt-10">

              <div>

                <label className="block mb-3 font-medium">
                  Budget
                </label>

                <input
                  type="number"
                  name="budget"
                  placeholder="Enter Budget"
                  onChange={handleChange}
                  className="w-full border border-[#D9C6A5] rounded-2xl px-5 py-4 outline-none"
                />

              </div>

              <div>

                <label className="block mb-3 font-medium">
                  Guest Count
                </label>

                <input
                  type="number"
                  name="guests"
                  placeholder="Number of Guests"
                  onChange={handleChange}
                  className="w-full border border-[#D9C6A5] rounded-2xl px-5 py-4 outline-none"
                />

              </div>

            </div>

            <div className="flex gap-5 mt-12">

              <button
                onClick={() => setStep(1)}
                className="border border-[#8B1A2E] text-[#8B1A2E] px-10 py-4 rounded-2xl"
              >
                Back
              </button>

              <button
                onClick={() => setStep(3)}
                className="bg-[#8B1A2E] hover:bg-[#C4374F] transition text-white px-10 py-4 rounded-2xl"
              >
                Continue
              </button>

            </div>

          </div>

        )}

        {/* STEP 3 */}

        {step === 3 && (

          <div>

            <h2 className="font-serif text-4xl font-semibold">
              Select Services
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mt-10">

              {[
                "Catering",
                "Photography",
                "Decoration",
                "Venue",
                "Bridal Wear",
                "Entertainment",
              ].map((service) => (

                <div
                  key={service}
                  onClick={() =>
                    toggleService(service)
                  }
                  className={`cursor-pointer border rounded-3xl p-8 transition ${
                    formData.services.includes(
                      service
                    )
                      ? "bg-[#8B1A2E] text-white border-[#8B1A2E]"
                      : "border-[#D9C6A5]"
                  }`}
                >

                  <h3 className="text-2xl font-semibold">
                    {service}
                  </h3>

                </div>

              ))}

            </div>

            <div className="flex gap-5 mt-12">

              <button
                onClick={() => setStep(2)}
                className="border border-[#8B1A2E] text-[#8B1A2E] px-10 py-4 rounded-2xl"
              >
                Back
              </button>

              <button
                onClick={() => setStep(4)}
                className="bg-[#8B1A2E] hover:bg-[#C4374F] transition text-white px-10 py-4 rounded-2xl"
              >
                Continue
              </button>

            </div>

          </div>

        )}

        {/* STEP 4 */}

        {step === 4 && (

          <div>

            <h2 className="font-serif text-5xl font-semibold text-center">
              Event Summary
            </h2>

            <div className="mt-12 bg-[#FBF6EE] rounded-3xl p-10 space-y-6">

              <p>
                <strong>Event:</strong>{" "}
                {formData.eventType}
              </p>

              <p>
                <strong>City:</strong>{" "}
                {formData.city}
              </p>

              <p>
                <strong>Budget:</strong>{" "}
                ₹{formData.budget}
              </p>

              <p>
                <strong>Guests:</strong>{" "}
                {formData.guests}
              </p>

              <p>
                <strong>Services:</strong>{" "}
                {formData.services.join(", ")}
              </p>

            </div>

            {/* AI RECOMMENDATION */}

            <div className="mt-10 bg-[#8B1A2E] text-white rounded-3xl p-8">

              <h3 className="font-serif text-3xl font-semibold">
                Ezzy AI Recommendation
              </h3>

              <p className="mt-5 text-white/80 leading-8">

                Based on your selected city,
                services and budget, EzzyEve
                has selected the best vendor
                packages suitable for your event.

              </p>

            </div>

            {/* RECOMMENDED VENDORS */}

            <div className="mt-14">

              <h3 className="font-serif text-4xl font-semibold text-center">
                Recommended Vendor Packages
              </h3>

              <div className="grid md:grid-cols-2 gap-8 mt-10">

                {recommendedVendors.length > 0 ? (

                  recommendedVendors.map((vendor) => (

                    <div
                      key={vendor.id}
                      className="bg-white rounded-[32px] overflow-hidden shadow-xl border border-[#E8D9BD]"
                    >

                      <img
                        src={vendor.image}
                        alt={vendor.name}
                        className="h-64 w-full object-cover"
                      />

                      <div className="p-8">

                        <div className="flex justify-between items-center">

                          <h4 className="text-3xl font-serif font-semibold">
                            {vendor.name}
                          </h4>

                          <span className="bg-[#8B1A2E] text-white px-4 py-2 rounded-full text-sm">
                            ⭐ {vendor.rating}
                          </span>

                        </div>

                        <p className="mt-4 text-[#7A5C48]">
                          {vendor.service} • {vendor.city}
                        </p>

                        <div className="mt-6 flex justify-between items-center">

                          <p className="text-2xl font-semibold text-[#8B1A2E]">
                            ₹{vendor.price}
                          </p>

                          <button className="bg-[#8B1A2E] hover:bg-[#C4374F] transition text-white px-6 py-3 rounded-2xl">
                            Book Now
                          </button>

                        </div>

                      </div>

                    </div>

                  ))

                ) : (

                  <div className="col-span-2 text-center bg-[#FBF6EE] rounded-3xl p-10">

                    <h4 className="text-3xl font-serif font-semibold">
                      No Perfect Match Found
                    </h4>

                    <p className="mt-4 text-[#7A5C48]">
                      Try increasing budget or selecting more services.
                    </p>

                  </div>

                )}

              </div>

            </div>

            <div className="flex gap-5 mt-12 justify-center">

              <button
                onClick={() => setStep(3)}
                className="border border-[#8B1A2E] text-[#8B1A2E] px-10 py-4 rounded-2xl"
              >
                Back
              </button>

              {/*<button
                className="bg-[#8B1A2E] hover:bg-[#C4374F] transition text-white px-10 py-4 rounded-2xl"
              >
                Confirm Booking
              </button>*/}

              <button
  onClick={saveBooking}
  className="bg-[#8B1A2E] hover:bg-[#C4374F] transition text-white px-10 py-4 rounded-2xl"
>

  Confirm Booking

</button>

            </div>

          </div>

        )}

      </div>

    </div>

  );

};

export default BookingPage;