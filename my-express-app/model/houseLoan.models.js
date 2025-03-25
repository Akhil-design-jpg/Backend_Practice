import mongoose from "mongoose";

const houseLoanSchema = new mongoose.Schema(
  {
    LoanPassed: {
      type: Boolean,
      required: true,
    },

    Interest: {
      type: String,
      required: true,
    },

    Time: {
      type: String,
      required: true,
    },


  },
  {
    timestamps: true,
  }
);

const HouseLoan = mongoose.model("HouseLoan", houseLoanSchema)
export default HouseLoan