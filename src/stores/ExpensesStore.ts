import {observable,action } from 'mobx';
import Expense from '../types/Expense'
import {persist,create} from 'mobx-persist';

 class ExpensesStore{
    @persist('list') @observable expenses : Expense[] = []
    @action addExpense(expense :Expense) : void{
        this.expenses = [...this.expenses,expense]
    }
    @action removeExpense(expenseId :number) : void{
       this.expenses = this.expenses.filter(expense => expense.id !== expenseId)
    }
    }


export default ExpensesStore