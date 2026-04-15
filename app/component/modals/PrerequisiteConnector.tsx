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
  selectedPrerequisites: (id: string[]) => void;
};

function PrerequisiteConnector({
  open,
  onClose,
  course,
  selectedPrerequisites,
}: Props) {
  const [subjects, setSubjects] = useState([]);
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);

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

  function handleConfirm() {
    selectedPrerequisites(selectedSubjects);
    onClose();
  }

  function toggleSelect(id: string) {
    setSelectedSubjects((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  }

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
                  <div key={subject.code} className="flex">
                    <input
                      type="checkbox"
                      name=""
                      id={subject.code}
                      className="mr-3 "
                      onClick={() => toggleSelect(subject.id)}
                    />
                    <label htmlFor={subject.code}>{subject.title}</label>
                  </div>
                ))}
            </fieldset>
          </form>

          <footer className="mt-4 flex justify-center">
            <button
              type="button"
              className="bg-button text-white w-3/4 h-10 rounded-md cursor-pointer"
              onClick={handleConfirm}
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
