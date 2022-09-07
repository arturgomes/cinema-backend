

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
        duration: 5400000,
        startDate: "2022-02-21T00:00:00.000Z",
        title: "Movie 1",
    },
    phone: "0000000",
    sitPlace: 16,
    sitRow: 5,
}

describe('Users Controller', () => {
    it('should be able to create a new user', async () => {
        await request(app)
            .post('/movies')
            .send({
                title: 'Movie 1',
                duration: 105 * 60000, // 1 hour 45 minutes,
                startDate: new Date('2022-02-19 19:00:00')
            })
        await request(app)
            .post('/register')
            .send(user)
            .then(response => {
                expect(response.body.message).toBe('User created')
            })

    })
    it('should not add existing user', async () => {
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
                const arrMovies = response.body
                // console.log(arrMovies)
                expect(arrMovies.length).toBeGreaterThan(0)
                expect(arrMovies[0].firstName).toBe('Artur')
                expect(arrMovies[0].lastName).toBe('Gomes')
                expect(arrMovies[0].movie.title).toBe('Movie 1')
            })


    })
})