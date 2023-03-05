import Comments from "./comment";
import Users from "./user";
import Student from "./student";
import Class from "./class";
import StudentSubject from "./studentsubject";
import Subject from "./subject";

//user has many comments
Users.hasMany(Comments, {
  sourceKey: "id",
  foreignKey: "userId",
  as: "comments",
});

//comment belongs to user
Comments.belongsTo(Users, {
  sourceKey: "id",
  foreignKey: "userId",
  as: "user",
});

//student belongs to class
Student.belongsTo(Class, {
  sourceKey: "id",
  foreignKey: "classId",
  as: "class",
});

//class has many students
Class.hasMany(Student, {
  sourceKey: "id",
  foreignKey: "classId",
  as: "students",
});

//student has many studentsubject
Student.hasMany(StudentSubject, {
  sourceKey: "id",
  foreignKey: "studentId",
  as: "studentsubjects",
});

//studentsubject belongs to student
StudentSubject.belongsTo(Student, {
  sourceKey: "id",
  foreignKey: "studentId",
  as: "student",
});

//subject has many studentsubject
Subject.hasMany(StudentSubject, {
  sourceKey: "id",
  foreignKey: "subjectId",
  as: "subjectstudents",
});

//studentsubject belongs to subject
StudentSubject.belongsTo(Subject, {
  sourceKey: "id",
  foreignKey: "subjectId",
  as: "subject",
});

export { Comments, Users, Student, Class, StudentSubject, Subject };
