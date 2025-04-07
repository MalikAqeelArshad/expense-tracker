import StatsCard from "./StatsCard";
import { IoMdCard } from "react-icons/io";
import { LuHandCoins, LuWalletMinimal } from "react-icons/lu";

const Stats = () => {
   return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
         {Array.from({ length: 3 }).map((_, index) => (
            <StatsCard
               key={index}
               icon={
                  index === 0 ? <IoMdCard /> : index === 1 ? <LuWalletMinimal /> : <LuHandCoins />
               }
               color={index === 0 ? "bg-purple-500" : index === 1 ? "bg-orange-500" : "bg-red-500"}
               label={
                  index === 0 ? "Total Balance" : index === 1 ? "Total Income" : "Total Expense"
               }
               amount={index === 0 ? "$2,500" : index === 1 ? "$1,200" : "$1,300"}
            />
         ))}
      </div>
   );
};

export default Stats;
