"use server";

import React from "react";
import Link from "next/link";
import { Page, PagePermissions } from "@/lib/enum/page";
import { has_role_permission } from "@/lib/auth/rbac";
import { Role } from "@/lib/enum/role";
import { GetUserRole } from "@/lib/services/user";

async function SideNav() {
  const userRole = (await GetUserRole()) as Role;

  return (
    <nav className=" flex bg-foreground min-h-full max-h-screen w-1/5">
      <div className=" flex-1 flex-col text-white ml-10 my-10   relative">
        <p className="text-5xl font-bold mb-25">SCHL</p>
        <ol className="text-base flex flex-col gap-10 ">
          {/* Loops through the Page enum and checks the role and permissions to provide the nav link */}
          {Object.values(Page).map((page) => {
            if (!has_role_permission(userRole, PagePermissions[page]))
              return null;
            return (
              <li key={page}>
                <Link href={`/dashboard/${page}`}>{page}</Link>
              </li>
            );
          })}
        </ol>
        <p className="absolute bottom-0">Logout</p>
      </div>
    </nav>
  );
}

export default SideNav;
