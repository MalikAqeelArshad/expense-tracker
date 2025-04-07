"use client";
import { useState } from "react";
import { LuPlus } from "react-icons/lu";
import Card from "@/components/Card";
import Modal from "@/components/Modal";
import { CustomAreaChart } from "@/components/charts";
import { FormAddExpense, Expense } from "@/components/expense";

const Expenses = () => {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <div className="space-y-4">
         <Card
            header={
               <div className="flex items-start justify-between w-full">
                  <div className="space-y-1 pb-5">
                     <h2 className="font-semibold lg:text-lg">Expense Overview</h2>
                     <p className="text-xs text-gray-500">
                        Track your spending over time and analyze your expense trends.
                     </p>
                  </div>
                  <button onClick={() => setIsOpen(true)} className="add-btn">
                     <LuPlus className="text-[15px]" /> ADD EXPENSE
                  </button>
               </div>
            }
         >
            <CustomAreaChart name="expense" />
         </Card>

         <Expense cols={2} download />

         <Modal
            title="Add Expense"
            subTitle="Please fill in the details below to add a new expense source."
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
         >
            <FormAddExpense onCancel={setIsOpen} />
         </Modal>
      </div>
   );
};

export default Expenses;
