import Card from "../Card";
import { CustomPieChart } from "../charts";

const chartData = [
   { name: "Salary", amount: 500, fill: "var(--color-green-500)" },
   { name: "Freelance", amount: 300, fill: "var(--color-orange-500)" },
   { name: "Investments", amount: 150, fill: "var(--color-blue-500)" },
   { name: "Savings", amount: 250, fill: "var(--color-purple-500)" },
];

const Last30DaysIncome = () => {
   return (
      <Card title="Last 30 Days Income" headerStyle="justify-center">
         <CustomPieChart data={chartData} label="Total Income" height={350} />
      </Card>
   );
};

export default Last30DaysIncome;
