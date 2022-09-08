import { User } from "../models/User"

export default {
  async find() {
    return await await User.find().populate('movie')
  },
  async findOne(param: any) {
    return await await User.findOne(param)
  },
  async create(params: any) {
    return await User.create(params)
  }
}
