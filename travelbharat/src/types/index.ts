/**
 * Shared TypeScript interfaces for TravelBharat.
 * These mirror the Mongoose documents but are used in API responses,
 * server components, and client components (after JSON serialisation).
 */

export type Region =
  | "North"
  | "South"
  | "East"
  | "West"
  | "Central"
  | "Northeast";

export type CategorySlug = "heritage" | "nature" | "religious" | "adventure";

// ─── State ────────────────────────────────────────────────────────────────────

export interface IState {
  _id: string;
  name: string;
  slug: string;
  region: Region;
  capital: string;
  description: string;
  coverImage: string;
  isUnionTerritory: boolean;
  createdAt: string;
  updatedAt: string;
}

// ─── City ─────────────────────────────────────────────────────────────────────

export interface ICity {
  _id: string;
  name: string;
  slug: string;
  stateId: string | IState;
  description: string;
  createdAt: string;
  updatedAt: string;
}

// ─── Category ─────────────────────────────────────────────────────────────────

export interface ICategory {
  _id: string;
  name: string;
  slug: CategorySlug;
  description: string;
  icon: string;
  createdAt: string;
  updatedAt: string;
}

// ─── Place ────────────────────────────────────────────────────────────────────

export interface PlaceImage {
  url: string;
  caption: string;
}

export interface IPlace {
  _id: string;
  name: string;
  slug: string;
  stateId: string | IState;
  cityId?: string | ICity | null;
  categoryIds: string[] | ICategory[];
  shortDescription: string;
  description: string;
  historicalSignificance?: string;
  bestTimeToVisit: string;
  entryFee?: string;
  timings?: string;
  mapLink?: string;
  images: PlaceImage[];
  nearbyPlaceIds: string[] | IPlace[];
  isFeatured: boolean;
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;
}

// ─── API Response wrappers ────────────────────────────────────────────────────

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface ApiError {
  error: string;
  details?: unknown;
}
