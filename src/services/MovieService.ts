import { Movie } from "../models/Movie"

export default {
  async find() {
    return await Movie.find()
  },
  async findOne(param: any) {
    return await Movie.findOne(param)
  },
  async create(params: any) {
    return await Movie.create(params)
  }
}
