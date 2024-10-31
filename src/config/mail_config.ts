import nodemailer from "nodemailer";
import { generateRegistrationEmail } from "../constants/registrationTempleteConstant";

export interface StudentDetails {
  student_id: number;
  student_name: string;
  student_class: string;
  student_email: string;
  student_section: string;
  //   student_mobile: string;
  parents_email: string;
  parents_mobile: string;
}

export async function sendRegistrationMail(student: StudentDetails) {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      //   host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.User,
        pass: process.env.password,
      },
    });

    const subject = "Successfully Registered with SM Group of Coaching Centers";
    const text = `Hello ${student.student_name}, your registration in our Coaching portal has been successfully completed.`;
    const html = generateRegistrationEmail(student);

    const info = await transporter.sendMail({
      from: '"SM Group Of Coaching Centres" <noreply@company.com>',
      to: student.student_email,
      subject,
      text,
      html,
    });
    console.log("Message sent: %s", info.messageId);
    console.log("Email successfully sent to:", student.student_email);
  } catch (error) {
    console.error("Error sending registration email:", error);
  }
}
