import { Router } from "express";
import { getProperties } from "../controllers/property/get-properties.controller";
import { createProperty } from "../controllers/property/create-property.controller";
import { deleteProperty } from "../controllers/property/delete-property.controller";
import { updateProperty } from "../controllers/property/update-property.controller";
import { getSingleProperty } from "../controllers/property/get-single-property.controller";
import { getSuggestedProperties } from "../controllers/property/get-suggested-properties.controller";

export const propertyRouter = Router();

propertyRouter.route("/").get(getProperties);
propertyRouter.route("/").post(createProperty);
propertyRouter.route("/:id").delete(deleteProperty);
propertyRouter.route("/:id").put(updateProperty);
propertyRouter.route("/:id").get(getSingleProperty);
propertyRouter.route("/suggested/:id").get(getSuggestedProperties);
