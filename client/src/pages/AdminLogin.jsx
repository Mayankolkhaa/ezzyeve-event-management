import React, {
  useState,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

const AdminLogin = () => {

  const navigate =
    useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  // LOGIN

  const handleLogin = (e) => {

    e.preventDefault();

    if (

      email ===
        "admin@ezzyeve.com" &&

      password ===
        "admin123"

    ) {

      localStorage.setItem(
        "adminAuth",
        "true"
      );

      alert(
        "Login Successful 🎉"
      );

      navigate("/admin");

    } else {

      alert(
        "Invalid Credentials"
      );

    }

  };

  return (

    <div className="min-h-screen bg-[#FBF6EE] flex items-center justify-center px-6">

      <div className="w-full max-w-md bg-white p-10 rounded-[40px] shadow-2xl border border-[#E8D9BD]">

        {/* HEADER */}

        <div className="text-center">

          <p className="uppercase tracking-[3px] text-xs text-[#C9922A] mb-5">

            ✦ EzzyEve Admin

          </p>

          <h1 className="text-5xl font-serif text-[#8B1A2E] font-semibold">

            Admin Login

          </h1>

          <p className="text-[#7A5C48] mt-5">

            Access vendor approvals and dashboard.

          </p>

        </div>

        {/* FORM */}

        <form
          onSubmit={handleLogin}
          className="mt-10 space-y-6"
        >

          {/* EMAIL */}

          <input
            type="email"
            placeholder="Admin Email"
            value={email}
            onChange={(e) =>
              setEmail(
                e.target.value
              )
            }
            className="w-full border border-[#D9C6A5] p-4 rounded-2xl outline-none"
            required
          />

          {/* PASSWORD */}

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
            className="w-full border border-[#D9C6A5] p-4 rounded-2xl outline-none"
            required
          />

          {/* BUTTON */}

          <button
            type="submit"
            className="w-full bg-[#8B1A2E] hover:bg-[#C4374F] transition text-white py-4 rounded-2xl text-lg font-semibold"
          >

            Login

          </button>

        </form>

      </div>

    </div>

  );

};

export default AdminLogin;