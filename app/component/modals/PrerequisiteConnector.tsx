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

      <div className="fixed inset-0 flex items-center justify-center">
        <DialogPanel className="bg-white p-6 rounded-xl w-96">
          <DialogTitle className="text-lg font-semibold mb-4">
            Assign Subjects for Prerequisite
          </DialogTitle>

          <div>Subjects available for {course}</div>

          {subjects &&
            subjects.map((subject: any) => (
              <div key={subject.code}>{subject.title}</div>
            ))}
        </DialogPanel>
      </div>
    </Dialog>
  );
}

export default PrerequisiteConnector;
