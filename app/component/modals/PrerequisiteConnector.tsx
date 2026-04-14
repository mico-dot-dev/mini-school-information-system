"use client";

import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

type Props = {
  open: boolean;
  onClose: () => void;
  course: string;
};

function PrerequisiteConnector({ open, onClose, course }: Props) {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    async function fetchSubjects() {
      const res = await fetch(`/api/subject/by-course/${course}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setSubjects(data);
    }
    fetchSubjects();
  }, [course]);

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogBackdrop className="fixed inset-0 bg-black/50" />

      <div className="absolute inset-0 self-center justify-self-center h-11/12 w-1/2">
        <DialogPanel className="bg-white p-6 rounded-xl h-full w-full">
          <DialogTitle className="text-2xl font-bold mb-4">
            Assign Subjects for Prerequisite
          </DialogTitle>

          <p className="mb-4 text-xl">Subjects available for {course}</p>
          <form action="" className="mb-4">
            <fieldset className="flex flex-col gap-5 text-lg">
              {subjects &&
                subjects.map((subject: any) => (
                  <div className="flex">
                    <input
                      type="checkbox"
                      name=""
                      id={subject.code}
                      className="mr-3 "
                    />
                    <label htmlFor={subject.code}>{subject.title}</label>
                  </div>
                ))}
            </fieldset>
          </form>

          <footer className="mt-4 flex justify-center">
            <button
              type="button"
              className="bg-button text-white w-3/4 h-10 rounded-md"
              onClick={onClose}
            >
              Save
            </button>
          </footer>
        </DialogPanel>
      </div>
    </Dialog>
  );
}

export default PrerequisiteConnector;
