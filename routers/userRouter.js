import express from "express";
import routes from "../routes";
import {
  userDetail,
  changePassword,
  postEditProfile,
  getEditProfile
} from "../controllers/userController";
import { onlyPrivate, uploadAvatar } from "../midleware";

const userRouter = express.Router();

userRouter.get(routes.editProfile, onlyPrivate, getEditProfile);
userRouter.post(routes.editProfile, onlyPrivate, uploadAvatar, postEditProfile);
userRouter.get(routes.changePassword, onlyPrivate, changePassword);
userRouter.get(routes.userDetail(), userDetail);

export default userRouter;
