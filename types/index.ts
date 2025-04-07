export interface Finance {
   icon: string;
   amount: number;
   date: string;
   description?: string;
}
export interface TIncome extends Finance {
   source: string;
}
export interface TExpense extends Finance {
   category: string;
}
