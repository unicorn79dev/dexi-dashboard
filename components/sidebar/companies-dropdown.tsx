"use client";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from "@nextui-org/react";
import React, { useState } from "react";
import { DexifierIcon } from "../icons/dexifier-icon";

interface Company {
  name: string;
  location: string;
  logo: React.ReactNode;
}

export const CompaniesDropdown = () => {
  const [company, setCompany] = useState<Company>({
    name: "Dexifier",
    location: "",
    logo: <DexifierIcon />,
  });
  return (
    <div className="flex items-center gap-2">
      {company.logo}
      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-medium m-0 text-default-900 -mb-4 whitespace-nowrap">
          {company.name}
        </h3>
        <span className="text-xs font-medium text-default-500">
          {company.location}
        </span>
      </div>
    </div>
  );
};
