import { CustomPieChart } from "../charts";
import Card from "../Card";

const chartData = [
   { name: "Total Balance", amount: 287, fill: "var(--color-purple-500)" },
   { name: "Total Income", amount: 275, fill: "var(--color-orange-500)" },
   { name: "Total Expense", amount: 200, fill: "var(--color-red-500)" },
];

const FinanceOverview = () => {
   return (
      <Card title="Finance Overview" headerStyle="justify-center">
         <CustomPieChart data={chartData} label="Total Amount" height={320} />
      </Card>
   );
};

export default FinanceOverview;
