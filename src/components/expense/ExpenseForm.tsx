import { useState } from "react";
import { useExpenses } from "../../context/useExpenses"
import { ExpenseCategory } from "../../domain/enums/ExpenseCategory";

export default function ExpenseForm() {
  const { addExpense } = useExpenses();

  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState<ExpenseCategory>(
    ExpenseCategory.OTHER
  );
  const [date, setDate] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!description || !amount || !date) return;

    addExpense({
      description,
      amount: Number(amount),
      category,
      date: new Date(date)
    });

    // limpar formulário
    setDescription("");
    setAmount("");
    setCategory(ExpenseCategory.OTHER);
    setDate("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow rounded-xl p-6 mb-6"
    >
      <h2 className="text-lg font-semibold text-gray-700 mb-4">
        Nova Despesa
      </h2>

      <div className="grid gap-4 md:grid-cols-2">
        <input
          type="text"
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border rounded-lg p-2"
        />

        <input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border rounded-lg p-2"
        />

        <select
          value={category}
          onChange={(e) =>
            setCategory(e.target.value as ExpenseCategory)
          }
          className="border rounded-lg p-2"
        >
          {Object.values(ExpenseCategory).map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border rounded-lg p-2"
        />
      </div>

      <button
        type="submit"
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Adicionar
      </button>
    </form>
  );
}
