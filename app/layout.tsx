import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const poppins = Poppins({
   display: "swap",
   subsets: ["latin"],
   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
   title: "Expense Tracker",
   description: "A simple expense tracker app",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body className={`${poppins.className} antialiased`}>
            <Navbar />

            <div className="flex">
               <aside className="sidebar">
                  <Sidebar />
               </aside>
               <main className="w-full p-5">{children}</main>
            </div>

            <div className="toaster">{/* <Toaster /> */}</div>
         </body>
      </html>
   );
}
