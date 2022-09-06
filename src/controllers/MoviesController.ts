import { Request, Response } from 'express';

import { Movie } from '../models/Movie';

export default {
    async index(request: Request, response: Response) {
        const movies = await Movie.find()
        if (movies) { return response.status(200).json(movies) }
        return response.status(400).json({ message: "No movies found" })
    },
    async create(request: Request, response: Response) {

        const { title, duration, startDate } = request.body;

        const existing = await Movie.findOne({ title });
        if (!existing) {
            const movie = await Movie.create({
                title, duration, startDate
            });
            return response.status(201).json({
                message: 'Movie added',
                payload: movie,
            });
        }

        return response.status(201).json({ message: 'Movie already exists' });
    },

};
