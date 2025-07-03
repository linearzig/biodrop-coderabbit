import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
      enum: {
        values: ["free", "premium", "admin"],
        message: "{VALUE} is not a supported data source",
      },
      default: "free",
    },
    stripeCustomerId: {
      type: String,
      trim: true,
    },
    premiumTrialStartDate: {
      type: Date,
    },
    name: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
    },
    emailVerified: {
      type: Date,
      trim: true,
    },
    image: {
      type: String,
      trim: true,
    },
    // Enhanced user permissions for premium features
    isAdmin: {
      type: Boolean,
      default: false,
    },
    permissions: {
      type: [String],
      default: ["read"],
    },
    role: {
      type: String,
      default: "user",
    },
  },
  { timestamps: true },
);

module.exports = mongoose.models.User || mongoose.model("User", UserSchema);
