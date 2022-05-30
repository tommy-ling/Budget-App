import Header from './Header';
import ExpenseList from './ExpenseList';
import AddExpense from './AddExpense';
import { AppProvider } from '../context/app.context';
import '../style/BudgetApp.css'

function BudgetApp() {
  return (
    <div className='BudgetApp-container'>
      <AppProvider>
        <Header />
        <ExpenseList />
        <AddExpense />
      </AppProvider>
    </div>
  );
}

export default BudgetApp;
