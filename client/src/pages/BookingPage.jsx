import React, { useState } from "react";
import axios from "axios";

const BookingPage = () => {

  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    eventType: "",
    city: "",
    budget: "",
    guests: "",
    services: [],
  });

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
              Number(formData.budget),

            guests:
              Number(formData.guests),

            services:
              formData.services,
          }

        );

      console.log(response.data);

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

  return (

    <div className="min-h-screen bg-[#FBF6EE] px-6 py-16">

      <div className="max-w-4xl mx-auto bg-white p-10 rounded-[32px] shadow-xl">

        <h1 className="text-5xl font-serif text-center mb-10">
          Plan Your Event
        </h1>

        {/* STEP 1 */}

        {step === 1 && (

          <div>

            <div className="grid md:grid-cols-2 gap-6">

              <select
                name="eventType"
                onChange={handleChange}
                className="border p-4 rounded-2xl"
              >

                <option>
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

              </select>

              <select
                name="city"
                onChange={handleChange}
                className="border p-4 rounded-2xl"
              >

                <option>
                  Select City
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

              </select>

            </div>

            <button
              onClick={() => setStep(2)}
              className="mt-10 bg-[#8B1A2E] text-white px-8 py-4 rounded-2xl"
            >

              Continue

            </button>

          </div>

        )}

        {/* STEP 2 */}

        {step === 2 && (

          <div>

            <div className="grid md:grid-cols-2 gap-6">

              <input
                type="number"
                name="budget"
                placeholder="Budget"
                onChange={handleChange}
                className="border p-4 rounded-2xl"
              />

              <input
                type="number"
                name="guests"
                placeholder="Guests"
                onChange={handleChange}
                className="border p-4 rounded-2xl"
              />

            </div>

            <div className="flex gap-4 mt-10">

              <button
                onClick={() => setStep(1)}
                className="border px-8 py-4 rounded-2xl"
              >

                Back

              </button>

              <button
                onClick={() => setStep(3)}
                className="bg-[#8B1A2E] text-white px-8 py-4 rounded-2xl"
              >

                Continue

              </button>

            </div>

          </div>

        )}

        {/* STEP 3 */}

        {step === 3 && (

          <div>

            <div className="grid md:grid-cols-3 gap-6">

              {[
                "Catering",
                "Photography",
                "Decoration",
                "Venue",
                "Entertainment",
              ].map((service) => (

                <div
                  key={service}
                  onClick={() =>
                    toggleService(service)
                  }
                  className={`cursor-pointer border p-6 rounded-3xl text-center ${
                    formData.services.includes(
                      service
                    )
                      ? "bg-[#8B1A2E] text-white"
                      : ""
                  }`}
                >

                  {service}

                </div>

              ))}

            </div>

            <div className="flex gap-4 mt-10">

              <button
                onClick={() => setStep(2)}
                className="border px-8 py-4 rounded-2xl"
              >

                Back

              </button>

              <button
                onClick={() => setStep(4)}
                className="bg-[#8B1A2E] text-white px-8 py-4 rounded-2xl"
              >

                Continue

              </button>

            </div>

          </div>

        )}

        {/* STEP 4 */}

        {step === 4 && (

          <div>

            <div className="space-y-4 text-xl">

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

            <div className="flex gap-4 mt-10">

              <button
                onClick={() => setStep(3)}
                className="border px-8 py-4 rounded-2xl"
              >

                Back

              </button>

              <button
                onClick={saveBooking}
                className="bg-[#8B1A2E] text-white px-8 py-4 rounded-2xl"
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