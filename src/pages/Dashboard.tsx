import ExpenseSummary from "../components/expense/ExpenseSummary";
import ExpenseForm from "../components/expense/ExpenseForm";
import ExpenseList from "../components/expense/ExpenseList";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow p-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Controle Financeiro
        </h1>
      </header>

      <main className="p-6">
        <div className="max-w-4xl mx-auto">
          <ExpenseSummary />
          <ExpenseForm />
          <ExpenseList />
        </div>
      </main>
    </div>
  );
}
