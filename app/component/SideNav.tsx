import Link from "next/link";
import React from "react";

function SideNav() {
  const pages: Set<string> = new Set([
    "Students",
    "Courses",
    "Subjects",
    "Users",
  ]);
  return (
    <nav className=" flex bg-foreground min-h-full max-h-screen w-1/5">
      <div className=" flex-1 flex-col text-white ml-10 my-10   relative">
        <p className="text-5xl font-bold mb-25">SCHL</p>
        <ol className="text-base flex flex-col gap-10 ">
          {Array.from(pages).map((page) => (
            <li key={page}>
              <Link href={`/dashboard/${page}`}>{page}</Link>
            </li>
          ))}
        </ol>
        <p className="absolute bottom-0">Logout</p>
      </div>
    </nav>
  );
}

export default SideNav;
