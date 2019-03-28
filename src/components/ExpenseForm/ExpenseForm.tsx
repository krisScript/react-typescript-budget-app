import React, { FunctionComponent, useState, useContext } from 'react';
import Expense from '../../types/Expense';
import { withRouter } from 'react-router-dom';
import Input from '../Input/Input';
import RootStoreContext from '../../stores/RootStore';
import { observer } from 'mobx-react-lite';

const ExpenseForm: FunctionComponent<any> = observer(props => {
  const [cost, setCost] = useState('');
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const { idStore, expensesStore } = useContext(RootStoreContext);
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
      id: idStore.id
    };
    idStore.incrementId();
    expensesStore.addExpense(expense);
    props.history.replace(`/`);
  };
  return (
    <form onSubmit={submitHandler} className="form">
      <Input
        name={'name'}
        setHook={setName}
        placeholder={'Expense Name'}
        value={name}
        type={'text'}
      />
      <Input
        name={'cost'}
        setHook={setCost}
        placeholder={'Cost'}
        value={cost}
        type={'number'}
      />
      <select value={category} className="input" onChange={e => setCategory(e.target.value)}>
        <option value="sport">Sport</option>
        <option value="bills">Bills</option>
        <option value="clothing">Clothing</option>
        <option value="pet">Pet</option>
        <option value="bills">Food</option>
        <option value="education">Education</option>
      </select>
      <button>Add Expense</button>
    </form>
  );
});

export default withRouter(ExpenseForm);
