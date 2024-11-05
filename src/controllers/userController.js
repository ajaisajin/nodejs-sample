import { createUser, findOne } from "../services/userServices.js";
import {
  comparePassword,
  generateToken,
  hashPassword,
} from "../utils/jwtUtils.js";

export const register = async (req, res) => {
  try {
    const isAlreadyExist = await findOne({ email: req.body.email });

    if (isAlreadyExist) {
      return res.status(400).json({ message: "User already exists" });
    } else {
      const hashedPassword = await hashPassword(userData.password);
      userData.password = hashedPassword;

      const user = await createUser(userData);
      const userObj = {
        name: user.name,
        email: user.email,
        user_id: user._id,
      };

      const token = generateToken(user._id);

      return res.status(200).json({
        message: "User created successfully",
        data: {
          user: userObj,
          token: token,
        },
      });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const isUserExist = await findOne({ email: req.body.email });
    if (!isUserExist) {
      return res.status(400).json({ message: "User not found" });
    }
    const isPasswordMatch = await comparePassword(
      req.body.password,
      isUserExist.password
    );

    if (!isPasswordMatch) {
      return res.status(400).json({ message: "Password is incorrect" });
    } else {
      return res.status(200).json({
        message: "Login successful",
      });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
