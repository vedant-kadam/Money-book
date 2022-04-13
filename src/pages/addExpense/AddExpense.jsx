import React from 'react'
import AddForm from '../../component/addform/AddForm'
import Topfold from '../../component/topfold/Topfold'
import './addExpense.css'

const AddExpense = () => {
  return (
      
    <div className='add-expense'>
      <Topfold/>
      <AddForm/>
      
    </div>
  )
}

export default AddExpense