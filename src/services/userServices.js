import User from "../models/userSchema.js";

export const findOne = async (query) => await User.findOne(query);

export const createUser = async (data) => await User.create(data);
