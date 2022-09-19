import { sign } from "jsonwebtoken";
import { validationResult } from 'express-validator';
import { CookieOptions, Request, Response } from "express";
import { Prisma, PrismaClient } from '@prisma/client'
import argon2 from "argon2"
const prisma = new PrismaClient()

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

/*
  * @route   POST /api/auth/login
  * @desc    Login user
  * @access  Public
  * @params  email, password
  * @return  user, token
  * @errors  400, 500
*/
const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  // verify user input data
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // Check if user exists in database
  const user = await prisma.user.findUnique({
    where: {
      email: email.toLowerCase(),
    }
  })


  // Check if user exist
  if (!user) {
    return res.status(400).json({ errors: [{ msg: 'Invalid credentials' }] });
  }

  // TODO Check if password is correct
  const valid = await argon2.verify(user.password, password);
  if (!valid) {
    return res.status(400).json({ errors: [{ msg: 'Invalid credentials' }] });
  }

  // Sanitize user data with password before sending it to client
  const sanitizedUser = {
    id: user.id,
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
  }
  // TODO Check if user is verified
  // Sign Access and Refresh Tokens
  const accessToken = sign(sanitizedUser, process.env.JWT_ACCESS_TOKEN_SECRET as string, { expiresIn: process.env.JWT_TOKEN_EXPIRATION });
  const refreshToken = sign(sanitizedUser, process.env.JWT_ACCESS_TOKEN_SECRET as string, { expiresIn: process.env.JWT_TOKEN_EXPIRATION });
  // Add Cookies to response
  res.cookie('access_token', accessToken, tokenCookieOptions);
  res.cookie('refresh_token', refreshToken, tokenCookieOptions);
  res.cookie('logged_in', true, {
    ...tokenCookieOptions,
    httpOnly: false,
  });
  // Send response
  return res.status(200).json({
    user: sanitizedUser,
    accessToken,
    refreshToken
  });
};

/*
  * @route   POST /api/auth/register
  * @desc    Register user
  * @access  Public
  * @params  email, password, firstName, lastName
  * @return  void
  * @errors  400, 500
*/
const register = async (req: Request, res: Response) => {
  const { email, password, firstName, lastName } = req.body;

  // verify user input data
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ data: { error: errors.array() } });

  // hashing password
  const hashedPassword = await argon2.hash(password)
  try {
    // Check if user exists in database
    const user: Prisma.UserCreateInput = await prisma.user.create({
      data: {
        email: email,
        firstName: firstName,
        lastName: lastName,
        password: hashedPassword,
      },
    })
    return res.status(200).json({ status: "success", data: { user } });
  }
  catch (error) {
    return res.status(400).json({ status: "error", data: { error } });
  }


  return;
};
const logout = (res: Response) => {
  res.cookie('access_token', '', { maxAge: 1 });
  res.cookie('refresh_token', '', { maxAge: 1 });
  res.cookie('logged_in', '', { maxAge: 1 });
};
export default { login, register, logout };
