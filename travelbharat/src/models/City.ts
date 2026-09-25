import mongoose, { Schema, Document, Model, Types } from "mongoose";

export interface ICity extends Document {
  name: string;
  slug: string;
  stateId: Types.ObjectId;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

const CitySchema = new Schema<ICity>(
  {
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true, trim: true, index: true },
    stateId: { type: Schema.Types.ObjectId, ref: "State", required: true },
    description: { type: String, default: "" },
  },
  { timestamps: true }
);

const City: Model<ICity> =
  mongoose.models.City ?? mongoose.model<ICity>("City", CitySchema);

export default City;
