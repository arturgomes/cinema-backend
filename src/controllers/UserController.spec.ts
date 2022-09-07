

import { app } from '../App'
import request from 'supertest'
import mongoose from 'mongoose';

afterAll(done => {
    // Closing the DB connection allows Jest to exit successfully.
    mongoose.connection.dropDatabase();
    mongoose.connection.close()
    done()
})

const user = {
    avatarBase64: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/yXA8fmF44J0Pern//Z",
    email: "artur.gomes@mydomain.com",
    firstName: "Artur",
    lastName: "Gomes",
    movie: {
        createdAt: "2022-09-06T02:48:08.002Z",
        duration: 5400000,
        startDate: "2022-02-21T00:00:00.000Z",
        title: "Movie 4",
        updatedAt: "2022-09-06T02:48:08.002Z",
        __v: 0,
        _id: "6316b4e8bea6de89227a9d0d"
    },
    phone: "0000000",
    sitPlace: 16,
    sitRow: 5,
}

describe('Users Controller', () => {


    it('should be able to create a new user', async () => {
        await request(app)
            .post('/register')
            .send(user)
            .then(response => {
                expect(response.body.message).toBe('Movie added')
            })

    })
    it('should not to add existing user', async () => {
        await request(app)
            .post('/register')
            .send(user).then(response => {
                expect(response.body.message).toBe('User already exists')
            })

    })
    it('should be able to list users', async () => {
        await request(app)
            .get('/users')
            .then(response => {
                console.log(response.body)
                const arrMovies = response.body
                expect(arrMovies.length).toBe(1)
                expect(arrMovies[0].firstName).toBe('Artur')
                expect(arrMovies[0].lastName).toBe('Gomes')
                expect(arrMovies[0].movie.title).toBe('Movie 4')
            })


    })
})