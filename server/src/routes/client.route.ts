import { Router } from "express";
import { createClientInquiry } from "../controllers/clients/create-clinet-inquiry.controller";
import { getClientsInquiries } from "../controllers/clients/get-clients-inquiries.controller";

export const clientRouter = Router();

clientRouter.route("/inquiries/create-inquiry").post(createClientInquiry);
clientRouter.route("/inquiries").get(getClientsInquiries);
