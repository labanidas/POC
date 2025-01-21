import express from "express";
import {test, readAll, createUser, deleteUser} from "../controllers/controller.js"

const router =  express.Router();


router.get("/", test);


router.get("/read", readAll);

router.post("/create", createUser);

router.delete("/delete/:id", deleteUser);


export default router;