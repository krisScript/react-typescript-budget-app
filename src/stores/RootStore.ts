import { create } from "mobx-persist";
import { createContext } from "react";
import ExpensesStore  from "./ExpensesStore";
import IdStore  from "./IdStore";

const hydrate = create({
  storage: localStorage,
  jsonify: true
});
export class RootStore {
  expensesStore = new ExpensesStore();
  idStore = new IdStore()
  constructor() {
    hydrate("id", this.idStore);
    hydrate("expenses", this.expensesStore);
  }
}

 const RootStoreContext = createContext(new RootStore());
 export default RootStoreContext