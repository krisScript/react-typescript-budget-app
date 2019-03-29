import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import {render,fireEvent, getByValue,waitForElement,cleanup} from 'react-testing-library'
import ExpenseForm from './ExpenseForm'
describe('<TaskForm />',() => {
    const cost :string = "50";
    const name : string = "T-shirt";
    const category : string = "clothing";
    const { container, getByPlaceholderText, getByValue,getByText,getByTestId } = render (<BrowserRouter><ExpenseForm  /></BrowserRouter>)
    beforeEach(() => {    
        const constInput = getByPlaceholderText('Cost')
        fireEvent.change(constInput, {target : {value : cost}})
        const nameInput = getByPlaceholderText('Expense Name')
        fireEvent.change(nameInput, {target : {value : name}})
        const categotySelect = getByTestId('category')
        fireEvent.select(categotySelect, {target : {value : category}})
    })
    afterEach(cleanup)
    it("should change input value", async () => {
        const updatedCost = await waitForElement(() => getByValue(cost))
        const updatedName = await waitForElement(() => getByValue(name))
        const updatedCategory = await waitForElement(() => getByValue(category))
        expect(updatedCost).toBeTruthy
        expect(updatedName).toBeTruthy
        expect(updatedCategory).toBeTruthy
      });


})
