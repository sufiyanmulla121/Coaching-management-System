import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { Student } from "./students"; // Assuming the Student model is defined in this file


@Table({ tableName: "attendance" })
export class Attendance extends Model<Attendance> {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  attendance_id!: number;

  @ForeignKey(() => Student)
  @Column({ type: DataType.INTEGER, allowNull: false })
  student_id!: number;

  @BelongsTo(() => Student)
  student!: Student;

  @Column({
    type: DataType.ENUM("Present", "Absent"),
    allowNull: false,
  })
  attendance_status!: string;

  @Column({ type: DataType.DATEONLY, allowNull: false })
  attendance_date!: Date;
}
