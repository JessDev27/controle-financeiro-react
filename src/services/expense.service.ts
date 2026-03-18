import type { Expense } from "../domain/models/Expense";

const STORAGE_KEY = "expenses";

function loadFromStorage(): Expense[] {
  const data = localStorage.getItem(STORAGE_KEY);

  if (!data) return [];

  const parsed: Expense[] = JSON.parse(data);

  // Converter strings de data de volta para Date
  return parsed.map((expense) => ({
    ...expense,
    date: new Date(expense.date),
    createdAt: new Date(expense.createdAt)
  }));
}

function saveToStorage(expenses: Expense[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(expenses));
}

export const expenseService = {
  getAll(): Expense[] {
    return loadFromStorage();
  },

  create(data: Omit<Expense, "id" | "createdAt">): Expense {
    const expenses = loadFromStorage();

    const newExpense: Expense = {
      ...data,
      id: crypto.randomUUID(),
      createdAt: new Date()
    };

    const updatedExpenses = [...expenses, newExpense];

    saveToStorage(updatedExpenses);

    return newExpense;
  },

  remove(id: string): void {
    const expenses = loadFromStorage();

    const updatedExpenses = expenses.filter(
      (expense) => expense.id !== id
    );

    saveToStorage(updatedExpenses);
  }
};
