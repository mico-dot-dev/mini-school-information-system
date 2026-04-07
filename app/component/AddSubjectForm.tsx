"use client";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { DegreeLevel } from "@/lib/enum/degreeLevel";
import { SubjectFormModel, SubjectFormSchema } from "@/lib/model/subject";
import { CourseFormModel } from "@/lib/model/course";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";

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

  const [showModal, setShowModal] = useState(false);

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

          <div>
            <button
              className="bg-button text-white w-1/4 h-12 rounded-xl cursor-pointer"
              onClick={() => setShowModal(true)}
            >
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

        <Dialog open={showModal} onClose={setShowModal}>
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-900/50 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
          ></DialogBackdrop>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <DialogPanel
                transition
                className="relative overflow-y-scroll rounded-lg bg-white text-left shadow-xl outline -outline-offset-1 outline-white/10 transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
              >
                <p>Available Subjects to link</p>
              </DialogPanel>
            </div>
          </div>
        </Dialog>
      </form>
    </div>
  );
}

export default AddSubjectForm;
