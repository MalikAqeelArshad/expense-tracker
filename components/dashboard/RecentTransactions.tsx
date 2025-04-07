import Card from "../Card";
import { IncomeItem } from "../income";
import { ExpenseItem } from "../expense";

const RecentTransactions = () => {
   return (
      <Card title="Recent Transactions">
         <IncomeItem />
         <ExpenseItem />
         <IncomeItem />
         <ExpenseItem />
         <IncomeItem />
      </Card>
   );
};

export default RecentTransactions;
