import express from "express";
import { protectRoute } from "../middlewares/auth.middleware.js";
import * as userController from "../controllers/user.controller.js";

const router = express.Router();

router.get(
  "/suggestions",
  protectRoute,
  userController.getSuggestedConnections
);
router.get("/:username", protectRoute, userController.getPublicProfile);
router.put("/profile", protectRoute, userController.updateProfile);

export default router;
