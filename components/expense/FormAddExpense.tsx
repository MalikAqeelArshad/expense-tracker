"use client";
import { useState } from "react";
import { TExpense } from "@/types";
import EmojiPickerPopup from "@/components/EmojiPickerPopup";

const initialState: TExpense = {
   icon: "",
   category: "",
   amount: 0,
   date: "",
   description: "",
};
interface FormAddExpenseProps {
   onCancel: (isOpen: boolean) => void;
}

const FormAddExpense = ({ onCancel }: FormAddExpenseProps) => {
   const [expenseData, setExpenseData] = useState(initialState);
   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setExpenseData((prev) => ({ ...prev, [name]: value }));
   };
   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // Handle form submission logic here
      console.log("Expense Data Submitted:", expenseData);
      // setExpenseData(initialState); // Reset the form
      // onCancel(false); // Close the modal
   };

   return (
      <form onSubmit={handleSubmit}>
         <div className="flex flex-col space-y-1.5">
            <EmojiPickerPopup
               icon={expenseData.icon}
               onSelect={(emoji) => setExpenseData((prev) => ({ ...prev, icon: emoji }))}
            />
         </div>
         <div className="flex flex-col space-y-1.5">
            <label htmlFor="category">Expense Category</label>
            <input
               id="category"
               name="category"
               onChange={handleChange}
               placeholder="Category of Expense (eg. Food, Rent, etc.)"
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
               placeholder="Description of the expense category"
            />
         </div>
         <div className="flex items-center justify-end space-x-2">
            <button type="button" className="btn-secondary" onClick={() => onCancel(false)}>
               Cancel
            </button>
            <button type="submit" className="btn-primary">
               Add Expense
            </button>
         </div>
      </form>
   );
};

export default FormAddExpense;
