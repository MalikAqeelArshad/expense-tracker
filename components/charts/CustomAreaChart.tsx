"use client";
import {
   Area,
   AreaChart,
   CartesianGrid,
   XAxis,
   YAxis,
   Tooltip,
   ResponsiveContainer,
} from "recharts";
import CustomTooltip from "./CustomTooltip";
import { CHART_DATA } from "@/utils/data";

interface AreaChartProps {
   name: string;
   width?: string | number;
   height?: string | number;
}

const CustomAreaChart = ({ name, width = "100%", height = 300 }: AreaChartProps) => {
   return (
      <ResponsiveContainer width={width} height={height}>
         <AreaChart data={CHART_DATA}>
            <defs>
               <linearGradient id="incomeGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--color-purple-500)" stopOpacity={0.7} />
                  <stop offset="95%" stopColor="var(--color-purple-500)" stopOpacity={0} />
               </linearGradient>
            </defs>
            <CartesianGrid stroke="none" />
            <XAxis
               dataKey="month"
               axisLine={false}
               tickLine={false}
               tick={{ fontSize: 12 }}
               tickMargin={8}
               tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
            <Area
               dataKey={name}
               type="natural"
               stroke="var(--color-purple-500)"
               strokeWidth={3}
               fillOpacity={0.8}
               dot={{ fill: "var(--color-purple-500)", r: 3 }}
               fill="url(#incomeGradient)"
            />
            <Tooltip content={<CustomTooltip />} cursor={false} />
            {/* <Tooltip content={<CustomTooltip />} cursor={{ opacity: 0.3, radius: 5 }} /> */}
            {/* <Legend iconSize={7} iconType="circle" /> */}
         </AreaChart>
      </ResponsiveContainer>
   );
};

export default CustomAreaChart;
