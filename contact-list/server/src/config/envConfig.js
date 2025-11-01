import dotenv from "dotenv";

dotenv.config();


export const MONGO_URI = process.env.MONGO_URI;
export const PORT = process.env.PORT;
export const JWT_SECRET = process.env.JWT_SECRET;

export const ACCESS_TOKEN_EXPIRES_IN = process.env.ACCESS_TOKEN_EXPIRES_IN ||'2h';
export const REFRESH_TOKEN_EXPIRES_IN = process.env.REFRESH_TOKEN_EXPIRES_IN || '1d';



