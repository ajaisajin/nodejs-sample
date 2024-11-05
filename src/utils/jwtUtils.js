import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

export const comparePassword = async (password, hash) => {
    return await bcrypt.compare(password, hash);
}

export const generateToken = (id) => {
    return jwt.sign({ id }, "helloworld", {
        expiresIn: "24h",
    });
}