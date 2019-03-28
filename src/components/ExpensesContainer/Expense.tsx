import React, { FunctionComponent, lazy, Suspense ,useContext} from 'react';
import ExpenseType from '../../types/Expense';
import RootStoreContext from '../../stores/RootStore'
import ExpenseCategoryIcon from '../ExpenseCategoryIcon/ExpenseCategoryIcon';
interface ExpenseProps {
  expense: ExpenseType;
}
const Expense: FunctionComponent<ExpenseProps> = ({ expense }) => {
  const { category, name, cost ,id} = expense;
  const {expensesStore} = useContext(RootStoreContext)
  const deleteHandler = () => {
    expensesStore.removeExpense(id)
  }
  return (
    <div className="expense">
      <ExpenseCategoryIcon category={category} />
      <p className="expense-name">{name}</p>
      <p className="expense-cost">$ {cost}</p>
      <button onClick={deleteHandler}>Delete</button>
    </div>
  );
};

export default Expense;
