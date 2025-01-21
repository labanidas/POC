import express from "express";
import {readAll, createUser, deleteUser} from "../controllers/controller.js"

const router =  express.Router();


router.get("/read", readAll);

router.get("/create", createUser);

router.delete("/delete/:id", deleteUser);


export default router;