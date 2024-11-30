import nodemailer from "nodemailer";
import { generateRegistrationEmail } from "../constants/registration_templete_Constant";
import { generateAbsentRemarkEmail } from "../constants/registration_templete_Constant";
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



export async function sendAbsentMail(student: StudentDetails) {
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

    const subject =
      "`Absence Notification for ${student.student_name} on ${new Date().toLocaleDateString()}`";
    const text = `Dear Parent/Guardian,

We would like to inform you that your child, ${
      student.student_name
    }, was marked as absent on ${new Date().toLocaleDateString()} for their class (${
      student.student_class
    } - Section ${student.student_section}).

We encourage open communication, and if there are any specific circumstances leading to this absence, please feel free to notify us. Regular attendance is essential to ensure academic progress and success, and we aim to work collaboratively to support your child’s learning journey.

For any questions or concerns, please reach out to us.

Best regards,
SM Group of Coaching Centers
`;

    const html = generateAbsentRemarkEmail(student);

    const info = await transporter.sendMail({
      from: '"SM Group Of Coaching Centres" <noreply@company.com>',
      to: student.parents_email,
      subject,
      text,
      html,
    });
    console.log("Message sent: %s", info.messageId);
    console.log("Email successfully sent to:", student.parents_email);
  } catch (error) {
    console.error("Error sending registration email:", error);
  }
}