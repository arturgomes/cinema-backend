import { Request, Response } from 'express';

import { User } from '../models/User';

export default {
    async index(request: Request, response: Response) {
        const users = await User.find().populate('movie');
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
        console.log(request.body)

        const existing = await User.findOne({
            firstName,
            lastName,
            email
        });
        if (!existing) {
            const user = await User.create({
                firstName,
                lastName,
                email,
                phone,
                avatarBase64,
                movie,
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
