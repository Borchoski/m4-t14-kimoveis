import { AppError } from "./../errors";
import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

export const verifyPermission = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    let token: string = req.headers.authorization!;

    if (!token) {
        throw new AppError("Missing authorization token", 401);
    }

    token = token.split(" ")[1];

    return verify(
        token,
        String(process.env.SECRET_KEY),
        async (error: any, decoded: any) => {
            if (error) throw new AppError(error.message, 401);

            if (decoded.admin == false) {
                throw new AppError("Insuficient permission.", 401);
            }

            req.user = {
                id: decoded.subject,
                admin: decoded.admin,
            };

            return next();
        }
    );
};
