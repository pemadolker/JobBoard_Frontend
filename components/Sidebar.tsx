import React, { useState } from "react";
import Link from "next/link";
import {
  HomeIcon,
  UserIcon,
  BriefcaseIcon,
  SearchIcon,
  CogIcon,
  LogOutIcon,
} from "lucide-react";

const Sidebar = () => {
  const [isHovered, setIsHovered] = useState(false);

  const navItems = [
    { href: "/", icon: <HomeIcon />, label: "Home" },
    { href: "/employer/viewapplicants", icon: <UserIcon />, label: "View Applicants" },
    { href: "/employer/postjob", icon: <BriefcaseIcon />, label: "Post a Job" },
    { href: "/search-job", icon: <SearchIcon />, label: "Search Job" },
    { href: "/account-settings", icon: <CogIcon />, label: "Account Settings" },
  ];

  return (
    <div
      className={`h-screen flex flex-col py-4 shadow-lg transition-[width] duration-300 ease-in-out ${
        isHovered ? "w-48" : "w-16"
      } bg-gradient-to-b from-blue-600 to-teal-500`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {navItems.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className="group flex items-center gap-4 w-full px-4 py-2 mb-2 rounded-lg hover:bg-teal-400 transition-colors duration-200"
        >
          <span className="text-white text-xl">{item.icon}</span>
          <span
            className={`text-white text-sm font-medium whitespace-nowrap transition-all duration-300 ease-in-out ${
              isHovered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
            }`}
          >
            {item.label}
          </span>
        </Link>
      ))}
      <div className="flex-grow"></div>
      <Link
        href="/logout"
        className="group flex items-center gap-4 w-full px-4 py-2 rounded-lg hover:bg-teal-400 transition-colors duration-200"
      >
        <span className="text-white text-xl">
          <LogOutIcon />
        </span>
        <span
          className={`text-white text-sm font-medium whitespace-nowrap transition-all duration-300 ease-in-out ${
            isHovered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
          }`}
        >
          Logout
        </span>
      </Link>
    </div>
  );
};

export default Sidebar;
