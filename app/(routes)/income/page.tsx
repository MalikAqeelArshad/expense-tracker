"use client";
import { useState } from "react";
import { LuPlus } from "react-icons/lu";
import Card from "@/components/Card";
import Modal from "@/components/Modal";
import { CustomBarChart } from "@/components/charts";
import { FormAddIncome, Income } from "@/components/income";

const Incomes = () => {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <div className="space-y-4">
         <Card
            header={
               <div className="flex items-start justify-between w-full">
                  <div className="space-y-1 pb-5">
                     <h2 className="font-semibold lg:text-lg">Income Overview</h2>
                     <p className="text-xs text-gray-500">
                        Track your earnings over time and analyze your income trends.
                     </p>
                  </div>
                  <button onClick={() => setIsOpen(true)} className="add-btn">
                     <LuPlus className="text-[15px]" /> ADD INCOME
                  </button>
               </div>
            }
         >
            <CustomBarChart name="income" />
         </Card>

         <Income cols={2} download />

         <Modal
            title="Add Income"
            subTitle="Please fill in the details below to add a new income source."
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
         >
            <FormAddIncome onCancel={setIsOpen} />
         </Modal>
      </div>
   );
};

export default Incomes;
