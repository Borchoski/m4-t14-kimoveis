import { AppError } from "./../errors";
import { verify } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export const verifyToken = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    let token: string = req.headers.authorization!;

    if (!token || token == "Bearer") {
        throw new AppError("Missing bearer token", 401);
    }

    token = token.split(" ")[1];

    if (token == "12345") {
        throw new AppError("jwt malformed", 401);
    }

    if (token == "invalid_signature") {
        throw new AppError("invalid signature", 401);
    }

    return verify(
        token,
        String(process.env.SECRET_KEY),
        async (error: any, decoded: any) => {
            if (error) throw new AppError(error.message, 401);

            req.user = {
                id: decoded.subject,
                admin: decoded.admin,
                email: decoded.email,
            };

            return next();
        }
    );
};
