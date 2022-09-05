import mongoose, { Schema } from 'mongoose';

export interface Movie {
  _id: string;
  title: string;
  duration: number; // milliseconds
  startDate: Date;
}

const movieSchema = new Schema(
  {
    title: String,
    duration: Number,
    startDate: Date
  },
  {
    timestamps: true,
  }
);

export const Movie = mongoose.model('Movie', movieSchema, 'movies');
