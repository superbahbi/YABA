import { IUserProps } from "../types/interfaces";
import { NextFunction, Request, Response } from "express";
const login = async (req: Request, res: Response) => {
  return res.status(200).json({
    message: "login",
  });
};
const register = async (req: Request, res: Response) => {
  return res.status(200).json({
    message: "register",
  });
};
export default { login, register };
