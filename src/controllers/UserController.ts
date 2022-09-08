import { Request, Response } from 'express';
import { Movie } from '../models/Movie';
import MovieService from '../services/MovieService';

import UserService from '../services/UserService';

export default {
    async index(request: Request, response: Response) {
        const users = await UserService.find();
        return response.status(200).json(users)
    },
    async create(request: Request, response: Response) {

        const { firstName,
            lastName,
            email,
            phone,
            avatarBase64,
            movie,
            sitRow,
            sitPlace } =
            request.body;
        const existing = await UserService.findOne({
            firstName,
            lastName,
            email
        });
        if (!existing) {
            const newMovie = await MovieService.findOne({ title: movie.title })
            const user = await UserService.create({
                firstName,
                lastName,
                email,
                phone,
                avatarBase64,
                movie: newMovie,
                sitRow,
                sitPlace
            });
            return response.status(201).json({
                message: 'User created',
                payload: user,
            });
        }

        return response.status(201).json({ message: 'User already exists' });
    },

};
