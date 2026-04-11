"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./config/db"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const bookingRoutes_1 = __importDefault(require("./routes/bookingRoutes"));
const authMiddleware_1 = require("./middleware/authMiddleware");
const app = (0, express_1.default)();
app.use(express_1.default.json());
// connect database
(0, db_1.default)();
// auth routes
app.use("/api", authRoutes_1.default);
// booking routes
app.use("/api", bookingRoutes_1.default);
// protected route
app.get("/api/protected", authMiddleware_1.verifyToken, (req, res) => {
    res.send("You have access");
});
// test route
app.get("/", (req, res) => {
    res.send("Server running");
});
app.listen(3000, () => {
    console.log("Server started on port 3000");
});
