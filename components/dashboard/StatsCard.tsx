interface StatsCardProps {
   icon: React.ReactNode;
   label: string;
   amount: number | string;
   color: string;
}

const StatsCard = ({ icon, label, amount, color }: StatsCardProps) => {
   return (
      <div className="flex items-center gap-4 card">
         <span className={`p-4 rounded-full text-white text-2xl ${color}`}>{icon}</span>

         <div className="space-y-1">
            <p className="text-xs text-gray-500">{label}</p>
            <p className="text-xl font-semibold text-gray-900">{amount}</p>
         </div>
      </div>
   );
};

export default StatsCard;
