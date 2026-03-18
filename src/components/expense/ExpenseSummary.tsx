import { useExpenses } from "../../context/useExpenses"

export default function ExpenseSummary() {
  const { expenses } = useExpenses();

  const total = expenses.reduce((acc, expense) => acc + expense.amount, 0);

  return (
    <div className="bg-white shadow rounded-xl p-6 mb-6">
      <h2 className="text-lg font-semibold text-gray-700 mb-2">
        Total de Despesas
      </h2>
      <p className="text-3xl font-bold text-red-600">R$ {total.toFixed(2)}</p>
    </div>
  );
}
