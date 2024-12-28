import { ErrorRequestHandler } from "express";

export const errorHandler: ErrorRequestHandler = async (
  err,
  req,
  res,
  next
) => {
  try {
    console.log("[!!] error --->", err);
    // Do some task like logging etc.
    res.status(500).json({
      success: true,
      message: "Something went wrong.",
    });
  } catch (error) {
    console.log("[!!] error --->", error);
    res.status(500).json({
      success: true,
      message: "Something went wrong.",
    });
  }
};
