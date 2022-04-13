import React,{useEffect,useState} from 'react'
import ExpenseListCard from './expenselist-card/ExpenseListCard';
import './expenseList.css'
import {useSelector} from  'react-redux';
import { toast, ToastContainer } from 'react-toastify';

const ExpenseList = () => {
  const {expenseList: list,query} = useSelector((state)=>state.expenses);
  const filteredList  = list.filter(item =>item.title.includes(query))
  const notifySuccess  =()=>{
    toast.success('Expense Deleted !!');
  }
  return (
    
        <div className="expense-list">
          <ToastContainer 
            position="bottom-left"
            autoClose={1500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
          />
          {
              filteredList.length ?( 
              filteredList.map((item)=>(
              <ExpenseListCard item={item} key={item.createdAt} notifySuccess ={notifySuccess}/>
              ))
              ):(
              <div  className='empty-state'>
                Hey are you saving money !!! <br></br> 
                Good for you !!
              </div>
              )
          }
        </div>
    
  )
}

export default ExpenseList