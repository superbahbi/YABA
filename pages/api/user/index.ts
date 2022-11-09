import { NextApiRequest, NextApiResponse } from "next";

import { PrismaClient } from '@prisma/client'



const prisma = new PrismaClient()


/**
  * @route   POST /api/user
  * @desc    Login user and return JWT token and user data (id, email, firstName, lastName)
  * @access  Public
  * @params  email, password
  * @return  user, token
  * @errors  400, 500
*/
export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  const user = await prisma.user.findUnique({
    where: {
      id: "token"
    }
  })
  if (!user) {
    return res.status(401).json({ errors: [{ msg: 'Unauthorized' }] });
  }
}

