import { create } from "zustand";

const useStudents = create((set) => ({
  studentList: [],
  setStudentList: (value) => set({ studentList: value }),
}));

export default useStudents;
