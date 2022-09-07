import { app } from '../App'
import request from 'supertest'
import mongoose from 'mongoose';

afterAll(done => {
    // Closing the DB connection allows Jest to exit successfully.
    mongoose.connection.dropDatabase();
    mongoose.connection.close()
    done()
})
describe('Movies Controller', () => {

    it('should be able to create a new movie', async () => {
        await request(app)
            .post('/movies')
            .send({
                title: 'Movie 1',
                duration: 105 * 60000, // 1 hour 45 minutes,
                startDate: new Date('2022-02-19 19:00:00')
            })
            .then(response => {
                expect(response.body.message).toBe('Movie added')
            })

    })
    it('should not to add existing movie', async () => {
        await request(app)
            .post('/movies')
            .send({
                title: 'Movie 1',
                duration: 105 * 60000, // 1 hour 45 minutes,
                startDate: new Date('2022-02-19 19:00:00')
            }).then(response => {
                expect(response.body.message).toBe('Movie already exists')
            })

    })
    it('should be able to list movies', async () => {
        await request(app)
            .get('/movies')
            .then(response => {
                const arrMovies = response.body
                expect(arrMovies.length).toBe(1)
                expect(arrMovies[0].title).toBe('Movie 1')
                expect(arrMovies[0].duration).toBe(6300000)
                expect(arrMovies[0].startDate).toBe('2022-02-19T23:00:00.000Z')
            })


    })
})