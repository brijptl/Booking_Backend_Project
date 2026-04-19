import { describe, it, expect, jest } from "@jest/globals";
import { registerUser, loginUser } from "../authController";
import * as authService from "../../services/authService";

describe("Auth Controller", () => {

  // REGISTER SUCCESS
  it("register success", async () => {
    jest.spyOn(authService, "registerUserService").mockResolvedValue({
      message: "User registered"
    } as any);

    const req: any = { body: {} };
    const res: any = { send: jest.fn() };

    await registerUser(req, res);

    expect(res.send).toHaveBeenCalled();
  });

  // REGISTER ERROR
  it("register error", async () => {
    jest.spyOn(authService, "registerUserService").mockRejectedValue(new Error());

    const req: any = { body: {} };
    const res: any = { send: jest.fn() };

    await registerUser(req, res);

    expect(res.send).toHaveBeenCalledWith("Error while registering user");
  });

  // LOGIN SUCCESS
  it("login success", async () => {
    jest.spyOn(authService, "loginUserService").mockResolvedValue({
      message: "login success",
      token: "123"
    } as any);

    const req: any = { body: {} };
    const res: any = { json: jest.fn() };

    await loginUser(req, res);

    expect(res.json).toHaveBeenCalled();
  });

  // LOGIN ERROR
  it("login error", async () => {
    jest.spyOn(authService, "loginUserService").mockRejectedValue(new Error());

    const req: any = { body: {} };
    const res: any = { send: jest.fn() };

    await loginUser(req, res);

    expect(res.send).toHaveBeenCalledWith("Error during login");
  });

});