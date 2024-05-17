"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateResults = void 0;
const express_validator_1 = require("express-validator");
const validateResults = (req, res, next) => {
    try {
        (0, express_validator_1.validationResult)(req).throw();
        return next();
    }
    catch (error) {
        const validationError = error;
        res.status(403).send({ error: validationError.msg });
    }
};
exports.validateResults = validateResults;
