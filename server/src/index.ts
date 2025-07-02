import express from "express";
import { connectDB } from "./config/mongo-db.config";
import dotenv from "dotenv";
import { propertyRouter } from "./routes/property.route";
import { globalErrorHandler } from "./middlewares/error.middleware";
import cors from "cors";
import { clientRouter } from "./routes/client.route";

dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();

connectDB();
app.use(express.json());
app.use(cors());
app.use("/api/v1/properties", propertyRouter);
app.use("/api/v1/clients", clientRouter);

app.use(globalErrorHandler);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
