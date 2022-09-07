
import { User } from "./User"
import { connect, clearDatabase, closeDatabase } from '../db'

beforeAll(async () => await connect())
afterEach(async () => await clearDatabase())
afterAll(async () => await closeDatabase())

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
describe('Users models', () => {
    it('should have empty set of users at first', async () => {

        const user = await User.find()
        expect(user.length).toBe(0);
    })
    it('should be possible to create an user', async () => {

        const newUser = await User.create(user)
        expect(newUser).toHaveProperty('_id');
    })
    it('should be possible to list users after inserted', async () => {

        const newUser = await User.create(user)
        expect(newUser).toHaveProperty('_id');

        const users = await User.find()
        expect(users.length).not.toBe(0);

    })
})