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

    res
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



export { registerUser }