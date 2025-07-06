import { Request, Response, NextFunction } from "express";
import { ApiError } from "../utils/api-error";
import { EStatus } from "../types/server.types";

export const globalErrorHandler = (
	err: ApiError,
	_req: Request,
	res: Response,
	_next: NextFunction
) => {
	const statusCode = err.statusCode || 500;
	const message = err.message || "Internal Server Error";
	res.status(statusCode).json({
		status: EStatus.ERROR,
		error: message,
	});
};
