import { useContext } from "react";
import { ExpenseContext } from "./ExpenseContext";

export function useExpenses() {
  return useContext(ExpenseContext);
}
