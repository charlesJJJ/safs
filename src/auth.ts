import { sign } from "jsonwebtoken";
import { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } from "./constants";
import { Users } from './entity/User';



export const createTokens=(user:Users)=>{
const refreshToken = sign({ userId: user.id,remember_token:user.remember_token },REFRESH_TOKEN_SECRET , {
                expiresIn: "15s"
            });
const accessToken =sign({userId:user.id},ACCESS_TOKEN_SECRET,{
                expiresIn:"15s"
            });

            return {refreshToken, accessToken};
        }