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
exports.deleteBookingService = exports.rejectBookingService = exports.approveBookingService = exports.getAllBookingsService = exports.createUserBookingService = exports.createBookingService = void 0;
const Booking_1 = __importDefault(require("../models/Booking"));
// guest booking
const createBookingService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const booking = new Booking_1.default(data);
    yield booking.save();
    return {
        message: "Booking created",
        data: booking
    };
});
exports.createBookingService = createBookingService;
// user booking
const createUserBookingService = (userId, data) => __awaiter(void 0, void 0, void 0, function* () {
    const booking = new Booking_1.default(Object.assign({ userId }, data));
    yield booking.save();
    return {
        message: "User booking created",
        data: booking
    };
});
exports.createUserBookingService = createUserBookingService;
// get all bookings
const getAllBookingsService = () => __awaiter(void 0, void 0, void 0, function* () {
    const bookings = yield Booking_1.default.find();
    return {
        message: "All bookings",
        data: bookings
    };
});
exports.getAllBookingsService = getAllBookingsService;
// approve booking
const approveBookingService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield Booking_1.default.findByIdAndUpdate(id, { status: "approved" });
    return { message: "Booking approved" };
});
exports.approveBookingService = approveBookingService;
// reject booking
const rejectBookingService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield Booking_1.default.findByIdAndUpdate(id, { status: "rejected" });
    return { message: "Booking rejected" };
});
exports.rejectBookingService = rejectBookingService;
// delete booking
const deleteBookingService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield Booking_1.default.findByIdAndDelete(id);
    return { message: "Booking deleted" };
});
exports.deleteBookingService = deleteBookingService;
