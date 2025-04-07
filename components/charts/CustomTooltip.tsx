import { TooltipProps } from "recharts";

const CustomTooltip = ({ active, payload }: TooltipProps<number, string>) => {
   if (active && payload && payload.length) {
      return (
         <div className="px-3 py-2 rounded-lg shadow bg-white shadow-gray-100 border border-gray-100">
            <p className="text-sm font-medium text-gray-600 capitalize">{payload[0].name}</p>
            <p className="text-xs">{`Amount: $${payload[0].value}`}</p>
         </div>
      );
   }
   return null;
};

export default CustomTooltip;
