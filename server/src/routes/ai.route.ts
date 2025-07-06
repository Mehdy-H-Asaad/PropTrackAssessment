import { Router } from "express";
import { generateViewing } from "../controllers/ai/generate-viewing.controller";

export const aiRouter = Router();

aiRouter.route("/generate-viewing").post(generateViewing);
