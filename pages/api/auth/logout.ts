import { clearTokens } from "@/utils/cookies";
import { NextApiRequest, NextApiResponse } from "next";

/**
 * @route   POST /api/auth/logout
 * @desc    Logout user and clear cookies
 * @access  public
 * @params  void
 * @return  void
 */
export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  // Clear cookies
  clearTokens(res);
  return res.status(200).json({
    msg: "Logged out successfully",
  });
}
