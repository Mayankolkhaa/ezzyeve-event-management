import React, { useState } from "react";
import axios from "axios";

const VendorRegisterPage = () => {

  const [vendorData, setVendorData] =
    useState({

      name: "",
      category: "",
      city: "",
      price: "",
      image: "",
      description: "",

    });

  // HANDLE INPUT

  const handleChange = (e) => {

    setVendorData({
      ...vendorData,
      [e.target.name]: e.target.value,
    });

  };

  // SUBMIT FORM

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response =
        await axios.post(

          "http://localhost:5000/api/vendors",

          {
            ...vendorData,
            price: Number(
              vendorData.price
            ),
          }

        );

      console.log(
        "VENDOR REGISTERED:"
      );

      console.log(response.data);

      alert(
        "Vendor Registered Successfully 🎉"
      );

      // RESET FORM

      setVendorData({

        name: "",
        category: "",
        city: "",
        price: "",
        image: "",
        description: "",

      });

    } catch (error) {

      console.log(error);

      alert(
        "Vendor Registration Failed"
      );

    }

  };

  return (

    <div className="min-h-screen bg-[#FBF6EE] px-6 py-20">

      {/* CONTAINER */}

      <div className="max-w-3xl mx-auto bg-white p-10 rounded-[40px] shadow-2xl border border-[#E8D9BD]">

        {/* HEADER */}

        <div className="text-center">

          <p className="uppercase tracking-[3px] text-xs text-[#C9922A] mb-5">
            ✦ EzzyEve Vendor Partner
          </p>

          <h1 className="text-5xl font-serif text-[#8B1A2E] font-semibold">

            Become A Vendor

          </h1>

          <p className="text-[#7A5C48] mt-5 text-lg leading-8">

            Join EzzyEve and grow your event business
            across India with premium customers and
            luxury events.

          </p>

        </div>

        {/* FORM */}

        <form
          onSubmit={handleSubmit}
          className="mt-12 space-y-6"
        >

          {/* BUSINESS NAME */}

          <div>

            <label className="block mb-2 font-medium text-[#2C1A10]">
              Business Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Enter Business Name"
              value={vendorData.name}
              onChange={handleChange}
              className="w-full border border-[#D9C6A5] p-4 rounded-2xl outline-none focus:border-[#8B1A2E]"
              required
            />

          </div>

          {/* CATEGORY */}

          <div>

            <label className="block mb-2 font-medium text-[#2C1A10]">
              Vendor Category
            </label>

            <select
              name="category"
              value={vendorData.category}
              onChange={handleChange}
              className="w-full border border-[#D9C6A5] p-4 rounded-2xl outline-none focus:border-[#8B1A2E]"
              required
            >

              <option value="">
                Select Category
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

          </div>

          {/* CITY */}

          <div>

            <label className="block mb-2 font-medium text-[#2C1A10]">
              Service City
            </label>

            <select
              name="city"
              value={vendorData.city}
              onChange={handleChange}
              className="w-full border border-[#D9C6A5] p-4 rounded-2xl outline-none focus:border-[#8B1A2E]"
              required
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
                Delhi
              </option>

              <option>
                Jaipur
              </option>

              <option>
                Bangalore
              </option>

            </select>

          </div>

          {/* PRICE */}

          <div>

            <label className="block mb-2 font-medium text-[#2C1A10]">
              Starting Price
            </label>

            <input
              type="number"
              name="price"
              placeholder="Enter Starting Price"
              value={vendorData.price}
              onChange={handleChange}
              className="w-full border border-[#D9C6A5] p-4 rounded-2xl outline-none focus:border-[#8B1A2E]"
              required
            />

          </div>

          {/* IMAGE */}

          <div>

            <label className="block mb-2 font-medium text-[#2C1A10]">
              Business Image URL
            </label>

            <input
              type="text"
              name="image"
              placeholder="Paste Image URL"
              value={vendorData.image}
              onChange={handleChange}
              className="w-full border border-[#D9C6A5] p-4 rounded-2xl outline-none focus:border-[#8B1A2E]"
            />

          </div>

          {/* DESCRIPTION */}

          <div>

            <label className="block mb-2 font-medium text-[#2C1A10]">
              Business Description
            </label>

            <textarea
              name="description"
              placeholder="Describe your services..."
              value={vendorData.description}
              onChange={handleChange}
              rows="5"
              className="w-full border border-[#D9C6A5] p-4 rounded-2xl outline-none focus:border-[#8B1A2E]"
            ></textarea>

          </div>

          {/* BUTTON */}

          <button
            type="submit"
            className="w-full bg-[#8B1A2E] hover:bg-[#C4374F] transition text-white py-4 rounded-2xl text-lg font-semibold shadow-lg"
          >

            Register Vendor

          </button>

        </form>

      </div>

    </div>

  );

};

export default VendorRegisterPage;