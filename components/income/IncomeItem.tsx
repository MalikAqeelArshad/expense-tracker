"use client";
import { getRandomIncome } from "@/utils/helpers";
import { LuTrendingUp, LuUtensils } from "react-icons/lu";

const IncomeItem = () => {
   return (
      <div className="transaction">
         <div className="flex items-center gap-4">
            <span className="transaction-icon">
               <LuUtensils />
            </span>

            <div className="text-sm space-y-0.5">
               <p className="font-medium text-gray-700">{getRandomIncome()}</p>
               <span className="text-xs text-gray-400">17th Mar 2025</span>
            </div>
         </div>

         <div className="trending-box income">
            <span className="text-xs font-medium">$67.81</span>
            <LuTrendingUp />
         </div>
      </div>
   );
};

export default IncomeItem;
