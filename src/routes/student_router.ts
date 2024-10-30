import { Router } from "express";
import { StudentController } from "../controller/student_Controller";
import express from "express";
import { verifyToken } from "../middleware/auth_middleware";

const router = express.Router();

router.post("/addStudent", StudentController.addStudent);
router.get("/getAllStudents", verifyToken, StudentController.getAllStudents);
router.post("/login", StudentController.login);

export default router;
