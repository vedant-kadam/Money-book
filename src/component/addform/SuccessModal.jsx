import React from 'react'
import Modal from 'react-modal';
import './successModal.css';
import{AiOutlineHome}from 'react-icons/ai';
import { Link } from 'react-router-dom';
const SuccessModal = ({modalOpen,setModalOpen}) => {
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor:"#fc7f03",
          borderRadius:'1em', 
        },
      };

  return (
        <>
            <Modal isOpen={modalOpen} style={customStyles} >
                <div className="modal-inner">
                    <label>Expense Added Successfully</label>
                    <div className="image-cnt"></div>
                    <Link to='/' >
                        <div className='take-home-btn'>
                        <span> <AiOutlineHome/></span>
                            Home
                        </div>
                    </Link>
                    
                </div>
            </Modal>
        </>
  )
}

export default SuccessModal