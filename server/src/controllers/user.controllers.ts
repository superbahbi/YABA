import { IUserProps } from "../types/interfaces";
import { Request, Response } from "express";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


const getAllUsers = async (_: Request, res: Response) => {
  const users = await prisma.user.findMany()
  return res.status(200).json({
    data: users
  });
};

const getUser = async (req: Request, res: Response) => {
  const id: string = req.params.id;
  const user = await prisma.user.findMany({ where: { id } })
  return res.status(200).json({
    data: user
  });
};

const addUser = async (req: Request, res: Response) => {
  const data: Record<string, unknown> = req.body;

  // TODO: data validation
  return res.status(200).json({
    message: "User added",
    data,
  });
};

const updateUser = async (req: Request, res: Response) => {
  const updatedUser: IUserProps = req.body;
  // TODO: data validation
  const updateUser = await prisma.user.update({
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
    data: updateUser,
  });
};

const deleteUser = async (req: Request, res: Response) => {
  const id: string = req.params.id;
  // TODO: data validation
  const deleteUser = await prisma.user.delete({
    where: {
      id
    },
  })
  return res.status(200).json({
    message: "User deleted",
    data: deleteUser,
  });
};
export default { getAllUsers, getUser, addUser, updateUser, deleteUser };
