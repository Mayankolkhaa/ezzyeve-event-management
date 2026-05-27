import express from "express";
import Booking from "../models/Booking.js";

const router = express.Router();

/* CREATE BOOKING */

router.post("/", async (req, res) => {

  try {

    console.log(
      "BOOKING REQUEST RECEIVED"
    );

    console.log(req.body);

    const booking =
      new Booking(req.body);

    const savedBooking =
      await booking.save();

    console.log(
      "BOOKING SAVED SUCCESSFULLY"
    );

    console.log(savedBooking);

    res.status(201).json({
      success: true,
      booking: savedBooking,
    });

  } catch (error) {

    console.log(
      "BOOKING SAVE ERROR:"
    );

    console.log(error);

    res.status(500).json({
      success: false,
      message:
        "Booking save failed",
    });

  }

});

/* GET BOOKINGS */

router.get("/", async (req, res) => {

  try {

    const bookings =
      await Booking.find();

    res.json(bookings);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message:
        "Failed to fetch bookings",
    });

  }

});

/* GET ALL BOOKINGS */

router.get("/", async (req, res) => {

  try {

    const bookings =
      await Booking.find();

    res.json(bookings);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message:
        "Failed to fetch bookings",
    });

  }

});

router.put("/:id", async (req, res) => {

  try {

    const updatedBooking =
      await Booking.findByIdAndUpdate(

        req.params.id,

        {
          status: req.body.status,
        },

        {
          new: true,
        }

      );

    res.json(updatedBooking);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

});


export default router;