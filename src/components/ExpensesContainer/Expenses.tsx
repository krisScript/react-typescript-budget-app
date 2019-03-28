import React, { Fragment,lazy ,FunctionComponent} from 'react';
import Expense from './Expense';
import ExpenseType from '../../types/Expense'
interface ExpensesProps{
    expenses:ExpenseType[]
}
const Expenses: FunctionComponent<ExpensesProps> = ({expenses}) => {
  return (
    <>
      {expenses.map(expense => {
        return (
          <Expense
            key={expense.id}
            expense={expense}
          />
        );
      })}
    </>
  )
};

export default Expenses;