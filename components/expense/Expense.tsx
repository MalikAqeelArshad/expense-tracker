import Link from "next/link";
import { LuArrowRight, LuDownload } from "react-icons/lu";
import ExpenseItem from "./ExpenseItem";
import Card from "../Card";

interface IncomeProps {
   title?: string;
   cols?: number;
   download?: boolean;
}

const Expense = ({ title = "Expense", cols = 1, download }: IncomeProps) => {
   return (
      <Card
         title={title}
         header={
            download ? (
               <button className="card-btn">
                  <LuDownload /> Download
               </button>
            ) : (
               <Link href="/expense" className="card-btn">
                  See All <LuArrowRight />
               </Link>
            )
         }
      >
         <div className={`grid grid-cols-1 md:grid-cols-${cols} gap-y-3 gap-x-5`}>
            {Array.from({ length: 5 }).map((_, index) => (
               <ExpenseItem key={index} />
            ))}
         </div>
      </Card>
   );
};

export default Expense;
