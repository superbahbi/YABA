import { NextApiRequest, NextApiResponse } from "next";

// import { PrismaClient } from '@prisma/client'
// const prisma = new PrismaClient()

/**
 * @route   POST /api/user/me
 * @desc    Get user data from token and return user data (id, email, firstName, lastName)
 * @access  Public
 * @return  user
 * @errors  400, 500
 */
export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  return res.status(200).json({ msg: "2me" });
  // if (!cookie) {
  //   return res.status(401).json({ errors: [{ msg: 'Unauthorized' }] });
  // } else {
  //   const token = cookie.split('=')[1];
  //   const user = await prisma.user.findUnique({
  //     where: {
  //       id: token
  //     }
  //   })
  //   if (!user) {
  //     return res.status(401).json({ errors: [{ msg: 'Unauthorized' }] });
  //   }
  // }
}
