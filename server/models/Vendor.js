import mongoose from "mongoose";

const vendorSchema =
  new mongoose.Schema({

    name: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    city: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    rating: {
      type: Number,
      default: 4.5,
    },

    image: {
      type: String,
    },

    description: {
      type: String,
    },

    status: {
  type: String,
  default: "Pending",
},

  },

  {
    timestamps: true,
  }

);

const Vendor =
  mongoose.model(
    "Vendor",
    vendorSchema
  );

export default Vendor;