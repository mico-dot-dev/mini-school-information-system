import React from "react";

function AddStudentForm() {
  return (
    <div>
      <header className="text-2xl font-bold mb-10">
        New Student Information
      </header>

      <form action="">
        <div className="text-base flex flex-col gap-5 mb-30">
          <div className="flex flex-col gap-3">
            <label htmlFor="degreeLevel">
              Degree Level <span className="text-redAlert">*</span>
            </label>
            <select
              id="degreeLevel"
              required
              className="h-15 w-1/2 indent-3 border border-inputBorder rounded-xl"
            >
              <option value="">Bachelor's</option>
              <option value="">Master's</option>
              <option value="">Doctorate</option>
            </select>
          </div>

          <div className="flex flex-col gap-3">
            <label htmlFor="courseName">
              Course <span className="text-redAlert">*</span>
            </label>
            <select
              id="courseName"
              required
              className="h-15 w-1/2 indent-3 border border-inputBorder rounded-xl"
            >
              <option value="">Information Technology</option>
              <option value="">Computer Science</option>
              <option value="">Data Science</option>
            </select>
          </div>

          <div className="flex flex-col gap-3">
            <label htmlFor="firstName">
              First Name <span className="text-redAlert">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              required
              className="h-15 w-1/2 indent-3 border border-inputBorder rounded-xl"
            />
          </div>

          <div className="flex flex-col gap-3">
            <label htmlFor="lastName">
              Last Name <span className="text-redAlert">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              required
              className="h-15 w-1/2 indent-3 border border-inputBorder rounded-xl"
            />
          </div>

          <div className="flex flex-col gap-3">
            <label htmlFor="email">
              Email <span className="text-redAlert">*</span>
            </label>
            <input
              type="email"
              id="email"
              required
              className="h-15 w-1/2 indent-3 border border-inputBorder rounded-xl"
            />
          </div>

          <div className="flex flex-col gap-3">
            <label htmlFor="birthdate">
              Birthdate <span className="text-redAlert">*</span>
            </label>
            <input
              type="date"
              id="birthdate"
              required
              className="h-15 w-1/2 indent-3 border border-inputBorder rounded-xl"
            />
          </div>
        </div>

        <footer className="flex justify-center">
          <button
            type="submit"
            className="bg-button text-white font-bold py-5 w-1/2 rounded-2xl cursor-pointer"
          >
            Add User
          </button>
        </footer>
      </form>
    </div>
  );
}

export default AddStudentForm;
