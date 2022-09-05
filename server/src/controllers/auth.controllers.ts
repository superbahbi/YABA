import { sign, verify } from "jsonwebtoken";
import { validationResult } from 'express-validator';
import { CookieOptions, Request, Response } from "express";
import { AppDataSource } from "../utils/data-source"
import { User } from "../entities/user.entity"
import { QueryFailedError } from 'typeorm';

const postRepository = AppDataSource.getRepository(User);

const cookiesOptions: CookieOptions = {
  httpOnly: true,
  sameSite: 'lax',
};

if (process.env.NODE_ENV === 'production') cookiesOptions.secure = true;

// TODO change expriation time to an env variable
const tokenCookieOptions: CookieOptions = {
  ...cookiesOptions,
  expires: new Date(
    Date.now() + 15 * 60 * 1000
  ),
  maxAge: 15 * 60 * 1000,
};


const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  // verify user input data
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // Check if user exists in database
  const user = await postRepository.findOneBy({ email: email.toLowerCase() });

  // Check if user exist
  if (!user) {
    return res.status(400).json({ errors: [{ msg: 'Invalid credentials' }] });
  }
  // Check if password is correct
  if (!User.comparePassword(password, user.password)) {
    return res.status(400).json({ errors: [{ msg: 'Invalid credentials' }] });
  }
  // TODO Check if user is verified
  // Sign Access and Refresh Tokens
  const accessToken = sign(user.toJSON(), process.env.JWT_ACCESS_TOKEN_SECRET as string, { expiresIn: process.env.JWT_TOKEN_EXPIRATION });
  const refreshToken = sign(user.toJSON(), process.env.JWT_ACCESS_TOKEN_SECRET as string, { expiresIn: process.env.JWT_TOKEN_EXPIRATION });
  // Add Cookies to response
  res.cookie('access_token', accessToken, tokenCookieOptions);
  res.cookie('refresh_token', refreshToken, tokenCookieOptions);
  res.cookie('logged_in', true, {
    ...tokenCookieOptions,
    httpOnly: false,
  });
  // Send response
  return res.status(200).json({ user: user.toJSON(), accessToken });
};
const register = async (req: Request, res: Response) => {
  const { email, password, confirmPassword, firstName, lastName } = req.body;

  // verify user input data
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ data: { error: errors.array() } });

  // verify user password and confirm password
  if (!await User.comparePassword(password, confirmPassword)) {
    return res.status(400).json({ data: { errors: [{ msg: 'Passwords do not match' }] } });
  }

  try {
    // Check if user exists in database
    const user = await postRepository.save(postRepository.create({ email, password, firstName, lastName }));
    return res.status(200).json({ data: { user } });
  }
  catch (error) {
    if (error instanceof QueryFailedError) {
      return res.status(400).json({ data: { error: { code: error.driverError.code, severity: error.driverError.severity, msg: error.driverError.detail, } } });
    }
  }


  return;
};
const logout = (res: Response) => {
  res.cookie('access_token', '', { maxAge: 1 });
  res.cookie('refresh_token', '', { maxAge: 1 });
  res.cookie('logged_in', '', { maxAge: 1 });
};
export default { login, register, logout };
