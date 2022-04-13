import React, { useState } from "react";
import "./addform.css";
import 'react-toastify/dist/ReactToastify.css';
import { BiRupee } from "react-icons/bi";
import { BiPaperPlane } from "react-icons/bi";
import { categories } from "../../constants/add-expense-constants";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addExpense } from "../../redux/actions/expenses";
import { toast, ToastContainer } from "react-toastify";
import SuccessModal from "./SuccessModal";

import {FaGraduationCap,FaShoppingCart} from 'react-icons/fa'
import{GiHealthNormal} from 'react-icons/gi'
import {MdFastfood} from 'react-icons/md'
import{SiDcentertainment} from 'react-icons/si'
const AddForm = () => {
  const cat = categories;
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState();
  const [catergoryOpen, setCategoryOpen] = useState(false);
  const [isModalOpen ,setIsModalOpen] = useState(false);
  const dispatch=useDispatch();


  const handelTitle = (e) => {
    setTitle(e.target.value);
  };
  const handelAmount = (e) => {
    const val = parseFloat(e.target.value);
    if (isNaN(val)) {
      setAmount("");
      return;
    }
    setAmount(val);
  };
  const handelCategory = (item) => {
    setCategory(item);
    setCategoryOpen(false);
  };
  const handelSubmit = ()=>{
    if(title==='' || amount === "" ||!category)
    {
      const notify = ()=>{
        toast("Please enter valid data");
      }
      notify();
      // setCategoryOpen(false);
      return;
    }
    const data ={
      title,
      amount,
      category,
      createdAt:new Date()
    }
    dispatch(addExpense(data));
    setIsModalOpen(true);
  }
  return (
    <>
      <div className="add-form">
        <ToastContainer 
          position="bottom-left"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick

        />
          <SuccessModal modalOpen = {isModalOpen} setModalOpen={setIsModalOpen}/>

        <div className="form-item">
          <label>Title </label>
          <input
            type="text"
            placeholder="Give a sutiable name to the purchase"
            value={title}
            onChange={handelTitle}
          />
        </div>
        <div className="form-item">
          <label>Amount ₹ </label>
          <input
            className="amount-input"
            type="text"
            placeholder="enter amount"
            value={amount}
            onChange={handelAmount}
          />
        </div>
        <div className="categorgy-container-parent">
          <div className="category">
            <div
              className="category-dropdown"
              onClick={() => setCategoryOpen(!catergoryOpen)}
            >
              <label> {category ? category.title : "Category"}</label>
              <span>
                <MdOutlineArrowDropDownCircle />
              </span>
            </div>
            {catergoryOpen && (
              <div className="category-container">
                {cat.map((category) => (
                  <div
                    key={category.id}
                    className="category-item"
                    style={{ borderRight: `5px solid ${category.color}` }}
                    onClick={() => handelCategory(category)}
                  >
                    <label>{category.title}</label>
                    <span>{category.icon}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="form-add-button">
          <div onClick={handelSubmit}>
            <label>Add</label>
            <span>
              <BiPaperPlane />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddForm;
