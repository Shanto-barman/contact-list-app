import dotenv from "dotenv";

dotenv.config();


export const MONGO_URI = process.env.MONGO_URI;
export const PORT = process.env.PORT;

// exports.MONGO_URI = process.env.MONGO_URI;
// exports.PORT = process.env.PORT;
// exports.JWT_SECRET = process.env.JWT_SECRET;
// exports.ACCESS_TOKEN_EXPIRES_IN = process.env.ACCESS_TOKEN_EXPIRES_IN;
// exports.REFRESH_TOKEN_EXPIRES_IN = process.env.REFRESH_TOKEN_EXPIRES_IN;


