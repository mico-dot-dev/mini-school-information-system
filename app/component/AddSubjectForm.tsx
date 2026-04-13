"use client";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { DegreeLevel } from "@/lib/enum/degreeLevel";
import { SubjectFormModel, SubjectFormSchema } from "@/lib/model/subject";
import { CourseFormModel } from "@/lib/model/course";
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

  const selectedDegree = watch("degreeLevel");
  const [courses, setCourses] = useState<CourseFormModel[]>([]);

  useEffect(() => {
    if (!selectedDegree) return;

    async function fetchCourses() {
      const res = await fetch(`/api/course/by-degree/${selectedDegree}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => setCourses(data.data))
        .catch((err) => console.error(err));
    }

    fetchCourses();
  }, [selectedDegree]);

  async function createSubject(data: SubjectFormModel) {
    try {
      if (data.course === "") {
        alert("Please select a course");
        return;
      }
      console.log("data from form:", data);
      const res = await fetch("/api/subject", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } catch (error) {}
  }

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
              {...register("course")}
            >
              <option value="" disabled>
                Select a course
              </option>
              {courses.map((course) => (
                <option key={course.code} value={course.code}>
                  {course.name}
                </option>
              ))}
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
              Subject Title <span className="text-redAlert">*</span>
            </label>
            <input
              type="text"
              id="title"
              required
              className="h-15 w-1/2 indent-3 border border-inputBorder rounded-xl"
              {...register("title")}
            />
          </div>

          <div className="flex flex-col gap-3">
            <label htmlFor="units">
              Subject Units <span className="text-redAlert">*</span>
            </label>
            <input
              type="number"
              id="units"
              required
              className="h-15 w-1/2 indent-3 border border-inputBorder rounded-xl"
              {...register("units")}
            />
          </div>

          <div>
            <button className="bg-button text-white w-1/4 h-12 rounded-xl cursor-pointer">
              Add Prerequisite
            </button>
          </div>
        </div>

        <footer className="flex justify-center">
          <button
            type="submit"
            className="bg-button text-white font-bold py-5 w-1/2 rounded-2xl cursor-pointer"
          >
            Add Subject
          </button>
        </footer>
      </form>
    </div>
  );
}

export default AddSubjectForm;
