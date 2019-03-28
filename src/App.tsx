import React, { useContext } from 'react';
import {observer,} from 'mobx-react-lite'
import {toJS} from 'mobx'
import './App.css';
import Expense from './types/Expense'
import RootStoreContext from './stores/RootStore'
const App = observer(() => {
  const RootStore  = useContext(RootStoreContext)
  const date = new Date()
  const testExpense : Expense = {
    cost:12,
    name:'new',
    date,
    category:'sport',
  }
  // ExpensesStore.expenses = [...ExpensesStore.expenses,testExpense]
  // ExpensesStore.expenses.forEach(i => {
  //   console.log(i.cost)
  // })
  return (
  
    <div>App</div>

  )
})

export default App;
