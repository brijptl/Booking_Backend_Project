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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBooking = exports.rejectBooking = exports.approveBooking = exports.getAllBookings = exports.createUserBooking = exports.createBooking = void 0;
const bookingService_1 = require("../services/bookingService");
// guest booking
const createBooking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, bookingService_1.createBookingService)(req.body);
        res.status(200).json(result);
    }
    catch (error) {
        res.status(500).json({ message: "Error while creating booking" });
    }
});
exports.createBooking = createBooking;
// user booking (protected)
const createUserBooking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, bookingService_1.createUserBookingService)(req.user.id, req.body);
        res.status(200).json(result);
    }
    catch (error) {
        res.status(500).json({ message: "Error when creating booking" });
    }
});
exports.createUserBooking = createUserBooking;
// get all bookings (admin)
const getAllBookings = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, bookingService_1.getAllBookingsService)();
        res.status(200).json(result);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching bookings" });
    }
});
exports.getAllBookings = getAllBookings;
// approve booking
const approveBooking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, bookingService_1.approveBookingService)(req.params.id);
        res.status(200).json(result);
    }
    catch (error) {
        res.status(500).json({ message: "Error approving booking" });
    }
});
exports.approveBooking = approveBooking;
// reject booking
const rejectBooking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, bookingService_1.rejectBookingService)(req.params.id);
        res.status(200).json(result);
    }
    catch (error) {
        res.status(500).json({ message: "Error rejecting booking" });
    }
});
exports.rejectBooking = rejectBooking;
// delete booking
const deleteBooking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, bookingService_1.deleteBookingService)(req.params.id);
        res.status(200).json(result);
    }
    catch (error) {
        res.status(500).json({ message: "Error deleting booking" });
    }
});
exports.deleteBooking = deleteBooking;
