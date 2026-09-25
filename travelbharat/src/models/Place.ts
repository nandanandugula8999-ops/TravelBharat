import mongoose, { Schema, Document, Model, Types } from "mongoose";

export interface PlaceImage {
  url: string;
  caption: string;
}

export interface IPlace extends Document {
  name: string;
  slug: string;
  stateId: Types.ObjectId;
  cityId?: Types.ObjectId;
  categoryIds: Types.ObjectId[];
  shortDescription: string;
  description: string;
  historicalSignificance?: string;
  bestTimeToVisit: string;
  entryFee?: string;
  timings?: string;
  mapLink?: string;
  images: PlaceImage[];
  nearbyPlaceIds: Types.ObjectId[];
  isFeatured: boolean;
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const PlaceImageSchema = new Schema<PlaceImage>(
  {
    url: { type: String, required: true },
    caption: { type: String, default: "" },
  },
  { _id: false }
);

const PlaceSchema = new Schema<IPlace>(
  {
    name: { type: String, required: true, trim: true },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    stateId: {
      type: Schema.Types.ObjectId,
      ref: "State",
      required: true,
      index: true,
    },
    cityId: { type: Schema.Types.ObjectId, ref: "City", default: null },
    categoryIds: {
      type: [Schema.Types.ObjectId],
      ref: "Category",
      default: [],
      index: true,
    },
    shortDescription: { type: String, required: true },
    description: { type: String, required: true },
    historicalSignificance: { type: String, default: "" },
    bestTimeToVisit: { type: String, required: true },
    entryFee: { type: String, default: "Free" },
    timings: { type: String, default: "Open all day" },
    mapLink: { type: String, default: "" },
    images: { type: [PlaceImageSchema], default: [] },
    nearbyPlaceIds: { type: [Schema.Types.ObjectId], ref: "Place", default: [] },
    isFeatured: { type: Boolean, default: false },
    isVerified: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// Full-text search index on name, shortDescription, description
PlaceSchema.index({ name: "text", shortDescription: "text", description: "text" });

const Place: Model<IPlace> =
  mongoose.models.Place ?? mongoose.model<IPlace>("Place", PlaceSchema);

export default Place;
