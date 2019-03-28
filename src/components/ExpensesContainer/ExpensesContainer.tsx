import  React,{FunctionComponent,lazy,Suspense} from 'react';
import Expense from '../../types/Expense'
import Loader from '../Loader'
const Expenses = lazy(() => import('./Expenses'));
interface ExpensesContainerProps{
    expenses:Expense[]
}
const ExpensesContainer: FunctionComponent<ExpensesContainerProps> = ({expenses}) => {
    console.log(expenses)
  return (
    <>
    {expenses ? (
      <Suspense fallback={<Loader />}>
        <div className="expenses-container" >
        <Expenses expenses={expenses} />
        </div>
      </Suspense>
    ) : (
      <h1>No Expenses</h1>
    )}
    </>
  )
};

export default ExpensesContainer;