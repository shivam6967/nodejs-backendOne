import express from "express";
import {
  getAllUsers,
  register,
  login,
  getMyProfile,
  logout,
} from "../controllers/user.controllers.js";
import { isAuthenticated } from "../middlewares/auth.middlewares.js";

const router = express.Router();

router.get("/all", getAllUsers);

// We can send the direct post request in browser _ either we need frontend or ejs file __ the best method is all these works and request can be sent using postman

router.post("/new", register);

router.post("/login", login);


// finding the user based on its id using the params : for the DynamicID

// Here same route has different controllers :

router.get( "/me" , isAuthenticated , getMyProfile);


router.get("/logout", isAuthenticated , logout);

/*

router.get("/userid/:id" , getUserById );

router.put("/userid/:id" , updateUser );

router.delete("/userid/:id" , deleteUser );

*/

export default router;
