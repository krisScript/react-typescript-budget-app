import React, { Fragment,lazy ,FunctionComponent,useContext} from 'react';
import RootStoreContext from '../stores/RootStore'
import {observer} from 'mobx-react-lite'
import ExpensesContainer from './ExpensesContainer/ExpensesContainer'
const Home: FunctionComponent = observer(() => {
    const {expensesStore}  = useContext(RootStoreContext)
  return (
    <>
     <h1>Expenses</h1>
     <ExpensesContainer expenses={expensesStore.expenses} />
    </>
  )
})

export default Home;