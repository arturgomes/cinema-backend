import express from 'express'
import MoviesController from '../controllers/MoviesController'
import UserController from '../controllers/UserController'
const routes = express.Router()
/**
 * GET /movies. Returns a JSON with a list of movies and dates
POST /register. Accepts a JSON with the user data, selected movie, date and row & sit number
GET /users.

 */
routes.get('/movies', MoviesController.index)
routes.post('/movies', MoviesController.create)
routes.post('/register', UserController.create)
routes.get('/users', UserController.index)


export default routes