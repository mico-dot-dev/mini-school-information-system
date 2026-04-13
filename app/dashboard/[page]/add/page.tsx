import React from "react";
import AddUserForm from "@/app/component/(addforms)/AddUserForm";
import AddCourseForm from "@/app/component/(addforms)/AddCourseForm";
import AddSubjectForm from "@/app/component/(addforms)/AddSubjectForm";
import AddStudentForm from "@/app/component/(addforms)/AddStudentForm";

async function page({ params }: { params: Promise<{ page: string }> }) {
  const { page } = await params;
  return (
    <div className="bg-white shadow-lg/30 w-full h-full flex items-center justify-center">
      <div className=" w-[95%] h-11/12 flex flex-col overflow-y-scroll">
        {page === "Students" && <AddStudentForm />}
        {page === "Users" && <AddUserForm />}
        {page === "Courses" && <AddCourseForm />}
        {page === "Subjects" && <AddSubjectForm />}
      </div>
    </div>
  );
}

export default page;
