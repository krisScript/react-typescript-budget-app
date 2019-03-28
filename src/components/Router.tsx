import React, { Fragment, lazy, Suspense,FunctionComponent } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Loader from './Loader';
import Navbar from './Navbar/Navbar'
const ExpenseForm = lazy(() => import('./ExpenseForm/ExpenseForm'));


const Router: FunctionComponent = () => {
  return (<BrowserRouter>
          <>
            <Navbar />
            <div className="main--container">
              <Switch>
              <Route
                  exact
                  path="/add-expense"
                  render={() => (
                    <Suspense fallback={<Loader />}>
                      <ExpenseForm />
                    </Suspense>
                  )}
                />
              </Switch>
            </div>
          </>
        </BrowserRouter>)
};

export default Router;