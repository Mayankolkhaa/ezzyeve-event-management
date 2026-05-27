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

  // STATES

  const [vendors, setVendors] =
    useState([]);

  const [bookings, setBookings] =
    useState([]);

  // =========================
  // UPDATE BOOKING STATUS
  // =========================

  const updateStatus = async (
    id,
    status
  ) => {

    try {

      await axios.put(
        `http://localhost:5000/api/bookings/${id}`,
        { status }
      );

      alert(
        `Booking ${status}`
      );

      fetchBookings();

    } catch (error) {

      console.log(error);

    }

  };

  // =========================
  // CHECK ADMIN LOGIN
  // =========================

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

  // =========================
  // FETCH DATA
  // =========================

  useEffect(() => {

    fetchVendors();

    fetchBookings();

  }, []);

  // =========================
  // FETCH VENDORS
  // =========================

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

  // =========================
  // FETCH BOOKINGS
  // =========================

  const fetchBookings = async () => {

    try {

      const response =
        await axios.get(
          "http://localhost:5000/api/bookings"
        );

      setBookings(response.data);

    } catch (error) {

      console.log(error);

    }

  };

  // =========================
  // APPROVE VENDOR
  // =========================

  const approveVendor = async (
    id
  ) => {

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

  // =========================
  // LOGOUT
  // =========================

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

        {/* LOGOUT */}

        <button
          onClick={handleLogout}
          className="bg-[#8B1A2E] hover:bg-[#C4374F] transition text-white px-6 py-3 rounded-2xl"
        >

          Logout

        </button>

      </div>

      {/* ====================== */}
      {/* VENDOR MANAGEMENT */}
      {/* ====================== */}

      <div className="mt-16">

        <div className="mb-8">

          <p className="uppercase tracking-[3px] text-xs text-[#C9922A] mb-4">

            ✦ Vendor Management

          </p>

          <h2 className="font-serif text-5xl text-[#8B1A2E] font-semibold">

            Registered Vendors

          </h2>

        </div>

        <div className="bg-white rounded-[32px] shadow-xl overflow-hidden">

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

                  <td className="p-5">
                    {vendor.category}
                  </td>

                  <td className="p-5">
                    {vendor.city}
                  </td>

                  <td className="p-5">
                    ₹{vendor.price}
                  </td>

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

      {/* ====================== */}
      {/* BOOKINGS SECTION */}
      {/* ====================== */}

      <div className="mt-20">

        <div className="mb-8">

          <p className="uppercase tracking-[3px] text-xs text-[#C9922A] mb-4">

            ✦ Event Bookings

          </p>

          <h2 className="font-serif text-5xl text-[#8B1A2E] font-semibold">

            Registered Bookings

          </h2>

        </div>

        <div className="bg-white rounded-[32px] shadow-xl overflow-hidden overflow-x-auto">

          <table className="w-full">

            <thead className="bg-[#8B1A2E] text-white">

              <tr>

                <th className="p-5 text-left">
                  Customer
                </th>

                <th className="p-5 text-left">
                  Event
                </th>

                <th className="p-5 text-left">
                  City
                </th>

                <th className="p-5 text-left">
                  Guests
                </th>

                <th className="p-5 text-left">
                  Budget
                </th>

                <th className="p-5 text-left">
                  Date
                </th>

                <th className="p-5 text-left">
                  Status
                </th>

                <th className="p-5 text-left">
                  Actions
                </th>

              </tr>

            </thead>

            <tbody>

              {bookings.map((booking) => (

                <tr
                  key={booking._id}
                  className="border-b"
                >

                  {/* CUSTOMER */}

                  <td className="p-5">

                    <div>

                      <h3 className="font-semibold text-lg">

                        {booking.fullName}

                      </h3>

                      <p className="text-sm text-gray-500">

                        {booking.email}

                      </p>

                      <p className="text-sm text-gray-500">

                        {booking.phone}

                      </p>

                    </div>

                  </td>

                  {/* EVENT */}

                  <td className="p-5">

                    {booking.eventType}

                  </td>

                  {/* CITY */}

                  <td className="p-5">

                    {booking.city}

                  </td>

                  {/* GUESTS */}

                  <td className="p-5">

                    {booking.guests}

                  </td>

                  {/* BUDGET */}

                  <td className="p-5 text-[#8B1A2E] font-semibold">

                    ₹{booking.budget}

                  </td>

                  {/* DATE */}

                  <td className="p-5">

                    {booking.eventDate}

                  </td>

                  {/* STATUS */}

                  <td className="p-5">

                    <span
                      className={`px-4 py-2 rounded-full text-sm font-semibold ${
                        booking.status ===
                        "accepted"
                          ? "bg-green-100 text-green-700"

                          : booking.status ===
                            "declined"
                          ? "bg-red-100 text-red-700"

                          : booking.status ===
                            "change_requested"
                          ? "bg-blue-100 text-blue-700"

                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >

                      {booking.status}

                    </span>

                  </td>

                  {/* ACTIONS */}

                  <td className="p-5">

                    <div className="flex flex-wrap gap-2">

                      <button
                        onClick={() =>
                          updateStatus(
                            booking._id,
                            "accepted"
                          )
                        }
                        className="bg-green-500 hover:bg-green-600 transition text-white px-4 py-2 rounded-xl"
                      >

                        Accept

                      </button>

                      <button
                        onClick={() =>
                          updateStatus(
                            booking._id,
                            "declined"
                          )
                        }
                        className="bg-red-500 hover:bg-red-600 transition text-white px-4 py-2 rounded-xl"
                      >

                        Decline

                      </button>

                      <button
                        onClick={() =>
                          updateStatus(
                            booking._id,
                            "change_requested"
                          )
                        }
                        className="bg-blue-500 hover:bg-blue-600 transition text-white px-4 py-2 rounded-xl"
                      >

                        Change Date

                      </button>

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>

  );

};

export default AdminDashboard;