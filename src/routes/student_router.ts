import { Router } from "express";
import { StudentController } from "../controller/student_Controller";
import express from "express";

const router = express.Router();

router.post("/addStudent", StudentController.addStudent);
router.get("/getAllStudents", StudentController.getAllStudents);
router.post("/login", StudentController.login);

export default router;
