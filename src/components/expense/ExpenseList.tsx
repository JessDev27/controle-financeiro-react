import { useExpenses } from "../../context/useExpenses";

export default function ExpenseList() {
  const { expenses, removeExpense } = useExpenses();

  if (expenses.length === 0) {
    return (
      <div className="bg-white shadow rounded-xl p-6">
        <p className="text-gray-500 text-center">
          Nenhuma despesa cadastrada ainda.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white shadow rounded-xl p-6">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">
        Lista de Despesas
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="p-2 text-sm font-semibold text-gray-600">
                Descrição
              </th>
              <th className="p-2 text-sm font-semibold text-gray-600">
                Categoria
              </th>
              <th className="p-2 text-sm font-semibold text-gray-600">
                Data
              </th>
              <th className="p-2 text-sm font-semibold text-gray-600 text-right">
                Valor
              </th>
              <th className="p-2"></th>
            </tr>
          </thead>

          <tbody>
            {expenses.map((expense) => (
              <tr
                key={expense.id}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="p-2 text-gray-800">
                  {expense.description}
                </td>

                <td className="p-2 text-gray-600">
                  {expense.category}
                </td>

                <td className="p-2 text-gray-600">
                  {expense.date.toLocaleDateString()}
                </td>

                <td className="p-2 text-right font-medium text-red-600">
                  R$ {expense.amount.toFixed(2)}
                </td>

                <td className="p-2 text-right">
                  <button
                    onClick={() => removeExpense(expense.id)}
                    className="text-sm text-red-500 hover:text-red-700"
                  >
                    Remover
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
