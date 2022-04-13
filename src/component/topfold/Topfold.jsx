import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './topfold.css'
import {AiOutlineSearch} from 'react-icons/ai'
import {BiMessageSquareAdd} from 'react-icons/bi'
import {BiArrowBack} from 'react-icons/bi'
import {ImCancelCircle} from 'react-icons/im'
import { useDispatch } from 'react-redux'
import { searchExpense } from '../../redux/actions/expenses'

const Topfold = () => {
    const [query,setQuery] = useState('');
    const dispatch  = useDispatch()
    const handelQuery = (e)=>{
        setQuery(e.target.value);
        dispatch(searchExpense(e.target.value))
    }

  return (
    <div className='topfold'>
        {
            window.location.pathname === '/' ? 
            <div className="home-topfold">
            <div className="searchbar">
                <span><AiOutlineSearch/></span>
                <input type="text" placeholder='search for expenses' value={query} onChange={handelQuery}/>
            </div>
            <Link to='/add-expense'>
                <div className="add-button">
                    <span><BiMessageSquareAdd/></span>
                    <label>Add</label>
                </div>
            </Link>
           
            </div>  :
            <div className="add-topfold">
                <Link to='/'>
                    <div className="add-topfold-button">
                        <span><BiArrowBack/></span>
                        <label >back</label>
                    </div>
                </Link>
              <Link to='/'>
                    <div className="add-topfold-button">
                        <span><ImCancelCircle/></span>
                        <label >cancel</label>
                    </div>
              </Link>   
               
               
            </div>
        }
        
    </div>
  )
}

export default Topfold