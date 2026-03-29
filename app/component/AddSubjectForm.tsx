"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { DegreeLevel } from "@/lib/enum/degreeLevel";
import { SubjectFormModel, SubjectFormSchema } from "@/lib/model/subject";
import { zodResolver } from "@hookform/resolvers/zod";

function AddSubjectForm() {
  const { register, handleSubmit, watch } = useForm<SubjectFormModel>({
    resolver: zodResolver(SubjectFormSchema),
    defaultValues: {
      code: "",
      title: "",
      units: 0,
      degreeLevel: DegreeLevel.Bachelors,
      course: "",
    },
  });

  const [subjects, setSubjects] = useState<SubjectFormModel[]>([]);

  const selectedDegree = watch("degreeLevel");
  console.log(selectedDegree);

  useEffect(() => {
    console.log(selectedDegree);
    if (!selectedDegree) return;

    async function fetchSubjects() {
      //   const res = await fetch(`/api/course/by-degree/${selectedDegree}`, {
      //     method: "GET",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //   });
      //   const data = await res.json();
      //   setSubjects(data);
      console.log("subjects");
    }

    fetchSubjects();
  }, [setSubjects]);

  function createSubject(data: SubjectFormModel) {}

  return (
    <div>
      <header className="text-2xl font-bold mb-10">
        New Subject Information
      </header>

      <form action="" onSubmit={handleSubmit(createSubject)}>
        <div className="text-base flex flex-col gap-5 mb-30">
          <div className="flex flex-col gap-3">
            <label htmlFor="degreeLevel">
              Degree Level <span className="text-redAlert">*</span>
            </label>
            <select
              id="degreeLevel"
              required
              className="h-15 w-1/2 indent-3 border border-inputBorder rounded-xl"
              defaultValue={DegreeLevel.Bachelors}
              {...register("degreeLevel")}
            >
              {Object.values(DegreeLevel).map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-3">
            <label htmlFor="course">
              Course <span className="text-redAlert">*</span>
            </label>
            <select
              id="course"
              required
              className="h-15 w-1/2 indent-3 border border-inputBorder rounded-xl"
              defaultValue=""
              {...register("course")}
            >
              {/* {subjects.map((subject) => (
                <option key={subject.code} value={subject.code}>
                  {subject.title}
                </option>
              ))} */}
            </select>
          </div>

          <div className="flex flex-col gap-3">
            <label htmlFor="courseCode">
              Subject Code <span className="text-redAlert">*</span>
            </label>
            <input
              type="text"
              id="courseCode"
              required
              className="h-15 w-1/2 indent-3 border border-inputBorder rounded-xl"
              {...register("code")}
            />
          </div>

          <div className="flex flex-col gap-3">
            <label htmlFor="title">
              Course Title <span className="text-redAlert">*</span>
            </label>
            <input
              type="text"
              id="title"
              required
              className="h-15 w-1/2 indent-3 border border-inputBorder rounded-xl"
              {...register("title")}
            />
          </div>
        </div>

        <footer className="flex justify-center">
          <button
            type="submit"
            className="bg-button text-white font-bold py-5 w-1/2 rounded-2xl cursor-pointer"
          >
            Add Course
          </button>
        </footer>
      </form>
    </div>
  );
}

export default AddSubjectForm;
