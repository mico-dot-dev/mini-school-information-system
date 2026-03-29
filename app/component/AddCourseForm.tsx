"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { CourseFormModel, CourseFormSchema } from "@/lib/model/course";
import { zodResolver } from "@hookform/resolvers/zod";
import { DegreeLevel } from "@/lib/enum/degreeLevel";

function AddCourseForm() {
  const { register, handleSubmit } = useForm<CourseFormModel>({
    resolver: zodResolver(CourseFormSchema),
    defaultValues: {
      code: "",
      degreeLevel: DegreeLevel.Bachelors,
      name: "",
      description: "",
    },
  });

  async function createCourse(data: CourseFormModel) {
    try {
      const res = await fetch("/api/course", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.log("error in form:" + error);
    }
  }

  return (
    <div>
      <header className="text-2xl font-bold mb-10">
        New Course Information
      </header>
      <form action="" onSubmit={handleSubmit(createCourse)}>
        <div className="text-base flex flex-col gap-5 mb-30">
          <div className="flex flex-col gap-3">
            <label htmlFor="courseCode">
              Course Code <span className="text-redAlert">*</span>
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
            <label htmlFor="courseName">
              Course Name <span className="text-redAlert">*</span>
            </label>
            <input
              type="text"
              id="courseName"
              required
              className="h-15 w-1/2 indent-3 border border-inputBorder rounded-xl"
              {...register("name")}
            />
          </div>

          <div className="flex flex-col gap-3">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              className="h-30 w-full indent-3 border border-inputBorder rounded-xl"
              {...register("description")}
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

export default AddCourseForm;
