import { ExpenseCategory } from "../enums/ExpenseCategory";

export interface Expense {
  id: string;
  description: string;
  amount: number;
  category: ExpenseCategory;
  date: Date;
  createdAt: Date;
}
