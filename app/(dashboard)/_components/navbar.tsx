"use client";

import { UserButton } from "@clerk/nextjs";
import { Search } from "lucide-react";
import { SearchInput } from "./search-input";
import { OrganizationSwitcher , useOrganization} from "@clerk/nextjs";
import { InviteButton } from "./invite-button";

export const  Navbar = () => {
  const {organization }= useOrganization();
  return (
    <div className="flex items-center gap-x-4 p-5 ">
        <div className="hidden lg:flex lg:flex-1  ">
        <SearchInput />
        </div>
        <div className="block lg:hidden flex-1">
          <OrganizationSwitcher 
  hidePersonal
  appearance={{
    elements: {
      rootBox: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        maxWidth: "367px",
      },
      organizationSwitcherTrigger: { // lowercase key name (important!)
        padding: "6px",
        width: "100%",
        borderRadius: "8px",
        border: "1px solid #E5E7EB",
        justifyContent: "center",
        backgroundColor: "white",
      },
    },
  }}
/>
        </div>
        {organization && (
        <InviteButton />
        )}
        <UserButton />
    </div>
  );
};
