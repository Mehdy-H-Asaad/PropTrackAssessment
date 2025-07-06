import { Router } from "express";
import { createViewing } from "../controllers/viewings/create-viewing.controller";
import { getViewings } from "../controllers/viewings/get-viewings.controllers";
import { updateViewing } from "../controllers/viewings/update-viewing.controller";

const viewingsRouter = Router();

viewingsRouter.route("/").post(createViewing).get(getViewings);
viewingsRouter.route("/:id").put(updateViewing);

export default viewingsRouter;
