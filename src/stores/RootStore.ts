import { create } from "mobx-persist";
import { createContext } from "react";
import ExpensesStore  from "./ExpensesStore";

const hydrate = create({
  storage: localStorage,
  jsonify: true
});
export class RootStore {
  expensesStore = new ExpensesStore();
  constructor() {
    
    hydrate("expenses", this.expensesStore);
  }
}

 const RootStoreContext = createContext(new RootStore());
 export default RootStoreContext