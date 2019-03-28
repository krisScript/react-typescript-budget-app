import React, { Fragment,lazy ,FunctionComponent,useContext} from 'react';
import ExpenseType from '../types/Expense'
import RootStoreContext from '../stores/RootStore'
import {observer} from 'mobx-react-lite'
import ExpensesContainer from './ExpensesContainer/ExpensesContainer'
const Home: FunctionComponent = () => {
    const {expensesStore}  = useContext(RootStoreContext)
    console.log(expensesStore)
  return (
    <>
     <h1>Home</h1>
     <ExpensesContainer expenses={expensesStore.expenses} />
    </>
  )
};

export default Home;