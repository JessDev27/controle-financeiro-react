import Dashboard from "../pages/Dashboard";
import { ExpenseProvider } from "../context/ExpenseProvider";

export default function App() {
  return ( 
  <ExpenseProvider>
  <Dashboard />
  </ExpenseProvider>
   );
}
