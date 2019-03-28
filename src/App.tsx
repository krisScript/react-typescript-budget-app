import React, { useContext} from 'react';
import {observer,} from 'mobx-react-lite'
import './App.css';
import Expense from './types/Expense'
import RootStoreContext from './stores/RootStore'
const App = observer(() => {
  const RootStore  = useContext(RootStoreContext)
  
  // ExpensesStore.expenses = [...ExpensesStore.expenses,testExpense]
  // ExpensesStore.expenses.forEach(i => {
  //   console.log(i.cost)
  // })
  return (
   <>
     <div>App</div>

   </>
  

  )
})

export default App;
