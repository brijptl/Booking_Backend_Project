"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const verifyToken = (req, res, next) => {
    var _a;
    const token = (_a = req.headers["authorization"]) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
    if (!token) {
        return res.send("Token required");
    }
    try {
        const verified = jsonwebtoken_1.default.verify(token, "secretkey");
        req.user = verified;
        next();
    }
    catch (error) {
        res.send("Invalid token");
    }
};
exports.verifyToken = verifyToken;
