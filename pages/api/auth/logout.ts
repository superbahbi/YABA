import { NextApiRequest, NextApiResponse } from "next";

/**
  * @route   POST /api/auth/logout
  * @desc    Logout user and clear cookies
  * @access  Private
  * @params  void
  * @return  void
*/
export default async function handler(_: NextApiRequest, res: NextApiResponse) {
    // Clear cookies
    res.send("logout");
}