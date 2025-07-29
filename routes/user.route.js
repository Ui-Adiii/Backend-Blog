import express from 'express';
import {
  deleteUser,
  signOut,
  updateUser,
  getUsers,
  getUser,
} from "../controllers/user.controller.js";
import userAuth from "../middlewares/auth.middleware.js";
import upload from "../middlewares/multer.middleware.js";

const router = express.Router();

router.put(
  "/update/:userId",
  upload.single("profilePicture"),
  userAuth,
  updateUser
);
router.delete("/delete/:userId", userAuth, deleteUser);
router.post("/logout", signOut);
router.get('/getusers', userAuth, getUsers);
router.get('/:userId', getUser);

export default router;