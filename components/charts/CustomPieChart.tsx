"use client";
import { useMemo } from "react";
import { Pie, PieChart, ResponsiveContainer, Tooltip, Legend } from "recharts";
import CustomTooltip from "./CustomTooltip";

interface PieChartProps {
   data: { name: string; amount: number; fill?: string }[];
   label?: string;
   name?: string;
   width?: string | number;
   height?: string | number;
}

const CustomPieChart = ({ data, label, name, width = "100%", height = 300 }: PieChartProps) => {
   const totalAmount = useMemo(() => {
      return data?.reduce((acc, curr) => acc + curr.amount, 0);
   }, []);

   const LabelValue = ({ cx, cy }: { cx: number; cy: number }) => {
      return (
         label && (
            <text x={cx} y={cy} dy={-15} textAnchor="middle" dominantBaseline="central">
               <tspan fontSize={14}>{label || "Total Amount"}</tspan>
               <tspan x={cx} dy={35} fontSize={30} fontWeight={700}>
                  {`$${totalAmount.toLocaleString()}`}
               </tspan>
            </text>
         )
      );
   };

   return (
      <ResponsiveContainer width={width} height={height}>
         <PieChart>
            <Pie
               data={data}
               dataKey="amount"
               name={name || "name"}
               innerRadius={100}
               outerRadius={130}
               label={LabelValue}
               labelLine={false}
               cornerRadius={5}
               className="focus:outline-none"
            />

            <Tooltip cursor={false} content={<CustomTooltip />} />
            <Legend iconSize={7} wrapperStyle={{ fontSize: 12, fontWeight: 600 }} />
         </PieChart>
      </ResponsiveContainer>
   );
};

export default CustomPieChart;
