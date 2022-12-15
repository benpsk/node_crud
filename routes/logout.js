import express from "express";
const router = express.Router();

import * as logoutController from "../controllers/logoutController.js";

router.get('/', logoutController.handleLogout);

export default router;