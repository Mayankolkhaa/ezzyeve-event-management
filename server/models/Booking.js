import mongoose from "mongoose";

const bookingSchema =
  new mongoose.Schema({

    eventType: {
      type: String,
      required: true,
    },

    city: {
      type: String,
      required: true,
    },

    budget: {
      type: Number,
      required: true,
    },

    guests: {
      type: Number,
      required: true,
    },

    services: [
      {
        type: String,
      },
    ],

    status: {
      type: String,
      default: "Pending",
    },

  },

  {
    timestamps: true,
  }

);

const Booking =
  mongoose.model(
    "Booking",
    bookingSchema
  );
  
export default Booking;