"use client";
import { useEffect, useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";

const Navbar = () => {
   const [sidebar, setSidebar] = useState(false);
   const toggleSidebar = () => setSidebar((prev) => !prev);

   useEffect(() => {
      const sidebarEl = document.querySelector(".sidebar");
      const clickOutside = (e: MouseEvent) =>
         sidebar && !sidebarEl?.contains(e.target as Node) && setSidebar(false);
      const resize = () => innerWidth >= 960 && setSidebar(false);

      addEventListener("mousedown", clickOutside);
      addEventListener("resize", resize);
      sidebarEl?.classList.toggle("show", sidebar);

      return () => {
         removeEventListener("mousedown", clickOutside);
         removeEventListener("resize", resize);
      };
   }, [sidebar]);

   return (
      <header className="flex items-center bg-white shadow shadow-gray-100 sticky top-0 z-[99999] h-16 p-5">
         <div className="flex items-center gap-4">
            <button
               onClick={toggleSidebar}
               type="button"
               className="lg:hidden inline-block text-lg cursor-pointer focus:outline-none"
            >
               {sidebar ? <LuX /> : <LuMenu />}
            </button>
            <h1 className="sm:text-lg md:text-xl font-semibold">Expense Tracker</h1>
         </div>
      </header>
   );
};

export default Navbar;
