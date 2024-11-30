import { StudentDetails } from "../config/mail_config";

export function generateRegistrationEmail(student: StudentDetails) {
  return `
    <b>Hello ${student.student_name},</b><br><br>

    Welcome to <b>SM Group of Coaching Centers!</b> We are pleased to inform you that your registration in our coaching portal has been successfully completed. We are excited to have you join our learning community, and we look forward to supporting your academic journey.<br><br>

    Here are your registration details:<br>
    <ul>
      <li><b>Student Name:</b> ${student.student_name}</li>
      <li><b>Class:</b> ${student.student_class}</li>
      <li><b>Section:</b> ${student.student_section}</li>
      <li><b>Student ID:</b> ${student.student_id}</li>
    </ul>

    You can access the portal and begin using your student account by following this link: <a href="http://localhost/SM/Coachings">Login Here</a><br><br>
 
    <b>Parental Monitoring and Communication</b><br>
    We value the involvement of parents in their child's education. To keep you updated on your child’s progress and activities, the following contact information has been provided:<br>
    <ul>
      <li><b>Parent Email:</b> ${student.parents_email}</li>
      <li><b>Parent Mobile:</b> ${student.parents_mobile}</li>
    </ul>

    As part of our commitment to your child’s growth, we will be sending updates on attendance, performance, and behavior records to the registered parent email. We encourage parents to regularly check these updates and engage with us if there are any questions or concerns.<br><br>

    <b>Important Guidelines and Expectations:</b><br>
    We believe that a structured and collaborative approach to learning is essential. Below are some guidelines to ensure a productive and positive learning environment:<br>
    <ol>
      <li><b>Attendance:</b> Regular attendance is crucial. Parents will receive attendance updates to ensure students are on track.</li>
      <li><b>Conduct:</b> We expect all students to maintain respectful behavior toward teachers and peers. In the event of any issues, parents will be notified promptly.</li>
      <li><b>Performance Tracking:</b> Regular progress reports will be provided. Parents are encouraged to discuss these reports with their child and reach out for any support if needed.</li>
      <li><b>Open Communication:</b> We value transparency. Should you need any assistance or wish to discuss your child's progress, our team is here to support you.</li>
    </ol>

    We are thrilled to embark on this academic journey with you and look forward to a successful year ahead! Thank you for entrusting us with your education.<br><br>

    With warm regards,<br><br>
    <b>SM Group of Coaching Centers</b><br>
    <em>Your Partner in Academic Excellence</em><br>
  `;
}



export function generateAbsentRemarkEmail(student: StudentDetails) {
  return `
    <b>Dear Parent/Guardian of ${student.student_name},</b><br><br>

    We hope this message finds you well. We are reaching out from <b>SM Group of Coaching Centers</b> to inform you that your child, <b>${
      student.student_name
    }</b>, was marked <b>absent</b> today in class.<br><br>

    <b>Student Details:</b><br>
    <ul>
      <li><b>Student Name:</b> ${student.student_name}</li>
      <li><b>Class:</b> ${student.student_class}</li>
      <li><b>Section:</b> ${student.student_section}</li>
      <li><b>Student ID:</b> ${student.student_id}</li>
      <li><b>Date of Absence:</b> ${new Date().toLocaleDateString()}</li>
    </ul>

    <b>Importance of Regular Attendance</b><br>
    Regular attendance is crucial for the continuity of learning and to help your child stay on track academically. We highly value your partnership in ensuring that they are present and engaged in class each day.<br><br>

    <b>Parental Support and Monitoring</b><br>
    Please ensure you discuss with your child any potential reasons for their absence and inform us if there are any circumstances we should be aware of.<br><br>

    If you need assistance or would like further details, do not hesitate to contact us. We are here to support you and your child’s educational journey.<br><br>

    Thank you for your attention to this matter.<br><br>

    Sincerely,<br><br>
    <b>SM Group of Coaching Centers</b><br>
    <em>Your Partner in Academic Excellence</em><br>
  `;
}
