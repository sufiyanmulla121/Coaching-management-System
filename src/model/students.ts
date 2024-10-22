import { Model, Table, Column, DataType, Default } from "sequelize-typescript";

@Table({ tableName: "students" })
class Student extends Model<Student> {
  @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4 })
  student_id!: string;
  @Column({ type: DataType.STRING })
  student_name!: string;
  @Column({ type: DataType.STRING })
  student_email!: string;
  @Column({ type: DataType.STRING })
  student_phone!: string;
  @Column({ type: DataType.STRING })
  student_address!: string;
  @Column({ type: DataType.STRING })
  student_class!: string;
  @Column({ type: DataType.STRING })
  student_section!: string;
  @Column({ type: DataType.STRING })
  student_DOB!: string;
  @Column({ type: DataType.STRING })
  student_gender!: string;
  @Column({ type: DataType.STRING })
  student_parent_name!: string;
  @Column({ type: DataType.STRING })
  student_parent_phone!: string;
  @Column({ type: DataType.STRING })
  student_parent_email!: string;
  @Default(new Date())
  @Column(DataType.DATE)
  createdAt!: Date;
  @Default(new Date())
  @Column(DataType.DATE)
  updatedAt!: Date;
}

export default Student;
