import mongoose, { Schema } from 'mongoose';
import { Movie } from './Movie';

export interface User {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    avatarBase64: string;
    movie: Movie | undefined;
    sitRow: number | undefined;
    sitPlace: number | undefined;
}

const userSchema = new Schema(
    {
        firstName: String,
        lastName: String,
        email: String,
        phone: String,
        avatarBase64: String,
        movie: { type: Schema.Types.ObjectId, ref: 'Movie' },
        sitRow: Number,
        sitPlace: Number
    },
    {
        timestamps: true,
    }
);

export const User = mongoose.model('User', userSchema, 'users');
