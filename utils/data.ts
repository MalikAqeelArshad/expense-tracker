import { LuLayoutDashboard, LuWalletMinimal, LuHandCoins, LuLogOut } from "react-icons/lu";

export const SIDE_MENU_ITEMS = [
   {
      icon: LuLayoutDashboard,
      name: "Dashboard",
      path: "/",
   },
   {
      icon: LuWalletMinimal,
      name: "Income",
      path: "/income",
   },
   {
      icon: LuHandCoins,
      name: "Expense",
      path: "/expense",
   },
   {
      icon: LuLogOut,
      name: "Logout",
      path: "javascript:void(0)",
      type: "button",
   },
];

export const CHART_DATA = [
   { month: "January", income: 186, expense: 280, fill: "var(--color-purple-500)" },
   { month: "February", income: 305, expense: 500, fill: "var(--color-purple-300)" },
   { month: "March", income: 237, expense: 320, fill: "var(--color-purple-500)" },
   { month: "April", income: 73, expense: 190, fill: "var(--color-purple-300)" },
   { month: "May", income: 209, expense: 330, fill: "var(--color-purple-500)" },
   { month: "June", income: 314, expense: 140, fill: "var(--color-purple-300)" },
   { month: "July", income: 224, expense: 240, fill: "var(--color-purple-500)" },
   { month: "August", income: 124, expense: 390, fill: "var(--color-purple-300)" },
   { month: "September", income: 210, expense: 210, fill: "var(--color-purple-500)" },
   { month: "October", income: 175, expense: 130, fill: "var(--color-purple-300)" },
   { month: "November", income: 190, expense: 340, fill: "var(--color-purple-500)" },
   { month: "December", income: 150, expense: 110, fill: "var(--color-purple-300)" },
];
