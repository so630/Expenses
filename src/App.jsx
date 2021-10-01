import ExpenseItem from './components/ExpenseItem';
import './App.css'
import ExpenseForm from './components/AddExpenseItem';
import React from 'react';
import FilterExpenses from './components/FilterExpenses';
import ExpensesChart from './components/ExpensesChart';

const expensesGlobal = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

function App() {
    let [expenses, updateExpenses] = React.useState(expensesGlobal);

    function addExpense(expense) {
      updateExpenses(prev => {
        if (!expense.date) {
          return prev;
        }
        expensesGlobal.push(expense);
        console.log(expensesGlobal);
        console.log(prev)
        return [...prev];
      })
    }

    function filter(year) {
      if (year === "all") {
        updateExpenses(() => {
          return expensesGlobal
        })
      } else {
        updateExpenses(prev => {
          return expensesGlobal.filter((expense) => {
            console.log(expense.date.getFullYear() == year);
            return expense.date.getFullYear() == year;
          })
        })
      }
    }

    function createExpenseItem(expense) {
      return (
          <ExpenseItem
              title={expense.title}
              price={`$${expense.amount}`}
              date={expense.date}
              key={expense.id}
          />
      )
    }

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>Expenses</h1>
            <ExpenseForm add={addExpense}/>         
            <div className="expenses">
              <FilterExpenses filter={filter} />
              <ExpensesChart expenses={expenses} />
              {expenses.length === 0 ? <h2 style={{textAlign: 'center', color: 'white'}} >Found no expenses.</h2> :  expenses.map(createExpenseItem)}
            </div>
        </div>
    )
}

export default App;