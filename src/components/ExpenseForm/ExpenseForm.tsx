import React, { FunctionComponent, useState, useContext } from 'react';
import Expense from '../../types/Expense';
import Input from '../Input/Input';
import RootStoreContext from '../../stores/RootStore';
const ExpenseForm: FunctionComponent = () => {
  const [cost, setCost] = useState('');
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const { expensesStore } = useContext(RootStoreContext);
  const submitHandler = (e: any) => {
    e.preventDefault();
    const date = new Date();
    const dateObject = new Date(Date.parse(date.toString()));
    const humanReadableDate = dateObject.toDateString();
    const expense: Expense = {
      cost: Number(cost),
      name,
      category,
      date: humanReadableDate,
      id: 1
    };
    expensesStore.addExpense(expense);
  };
  return (
    <form onSubmit={submitHandler}>
      <Input
        name={'name'}
        setHook={setName}
        placeholder={'Expense Name'}
        value={name}
        type={'text'}
      />
    </form>
  );
};

export default ExpenseForm;
