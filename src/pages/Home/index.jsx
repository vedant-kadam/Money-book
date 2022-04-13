import React from 'react'
import ExpenseList from '../../component/expenselist/ExpenseList'
import Topfold from '../../component/topfold/Topfold'
import './home.css'
const Home = () => {
  return (
    <>
    <div className="home">
     <Topfold/>
      <ExpenseList/>
    </div>
     
    </>
    
  )
}

export default Home;