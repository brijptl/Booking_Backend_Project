"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bookingController_1 = require("../controllers/bookingController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = express_1.default.Router();
// guest booking
router.post("/booking", bookingController_1.createBooking);
// user booking (protected)
router.post("/booking/user", authMiddleware_1.verifyToken, bookingController_1.createUserBooking);
exports.default = router;
