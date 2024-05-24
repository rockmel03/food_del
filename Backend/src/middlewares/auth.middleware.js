import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from '../utils/ApiError.js';

const verifyAuth = asyncHandler(async (req, res, next) => {
    const access_token = req.cookies?.access_token || req.headers.authorization?.replace('Bearer ', "");
    if (!access_token) throw new ApiError(404, "unauthorized request: Access token is required");

    const decodedData = jwt.verify(access_token, process.env.JWT_SECRET_KEY);
    if (!decodedData) throw new ApiError(404, "unauthorized request:  invalid access token");

    const user = await User.findById(decodedData._id).select("-password");
    if (!user) throw new ApiError(404, "unauthorized request: user not found");

    req.user = user;
    next();
})

export { verifyAuth }