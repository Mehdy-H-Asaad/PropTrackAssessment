import { NextFunction, Request, Response } from "express";

export type RESPONSE = Response;
export type REQUEST = Request;
export type NEXT = NextFunction;

export enum TStatus {
	SUCCESS = "SUCCESS",
	ERROR = "ERROR",
}

export type TResponse<T> = {
	data: T;
	status: TStatus;
};
