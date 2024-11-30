import { Request, Response } from "express";
import { StudentDetails, sendRegistrationMail } from "../config/mail_config";
import { Student } from "../model/students";




export class StudentController {
  static async addStudent(req: Request, res: Response) {
    try {
      const student = await Student.create(req.body);
      sendRegistrationMail(student as StudentDetails);
      console.log("Mail sent successfully");
      res.status(201).json({
        message: "Student Added SuccessFully",
        student,
      });
    } catch (error) {
      console.error("Error Adding Student", error);
      res.status(500).json({ error: "Failed To create Student" });
    }
  }

  static async getAllStudents(req: Request, res: Response) {
    try {
      const students = await Student.findAll({});
      if (students) {
        res.status(200).json({ students });
      } else res.status(500).json({ message: "Failed to fetch the Students" });
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch the Students", error });
    }
  }

  static async login(req: Request, res: Response) {
    try {
      const { student_email } = req.body;
      const studentData = await Student.findOne(student_email);
      if (studentData) {
        res.status(200).json({ message: "Login SuccessFull", studentData });
      } else {
        res.status(500).json({ message: "Failed" });
      }
    } catch (error) {
      res.status(500).json({ message: "Failed to login", error });
    }
  }
}
