import React from "react";
import AddUserForm from "@/app/component/AddUserForm";
import AddCourseForm from "@/app/component/AddCourseForm";
import AddSubjectForm from "@/app/component/AddSubjectForm";
import AddStudentForm from "@/app/component/AddStudentForm";

function page() {
  return (
    <div className="bg-white shadow-lg/30 w-full h-full flex items-center justify-center ">
      <div className=" w-[95%] h-11/12 flex flex-col overflow-y-scroll">
        <AddSubjectForm />
      </div>
    </div>
  );
}

export default page;
