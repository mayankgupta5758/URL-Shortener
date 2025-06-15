import express from "express"
import dotenv from "dotenv";
import connectDB from "./src/config/mongo.config.js";
import auth_routes from "./src/routes/auth.routes.js";
import user_routes from "./src/routes/user.routes.js";
import short_url from "./src/routes/shorturl.route.js";
import { redirectFromShortUrl } from "./src/controller/shorturl.controller.js";
import { errorHandler } from "./src/utils/errorHandler.js";
import cors from "cors";
import { attachUser } from "./src/utils/attachUser.js";
import cookieParser from "cookie-parser";
dotenv.config("./.env");
const app = express();

app.use(cors({
    origin: "http://localhost:5173", // not '*'
    credentials: true,              // allow cookies
}));
app.use(express.json());
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))
app.use(attachUser)

app.use("/api/auth", auth_routes);
app.use("/api/user", user_routes);
app.use("/api/create", short_url);
app.get("/:id", redirectFromShortUrl);
app.use(errorHandler)

app.listen(3000, () => {
    connectDB();
    console.log(`the server is working on port http://localhost:3000`);
})