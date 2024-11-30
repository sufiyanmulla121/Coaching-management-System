import { allow, extend } from "joi";
import { Model, Table, DataType, Column, Default } from "sequelize-typescript";

@Table({ tableName: "students" })
export class Student extends Model<Student> {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  student_id!: number;
  @Column({ type: DataType.STRING, allowNull: false })
  student_name!: string;
  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  student_email!: string;
  @Column({ type: DataType.STRING, allowNull: false })
  student_address!: string;
  @Column({ type: DataType.STRING, allowNull: false })
  student_phone!: string;
  @Column({ type: DataType.STRING, allowNull: false })
  student_class!: string;
  @Column({ type: DataType.STRING, allowNull: false })
  student_section!: string;
  @Column({ type: DataType.STRING, allowNull: false })
  student_gender!: string;
  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  parents_name!: string;
  @Column({ type: DataType.STRING, allowNull: false })
  parents_mobile!: string;
  @Column({ type: DataType.STRING, allowNull: false })
  parents_email!: string;
}
  