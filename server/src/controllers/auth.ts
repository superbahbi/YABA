// import { IUserProps } from "../types/interfaces";
import { z } from "zod";
import { Request, Response } from "express";
const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const User = z.object({
    email: z.string().email(),
    password: z.string().min(6),
  });

  try {
    User.parse({ email, password });
    // Todo - check if user exists in db
    // Todo - check if password is correct
    // Todo - generate token
    return res.status(200).json({ message: "Login successful", data: { email, token: "todo make a token" } });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ message: "Login unsuccessful", data: { errors: error.issues } });
    }
  }

  return res.status(200).json(User.parse({ email, password }));
};
const register = async (req: Request, res: Response) => {
  const { email, password, confirmPassword, firstName, lastName } = req.body;
  console.log({ email, password, confirmPassword, firstName, lastName })
  const User = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    confirmPassword: z.string().min(6),
    firstName: z.string().min(2),
    lastName: z.string().min(2),
  });
  try {
    User.parse({ email, password });
    // Todo - check if user exists in db
    // Todo - check if password is correct
    // Todo - generate token
    return res.status(200).json({ message: "Register successful", data: { email, token: "todo make a token" } });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ message: "Register unsuccessful", data: { errors: error.issues } });
    }
  }
  return;
};
export default { login, register };
