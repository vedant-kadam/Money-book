import React from 'react'
import './header.css'
import {BsCreditCard} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'
const Header = () => {
  return (
    <div className="header-container">
        <div className="header">
            <div className="header-logo">
                MoneyBook <span><BsCreditCard/></span>
            </div>
            <div className="header-button">
                <a href="https://github.com" target='_blank' rel='noopener noreferrer'>
                     <span><AiFillGithub/></span> Star  
                </a>
            </div>
        </div>
    </div>
  )
}

export default Header