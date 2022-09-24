import { IUserProps } from "../types/interfaces";
import { Request, Response } from "express";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

/**
  * @route   GET /api/user
  * @desc    Get user data from token id (req.user.id) and return user data to client
  * @access  Public
  * @params  void
  * @return  user
 */
export const getAllUsers = async (_: Request, res: Response) => {
  const users = await prisma.user.findMany()
  return res.status(200).json({
    data: users
  });
};

/**
 * @route   POST /api/user/:id
 * @desc    Get user data from token id (req.params.id) and return user data to client
 * @access  Public
 * @params  user.id
 * @return  user
 */
export const getUser = async (req: Request, res: Response) => {
  const id: string = req.params.id;
  const user = await prisma.user.findMany({ where: { id } })
  return res.status(200).json({
    data: user
  });
};

/**
 * @route   POST /api/user
 * @desc    Add user to database and return user data to client
 * @access  Public
 * @params  user
 * @return  user
*/
export const addUser = async (req: Request, res: Response) => {
  const data: Record<string, unknown> = req.body;

  // TODO: data validation
  return res.status(200).json({
    message: "User added",
    data,
  });
};

/**
 * @route   PUT /api/user
 * @desc    Update user in database and return user data to client
 * @access  Public
 * @params  user
 * @return  user
 */
export const updateUser = async (req: Request, res: Response) => {
  const updatedUser: IUserProps = req.body;
  // TODO: data validation
  const updateUserQuery = await prisma.user.update({
    where: {
      id: updatedUser.id,
    },
    data: {
      firstName: updatedUser.firstName,
      lastName: updatedUser.lastName,
      email: updatedUser.email,
    },
  })
  return res.status(200).json({
    message: "User updated",
    data: updateUserQuery,
  });
};

/**
 * @route   DELETE /api/user/:id
 * @desc    Delete user from database and return user data to client
 * @access  Public
 * @params  user.id
 * @return  user
 */
export const deleteUser = async (req: Request, res: Response) => {
  const id: string = req.params.id;
  // TODO: data validation
  const deleteUserQuery = await prisma.user.delete({
    where: {
      id
    },
  })
  return res.status(200).json({
    message: "User deleted",
    data: deleteUserQuery,
  });
};
