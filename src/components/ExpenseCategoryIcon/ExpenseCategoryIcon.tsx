import React, { Fragment,lazy ,FunctionComponent,useContext} from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faRunning,faGamepad,faPaw,faFirstAid,faCarrot,faTshirt,faUniversity,faFileInvoice,faMobile
} from '@fortawesome/free-solid-svg-icons';
library.add(faRunning,faGamepad,faPaw,faFirstAid,faCarrot,faTshirt,faUniversity,faFileInvoice,faMobile);

interface ExpenseCategoryIconProps {
category:string,
}
interface Category {
    category:string,
    icon:string,
    }
    
const ExpenseCategoryIcon: FunctionComponent<ExpenseCategoryIconProps> = ({category}) => {
  const categoriesArr  : Category[] = [
    {category:'sport',icon:'running'},
    {category:'health',icon:'first-aid'},
    {category:'pet',icon:'paw'},
    {category:'food',icon:'carrot'},
    {category:'clothing',icon:'tshirt'},
    {category:'education',icon:'university'},
    {category:'bills',icon:'file-invoice'},
    {category:'phone',icon:'mobile'},
    {category:'entertainment',icon:'gamepag'},
  ]
  console.log(category)
  const selectedIcon : any = categoriesArr.find(categoryIcon => categoryIcon.category === category)
  return (
    <div className="expense-icon"><FontAwesomeIcon icon={selectedIcon.icon} /></div>
  )
}

export default ExpenseCategoryIcon;