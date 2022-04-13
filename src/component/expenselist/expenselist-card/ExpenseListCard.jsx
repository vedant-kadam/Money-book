import React from 'react';
import './expenseListCard.css'
import moment from 'moment';
import{MdDelete} from 'react-icons/md'
import { Dispatch } from 'react';
import { useDispatch } from 'react-redux';
import { delExpense } from '../../../redux/actions/expenses';

import {FaGraduationCap,FaShoppingCart} from 'react-icons/fa'
import{GiHealthNormal} from 'react-icons/gi'
import {MdFastfood} from 'react-icons/md'
import{SiDcentertainment} from 'react-icons/si'

const ExpenseListCard = ({item,notifySuccess})=> {
  const time = moment(item.createdAt).fromNow();
  const dispatch  = useDispatch();
  const handleDelete = ()=> {
    notifySuccess();
    dispatch(delExpense(item));
  };
  const IconName =item.category.iconTitle;
  const IconComp = ({item})=>{
     switch(item.category.iconTitle)
     {
       case 'FaGraduationCap':
          return <FaGraduationCap/>
       case 'GiHealthNormal':
         return <GiHealthNormal/>
       case 'FaShoppingCart':
         return <FaShoppingCart/>
       case 'MdFastfood':
         return <MdFastfood/>
       case 'SiDcentertainment':
         return <SiDcentertainment/>
       default:
         return null;
     }
  }
  return (
    <>
      <div className='card' 
        style={{borderRight:`0.3em solid ${item.category.color}`}}
      >
          <div className="card-img-container">
            <span><IconComp item={item} /></span>

           
          </div>
          <div className="card-info">
            <label className='card-title'>{item.title}</label>
            <label className='card-time'>{time}</label>
          </div>
          <div className="card-right">
            <div>
              <label className='card-amount'>₹ {item.amount}</label>
            </div>
            <div className="delete-icon" onClick={handleDelete}>
              <MdDelete/>
            </div>
          </div>
      </div>
    </>
  )
}

export default ExpenseListCard