import express from "express";
import StudentRouter from "./student_router";

const router = express.Router();

router.use("/student", StudentRouter);

export default router;
