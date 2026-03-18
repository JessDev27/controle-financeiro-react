export const ExpenseCategory = {
  FOOD: "Alimentação",
  TRANSPORT: "Transporte",
  HEALTH: "Saúde",
  EDUCATION: "Educação",
  OTHER: "Outros",
} as const;

export type ExpenseCategory =
  (typeof ExpenseCategory)[keyof typeof ExpenseCategory];
