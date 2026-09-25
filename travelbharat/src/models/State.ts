import mongoose, { Schema, Document, Model } from "mongoose";

export type Region =
  | "North"
  | "South"
  | "East"
  | "West"
  | "Central"
  | "Northeast";

export interface IState extends Document {
  name: string;
  slug: string;
  region: Region;
  capital: string;
  description: string;
  coverImage: string;
  isUnionTerritory: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const StateSchema = new Schema<IState>(
  {
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true, trim: true, index: true },
    region: {
      type: String,
      required: true,
      enum: ["North", "South", "East", "West", "Central", "Northeast"],
    },
    capital: { type: String, required: true },
    description: { type: String, required: true },
    coverImage: { type: String, required: true },
    isUnionTerritory: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const State: Model<IState> =
  mongoose.models.State ?? mongoose.model<IState>("State", StateSchema);

export default State;
