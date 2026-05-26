import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import bookingRoutes from "./routes/bookingRoutes.js";
import vendorRoutes from "./routes/vendorRoutes.js";

import { GoogleGenAI }
from "@google/genai";

dotenv.config();

connectDB();

const app = express();

app.use(cors());

app.use(express.json());

app.use(
  "/api/bookings",
  bookingRoutes
);

app.use(
  "/api/vendors",
  vendorRoutes
);

/* GEMINI */

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

/* CHAT ROUTE */

app.post("/chat", async (req, res) => {

  try {

    const { message } = req.body;

    console.log("USER:", message);

    const response =
      await ai.models.generateContent({

        model: "gemini-2.0-flash-001",

        contents: message,

      });

    console.log(
      "AI:",
      response.text
    );

    res.json({
      reply: response.text,
    });

  } catch (error) {

    console.log("FULL ERROR:");

    console.log(error);

    res.status(500).json({
      error: "Gemini Failed",
    });

  }

});

/* SERVER */

app.listen(5000, () => {

  console.log(
    "Server running on port 5000"
  );

});