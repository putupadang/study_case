import React, { useEffect } from "react";
import TableStudent from "src/components/tables/tableStudent";
import { fetcher } from "src/helper/utils";
import useStudents from "src/zustand/students";

const Students = () => {
  const setStudentList = useStudents((state) => state.setStudentList);

  const fetchStudents = async () => {
    const result = await fetcher("get", "/student");
    if (result.status == "success") {
      setStudentList(result.data);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <>
      <div className="w-full">
        <p className="text-2xl">Student Page</p>
        <div className="mt-10">
          {/* <div className="w-full flex justify-end">
            <button className="px-7 py-2 bg-slate-500 cursor-pointer text-white hover:bg-slate-600 rounded-md">Student</button>
          </div> */}
          <TableStudent />
        </div>
      </div>
    </>
  );
};

export default Students;
