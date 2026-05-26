import express from "express";

import Vendor from "../models/Vendor.js";

const router = express.Router();


// ======================================
// GET APPROVED VENDORS
// ======================================

router.get("/", async (req, res) => {

  try {

    const vendors =
      await Vendor.find({
        status: "Approved",
      });

    console.log(
      "APPROVED VENDORS:"
    );

    console.log(vendors);

    res.json(vendors);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message:
        "Failed to fetch vendors",
    });

  }

});


// ======================================
// GET ALL VENDORS (ADMIN)
// ======================================

router.get("/all", async (req, res) => {

  try {

    const vendors =
      await Vendor.find();

    res.json(vendors);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message:
        "Failed to fetch all vendors",
    });

  }

});


// ======================================
// CREATE VENDOR
// ======================================

router.post("/", async (req, res) => {

  try {

    const vendor =
      new Vendor({

        ...req.body,

        status: "Pending",

      });

    const savedVendor =
      await vendor.save();

    console.log(
      "NEW VENDOR SAVED:"
    );

    console.log(savedVendor);

    res.status(201).json(
      savedVendor
    );

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message:
        "Vendor creation failed",
    });

  }

});


// ======================================
// APPROVE VENDOR
// ======================================

router.put(
  "/:id/approve",

  async (req, res) => {

    try {

      const vendor =
        await Vendor.findById(
          req.params.id
        );

      if (!vendor) {

        return res.status(404).json({
          message:
            "Vendor not found",
        });

      }

      vendor.status =
        "Approved";

      await vendor.save();

      console.log(
        "VENDOR APPROVED:"
      );

      console.log(vendor);

      res.json({
        message:
          "Vendor Approved Successfully",
      });

    } catch (error) {

      console.log(error);

      res.status(500).json({
        message:
          "Approval failed",
      });

    }

  }

);

export default router;