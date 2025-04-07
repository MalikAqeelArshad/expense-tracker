import { CustomBarChart } from "../charts";
import Card from "../Card";

const Last30DaysExpense = () => {
   return (
      <Card title="Last 30 Days Expense" headerStyle="justify-center">
         <CustomBarChart name="expense" height={370} />
      </Card>
   );
};

export default Last30DaysExpense;
