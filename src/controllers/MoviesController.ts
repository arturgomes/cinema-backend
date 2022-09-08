import { Request, Response } from 'express';

import MovieService from '../services/MovieService';

export default {
    async index(request: Request, response: Response) {
        const movies = await MovieService.find();
        if (movies) { return response.status(200).json(movies) }
        return response.status(400).json({ message: "No movies found" })
    },
    async create(request: Request, response: Response) {

        const { title, duration, startDate } = request.body;

        const existing = await MovieService.findOne({ title });
        if (!existing) {
            const movie = await MovieService.create({
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
