import React, {
  useEffect,
  useState,
} from "react";

import axios from "axios";

import {
  useNavigate,
} from "react-router-dom";

const AdminDashboard = () => {

  // NAVIGATE

  const navigate =
    useNavigate();

  // STATE

  const [vendors, setVendors] =
    useState([]);

  // CHECK ADMIN LOGIN

  useEffect(() => {

    const isAdmin =
      localStorage.getItem(
        "adminAuth"
      );

    if (!isAdmin) {

      navigate(
        "/admin-login"
      );

    }

  }, []);

  // FETCH VENDORS

  useEffect(() => {

    fetchVendors();

  }, []);

  const fetchVendors = async () => {

    try {

      const response =
        await axios.get(
          "http://localhost:5000/api/vendors/all"
        );

      setVendors(response.data);

    } catch (error) {

      console.log(error);

    }

  };

  // APPROVE VENDOR

  const approveVendor = async (id) => {

    try {

      await axios.put(
        `http://localhost:5000/api/vendors/${id}/approve`
      );

      alert(
        "Vendor Approved 🎉"
      );

      fetchVendors();

    } catch (error) {

      console.log(error);

    }

  };

  // LOGOUT

  const handleLogout = () => {

    localStorage.removeItem(
      "adminAuth"
    );

    navigate(
      "/admin-login"
    );

  };

  return (

    <div className="min-h-screen bg-[#FBF6EE] px-6 lg:px-16 py-20">

      {/* HEADER */}

      <div className="flex flex-col lg:flex-row justify-between items-center gap-6">

        <div>

          <p className="uppercase tracking-[3px] text-xs text-[#C9922A] mb-5">

            ✦ EzzyEve Admin Panel

          </p>

          <h1 className="font-serif text-6xl text-[#8B1A2E] font-semibold">

            Admin Dashboard

          </h1>

        </div>

        {/* LOGOUT BUTTON */}

        <button
          onClick={handleLogout}
          className="bg-[#8B1A2E] hover:bg-[#C4374F] transition text-white px-6 py-3 rounded-2xl"
        >

          Logout

        </button>

      </div>

      {/* TABLE */}

      <div className="max-w-7xl mx-auto mt-16 bg-white rounded-[32px] shadow-xl overflow-hidden">

        <table className="w-full">

          <thead className="bg-[#8B1A2E] text-white">

            <tr>

              <th className="p-5 text-left">
                Vendor
              </th>

              <th className="p-5 text-left">
                Category
              </th>

              <th className="p-5 text-left">
                City
              </th>

              <th className="p-5 text-left">
                Price
              </th>

              <th className="p-5 text-left">
                Status
              </th>

              <th className="p-5 text-left">
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            {vendors.map((vendor) => (

              <tr
                key={vendor._id}
                className="border-b"
              >

                {/* VENDOR */}

                <td className="p-5">

                  <div className="flex items-center gap-4">

                    <img
                      src={
                        vendor.image ||
                        "https://images.unsplash.com/photo-1519167758481-83f550bb49b3"
                      }
                      alt={vendor.name}
                      className="w-16 h-16 rounded-2xl object-cover"
                    />

                    <div>

                      <h3 className="font-semibold">

                        {vendor.name}

                      </h3>

                      <p className="text-sm text-[#777]">

                        {vendor.description}

                      </p>

                    </div>

                  </div>

                </td>

                {/* CATEGORY */}

                <td className="p-5">

                  {vendor.category}

                </td>

                {/* CITY */}

                <td className="p-5">

                  {vendor.city}

                </td>

                {/* PRICE */}

                <td className="p-5">

                  ₹{vendor.price}

                </td>

                {/* STATUS */}

                <td className="p-5">

                  <span
                    className={`px-4 py-2 rounded-full text-sm ${
                      vendor.status ===
                      "Approved"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >

                    {vendor.status}

                  </span>

                </td>

                {/* ACTION */}

                <td className="p-5">

                  {vendor.status ===
                  "Pending" ? (

                    <button
                      onClick={() =>
                        approveVendor(
                          vendor._id
                        )
                      }
                      className="bg-[#8B1A2E] hover:bg-[#C4374F] transition text-white px-5 py-3 rounded-2xl"
                    >

                      Approve

                    </button>

                  ) : (

                    <span className="text-green-600 font-semibold">

                      Approved

                    </span>

                  )}

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  );

};

export default AdminDashboard;