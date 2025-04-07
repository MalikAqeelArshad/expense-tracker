"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SIDE_MENU_ITEMS } from "@/utils/data";
import Image from "next/image";

const Sidebar = () => {
   const pathname = usePathname();
   const activeLink = (url: string) => `sidebar-link ${pathname === url && "active"}`;

   return (
      <>
         <div className="flex flex-col items-center mt-6">
            <Image
               alt="avatar"
               src="avatar.jpg"
               width={96}
               height={96}
               className="object-cover size-24 rounded-full border-5 border-purple-100"
            />
            <h4 className="mt-2 font-medium text-gray-800 dark:text-gray-200">Aqeel Malik</h4>
            <a
               href="mailto:malik.aqeelarshad@gmail.com"
               className="hidden lg:inline-block mt-1 line-clamp-1 w-full text-sm font-medium text-gray-600 dark:text-gray-400"
            >
               malik.aqeelarshad@gmail.com
            </a>
         </div>

         <nav className="flex flex-col justify-between flex-1 mt-6">
            {SIDE_MENU_ITEMS.map((item, i) =>
               item.type && item.type === "button" ? (
                  <button className="sidebar-link w-full cursor-pointer" type="button" key={i}>
                     <item.icon className="text-xl" />
                     <span className="font-medium mx-4">{item.name}</span>
                  </button>
               ) : (
                  // If the item is not a button, render it as a link
                  <Link className={activeLink(item.path)} href={item.path} key={i}>
                     <item.icon className="text-xl" />
                     <span className="font-medium mx-4">{item.name}</span>
                  </Link>
               )
            )}
         </nav>
      </>
   );
};

export default Sidebar;
