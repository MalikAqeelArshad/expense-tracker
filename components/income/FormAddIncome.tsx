"use client";
import { useState } from "react";
import { TIncome } from "@/types";
import EmojiPickerPopup from "@/components/EmojiPickerPopup";

const initialState: TIncome = {
   icon: "",
   source: "",
   amount: 0,
   date: "",
   description: "",
};
interface FormAddIncomeProps {
   onCancel: (isOpen: boolean) => void;
}

const FormAddIncome = ({ onCancel }: FormAddIncomeProps) => {
   const [incomeData, setIncomeData] = useState(initialState);
   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setIncomeData((prev) => ({ ...prev, [name]: value }));
   };
   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // Handle form submission logic here
      console.log("Income Data Submitted:", incomeData);
      // setIncomeData(initialState); // Reset the form
      // onCancel(false); // Close the modal
   };

   return (
      <form onSubmit={handleSubmit}>
         <div className="flex flex-col space-y-1.5">
            <EmojiPickerPopup
               icon={incomeData.icon}
               onSelect={(emoji) => setIncomeData((prev) => ({ ...prev, icon: emoji }))}
            />
         </div>
         <div className="flex flex-col space-y-1.5">
            <label htmlFor="source">Income Source</label>
            <input
               id="source"
               name="source"
               onChange={handleChange}
               placeholder="Source of Income (e.g., Salary, Freelance)"
               required
            />
         </div>
         <div className="flex flex-col space-y-1.5">
            <label htmlFor="amount">Amount</label>
            <input
               id="amount"
               type="number"
               name="amount"
               onChange={handleChange}
               placeholder="0.0"
               min={0}
               required
            />
         </div>
         <div className="flex flex-col space-y-1.5">
            <label htmlFor="date">Date</label>
            <input
               id="date"
               type="date"
               name="date"
               onChange={handleChange}
               placeholder="dd/mm/yyyy"
               required
            />
         </div>
         <div className="flex flex-col space-y-1.5">
            <label htmlFor="description">Description</label>
            <textarea
               id="description"
               name="description"
               onChange={handleChange}
               placeholder="Description of the income source"
            />
         </div>
         <div className="flex items-center justify-end space-x-2">
            <button type="button" className="btn-secondary" onClick={() => onCancel(false)}>
               Cancel
            </button>
            <button type="submit" className="btn-primary">
               Add Income
            </button>
         </div>
      </form>
   );
};

export default FormAddIncome;
