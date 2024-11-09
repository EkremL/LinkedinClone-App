import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";
import postRoutes from "./routes/post.route.js";
import notificationRoutes from "./routes/notification.route.js";
import connectionRoutes from "./routes/connection.route.js";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import morgan from "morgan";
import path from "path";

dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();

app.use(morgan("dev"));
app.use(
  cors({
    origin: "http://localhost:5173", // Frontend'in çalıştığı URL
    credentials: true,
  })
);
// {
//   origin: "http://localhost:5173", // replace with your frontend URL
//   credentials: true,
// }
//payload is too large
app.use(express.json({ limit: "5mb" }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "../../frontend/dist")));

//!Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/notifications", notificationRoutes);
app.use("/api/connections", connectionRoutes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontend/dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
