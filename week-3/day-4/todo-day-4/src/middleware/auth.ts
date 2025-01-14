import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { ErrorCodes } from '../types/enums/ErrorCodes.enum';

export function auth(req: Request, res: Response, next: NextFunction): void {
    const token = req.headers['authorization']?.split(' ')[1];    
    
    if (!token) {
         res.status(401).json({
            error: ErrorCodes.MUST_BE_LOGGED_IN
        });
        return; 

    }

    jwt.verify(token, process.env.JWT_KEY as string, (err: any, user: any) => {
        if (err) {
            if (err.name === 'TokenExpiredError') {
                return res.status(401).json({
                    error: ErrorCodes.TOKEN_EXPIRED
                });
            }
            return res.status(401).json({
                error: ErrorCodes.INVALID_TOKEN
            });
        }
        // Proceed to the next middleware or route handler
        next();
    });
}
