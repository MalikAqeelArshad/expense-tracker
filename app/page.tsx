import { FinanceOverview, RecentTransactions, Stats } from "@/components/dashboard";
import { Expense, Last30DaysExpense } from "@/components/expense";
import { Income, Last30DaysIncome } from "@/components/income";

const Dashboard = () => {
   return (
      <div className="space-y-4">
         <Stats />
         <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <RecentTransactions />
            <FinanceOverview />
            <Last30DaysExpense />
            <Expense />
            <Income />
            <Last30DaysIncome />
         </div>
      </div>
   );
};

export default Dashboard;
