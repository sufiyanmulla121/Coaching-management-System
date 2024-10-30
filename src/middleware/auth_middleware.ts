import { Student } from "./../model/students";
import { NextFunction, Request, Response } from "express";
import admin from "firebase-admin";

interface AuthenticatedRequest extends Request {
  Student?: {
    student_id: number;
    student_name: string;
    student_email: string;
  };
}

export async function verifyToken(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<void> {
  const authorizationHeader = req.header("Authorization");
  if (!authorizationHeader) {
    res
      .status(401)
      .json({ message: "Invalid Token. Please provide Authorization header" });
    return; // Explicitly return void
  }

  if (!authorizationHeader.startsWith("Bearer ")) {
    res.status(401).json({ message: "Unauthorized" });
    return; // Explicitly return void
  }

  const idToken = authorizationHeader.split("Bearer ")[1];
  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    req.Student = {
      student_id: decodedToken.student_id,
      student_name: decodedToken.student_name,
      student_email: decodedToken.student_email,
    };
    next(); // Proceed to the next middleware
  } catch (error) {
    res.status(403).json({ message: "Failed to verify token", error });
    return; // Explicitly return void
  }
}
