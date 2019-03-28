import {observable } from 'mobx';
import Expense from '../types/expense';
import {persist,create} from 'mobx-persist';

 class ExpensesStore{
    @persist('list') @observable expenses : Expense[] = []
    
    }


export default ExpensesStore