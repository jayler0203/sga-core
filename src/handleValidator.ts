import { Request, Response, NextFunction } from "express";
import { validationResult, ValidationError } from "express-validator";

const validateResults = (req: Request, res: Response, next: NextFunction) => {
    try {
        validationResult(req).throw();
        return next();
    } catch (error) {
        const validationError = error as ValidationError;
        res.status(403).send({ error: validationError.msg });
    }
};

export {validateResults};
