"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserBooking = exports.createBooking = void 0;
const Booking_1 = __importDefault(require("../models/Booking"));
// guest booking
const createBooking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, date, time } = req.body;
    try {
        const booking = new Booking_1.default({
            name,
            email,
            date,
            time
        });
        yield booking.save();
        res.status(200).json({
            message: "Booking created",
            data: booking
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Error while creating booking"
        });
    }
});
exports.createBooking = createBooking;
// user booking (protected)
const createUserBooking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { date, time } = req.body;
    try {
        const booking = new Booking_1.default({
            userId: req.user.id,
            date,
            time
        });
        yield booking.save();
        res.status(200).json({
            message: "User booking created",
            data: booking
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Error when creating booking"
        });
    }
});
exports.createUserBooking = createUserBooking;
