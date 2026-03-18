import { createContext } from "react";
import type { Expense } from "../domain/models/Expense";

export interface ExpenseContextData {
  expenses: Expense[];
  addExpense: (data: Omit<Expense, "id" | "createdAt">) => void;
  removeExpense: (id: string) => void;
}

export const ExpenseContext = createContext<ExpenseContextData>(
  {} as ExpenseContextData
);
