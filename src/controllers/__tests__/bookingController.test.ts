import { describe, it, expect, jest } from "@jest/globals";
import {
  createBooking,
  createUserBooking,
  getAllBookings,
  approveBooking,
  rejectBooking,
  deleteBooking
} from "../bookingController";
import * as bookingService from "../../services/bookingService";

describe("Booking Controller", () => {

  // CREATE BOOKING
  it("create booking success", async () => {
    jest.spyOn(bookingService, "createBookingService").mockResolvedValue({} as any);

    const req: any = { body: {} };
    const res: any = { status: jest.fn().mockReturnThis(), json: jest.fn() };

    await createBooking(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
  });

  it("create booking error", async () => {
    jest.spyOn(bookingService, "createBookingService").mockRejectedValue(new Error());

    const req: any = { body: {} };
    const res: any = { status: jest.fn().mockReturnThis(), json: jest.fn() };

    await createBooking(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
  });

  // USER BOOKING
  it("user booking success", async () => {
    jest.spyOn(bookingService, "createUserBookingService").mockResolvedValue({} as any);

    const req: any = { user: { id: "1" }, body: {} };
    const res: any = { status: jest.fn().mockReturnThis(), json: jest.fn() };

    await createUserBooking(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
  });

  it("user booking error", async () => {
    jest.spyOn(bookingService, "createUserBookingService").mockRejectedValue(new Error());

    const req: any = { user: { id: "1" }, body: {} };
    const res: any = { status: jest.fn().mockReturnThis(), json: jest.fn() };

    await createUserBooking(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
  });

  // GET BOOKINGS
  it("get bookings success", async () => {
    jest.spyOn(bookingService, "getAllBookingsService").mockResolvedValue({} as any);

    const req: any = {};
    const res: any = { status: jest.fn().mockReturnThis(), json: jest.fn() };

    await getAllBookings(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
  });

  it("get bookings error", async () => {
    jest.spyOn(bookingService, "getAllBookingsService").mockRejectedValue(new Error());

    const req: any = {};
    const res: any = { status: jest.fn().mockReturnThis(), json: jest.fn() };

    await getAllBookings(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
  });

  // APPROVE
  it("approve booking", async () => {
    jest.spyOn(bookingService, "approveBookingService").mockResolvedValue({} as any);

    const req: any = { params: { id: "1" } };
    const res: any = { status: jest.fn().mockReturnThis(), json: jest.fn() };

    await approveBooking(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
  });

  // REJECT
  it("reject booking", async () => {
    jest.spyOn(bookingService, "rejectBookingService").mockResolvedValue({} as any);

    const req: any = { params: { id: "1" } };
    const res: any = { status: jest.fn().mockReturnThis(), json: jest.fn() };

    await rejectBooking(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
  });

  // DELETE
  it("delete booking", async () => {
    jest.spyOn(bookingService, "deleteBookingService").mockResolvedValue({} as any);

    const req: any = { params: { id: "1" } };
    const res: any = { status: jest.fn().mockReturnThis(), json: jest.fn() };

    await deleteBooking(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
  });

});