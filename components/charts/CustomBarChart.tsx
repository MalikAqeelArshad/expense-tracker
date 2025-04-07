"use client";
import {
   Bar,
   BarChart,
   CartesianGrid,
   XAxis,
   YAxis,
   Tooltip,
   Legend,
   ResponsiveContainer,
} from "recharts";
import CustomTooltip from "./CustomTooltip";
import { CHART_DATA } from "@/utils/data";

interface BarChartProps {
   name?: string;
   width?: string | number;
   height?: string | number;
}

const CustomBarChart = ({ name, width = "100%", height = 300 }: BarChartProps) => {
   return (
      <ResponsiveContainer width={width} height={height}>
         <BarChart data={CHART_DATA}>
            <CartesianGrid stroke="none" />
            <XAxis
               dataKey="month"
               axisLine={false}
               tickLine={false}
               tick={{ fontSize: 12 }}
               tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
            <Bar
               dataKey={name || "name"}
               radius={5}
               fill="var(--color-purple-500)"
               activeBar={{ fill: "var(--color-purple-700)" }} // darker shade on hover
            />
            {/* <Bar dataKey="mobile" radius={5} fill="var(--color-purple-300)" /> */}
            <Tooltip content={<CustomTooltip />} cursor={{ opacity: 0.3, radius: 5 }} />
            {/* <Legend iconSize={7} iconType="circle" /> */}
         </BarChart>
      </ResponsiveContainer>
   );
};

export default CustomBarChart;
