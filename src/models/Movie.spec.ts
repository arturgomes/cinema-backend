
import { Movie } from "./Movie"
import { connect, clearDatabase, closeDatabase } from '../db'

beforeAll(async () => await connect())
afterEach(async () => await clearDatabase())
afterAll(async () => await closeDatabase())


describe('Movies models', () => {
    it('should have empty set of movie at first', async () => {

        const movies = await Movie.find()
        expect(movies.length).toBe(0);
    })
    it('should be possible to create a movie', async () => {
        const movie = {
            title: 'Movie 1',
            duration: 105 * 60000, // 1 hour 45 minutes,
            startDate: new Date('2022-02-19 19:00:00')
        }
        const newMovie = await Movie.create(movie)
        expect(newMovie).toHaveProperty('_id');
    })
    it('should be possible to list movies after inserted', async () => {
        const movie = {
            title: 'Movie 1',
            duration: 105 * 60000, // 1 hour 45 minutes,
            startDate: new Date('2022-02-19 19:00:00')
        }
        const newMovie = await Movie.create(movie)
        expect(newMovie).toHaveProperty('_id');

        const movies = await Movie.find()
        expect(movies.length).not.toBe(0);

    })
})