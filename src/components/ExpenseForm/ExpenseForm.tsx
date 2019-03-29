import React, { FunctionComponent, useState, useContext,SyntheticEvent} from 'react';
import { withRouter } from 'react-router-dom';
import Input from '../Input/Input';
import RootStoreContext from '../../stores/RootStore';
import { observer } from 'mobx-react-lite'
import submitHandler from './submitHandler';
const ExpenseForm: FunctionComponent<any> = observer(props => {
  const [cost, setCost] = useState('');
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const { idStore, expensesStore } = useContext(RootStoreContext);

  return (
    <form data-testid="form" onSubmit={e => submitHandler({
      e,
      cost,
      name,
      props,
      category,
      idStore,
      expensesStore,
    }) } className="form">
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
      <select value={category} className="input" onChange={e => setCategory(e.target.value)} data-testid="category" name="category">
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
