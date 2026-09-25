import mongoose, { Schema, Document, Model } from "mongoose";

export type CategorySlug = "heritage" | "nature" | "religious" | "adventure";

export interface ICategory extends Document {
  name: string;
  slug: CategorySlug;
  description: string;
  icon: string;
  createdAt: Date;
  updatedAt: Date;
}

const CategorySchema = new Schema<ICategory>(
  {
    name: { type: String, required: true, trim: true },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      enum: ["heritage", "nature", "religious", "adventure"],
      index: true,
    },
    description: { type: String, default: "" },
    icon: { type: String, default: "" }, // emoji or icon name
  },
  { timestamps: true }
);

const Category: Model<ICategory> =
  mongoose.models.Category ??
  mongoose.model<ICategory>("Category", CategorySchema);

export default Category;
