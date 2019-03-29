import { SyntheticEvent } from 'react';
import Expense from '../../types/Expense';
import IdStore from '../../stores/IdStore';
import ExpensesStore from '../../stores/ExpensesStore';
import { RouterProps } from 'react-router';
interface ISubmitHandlerArguments {
  e: SyntheticEvent;
  cost: string;
  name: string;
  category: string;
  idStore: IdStore;
  expensesStore: ExpensesStore;
  props: RouterProps;
}
const submitHandler = (submitHandlerArguments: ISubmitHandlerArguments) :void=> {
  const {
    e,
    name,
    category,
    cost,
    idStore,
    expensesStore,
    props
  } = submitHandlerArguments;
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
export default submitHandler