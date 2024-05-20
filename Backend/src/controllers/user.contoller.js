import User from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

//register user

const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;

    if ([username, email, password].some((val) => val.trim() === "")) {
        throw new ApiError(404, "all field must required");
    }

    const isExists = await User.findOne({ email })

    if (isExists) throw new ApiError(409, "user already exists")

    const user = await User.create({
        username,
        email,
        password,
    })

    const access_token = user.generateAccessToken();

    const createdUser = await User.findById(user._id).select("-password")

    return res
        .status(200)
        .cookie("access_token", access_token)
        .json(
            new ApiResponse(
                200,
                { user: createdUser, access_token },
                "user created successfully"
            )
        );
});

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    if (!(email && password)) throw new ApiError(404, 'all field must be required');

    const user = await User.findOne({ email })
    if (!user) throw new ApiError(404, "User not found")

    const isPasswordCorrect = await user.isPasswordCorrect(password)
    if (!isPasswordCorrect) throw new ApiError(404, "invalid credentials")

    const access_token = await user.generateAccessToken();

    const loggedInUser = await User.findById(user._id).select("-password")

    return res.status(200)
        .cookie("access_token", access_token)
        .json(new ApiResponse(200, { user: loggedInUser, access_token }))

})



export { registerUser, loginUser }