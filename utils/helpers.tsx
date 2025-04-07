"use client";
import { useEffect, useState } from "react";

export const getRandomIncome = () => {
   const [randomIncome, setRandomIncome] = useState("");
   const incomes = ["Salary", "Freelance", "Investments", "Savings", "Gifts"];
   const income = incomes[Math.floor(Math.random() * incomes.length)];
   useEffect(() => setRandomIncome(income), []);
   return randomIncome;
};

export const getRandomExpense = () => {
   const [randomExpense, setRandomExpense] = useState("");
   const expenses = ["Food", "Shopping", "Grocery", "Entertainment", "Travel"];
   const expense = expenses[Math.floor(Math.random() * expenses.length)];
   useEffect(() => setRandomExpense(expense), []);
   return randomExpense;
};
