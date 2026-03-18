import { useState } from "react";
import type { ReactNode } from "react";
import { expenseService } from "../services/expense.service";
import type { Expense } from "../domain/models/Expense";
import { ExpenseContext } from "./ExpenseContext";

interface ExpenseProviderProps {
  children: ReactNode;
}

export function ExpenseProvider({ children }: ExpenseProviderProps) {
  const [expenses, setExpenses] = useState<Expense[]>(
    expenseService.getAll()
  );

  function addExpense(data: Omit<Expense, "id" | "createdAt">) {
    const newExpense = expenseService.create(data);
    setExpenses((prev) => [...prev, newExpense]);
  }

  function removeExpense(id: string) {
    expenseService.remove(id);
    setExpenses((prev) => prev.filter((e) => e.id !== id));
  }

  return (
    <ExpenseContext.Provider
      value={{ expenses, addExpense, removeExpense }}
    >
      {children}
    </ExpenseContext.Provider>
  );
}
