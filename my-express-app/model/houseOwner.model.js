import mongoose from "mongoose";

const houseSchema = new mongoose.Schema(
  {
    HouseId: {
      type: String,
      required: true,
    },

    OwnerShip: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    Pricing: {
      type: String,
      required: true,
    },

    Documents: {
      type: Boolean,
      default: false,
      required: true,
    },
    HouseLoanPaid:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "HouseLoan"
    }
  },
  {
    timestamps: true,
  },
   
);

const House = mongoose.model("House", houseSchema);
export default House;
