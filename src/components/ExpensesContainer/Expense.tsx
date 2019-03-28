import React, { FunctionComponent, lazy, Suspense } from 'react';
import ExpenseType from '../../types/Expense';
interface ExpenseProps {
  expense: ExpenseType;
}
const Expense: FunctionComponent<ExpenseProps> = ({ expense }) => {
  console.log(expense);
  return <>asdasdad</>;
};

export default Expense;
