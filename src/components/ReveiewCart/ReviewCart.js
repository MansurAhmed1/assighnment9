import React from 'react';
import './ReviewCart.css'

const ReviewCart = (props) => {
    const{person}=props;
    const{name,img,rating,review}=person;
    
    return (
       <div className='col'>
            <div  className='cart  m-2 py-3 px-3 border border-rounded shadow-lg'>
             <div className='d-flex  justify-content-between align-items-center'>
                <span>
                <img style={{height:"50px",width:"50px",borderRadius:"50%"}}  src={img} alt="" />
                 
         
                 <span className='fw-bold ps-3 '>{name}</span>
                </span>
                    <span  className='fw-bold pe-3'> Rating:{rating}</span>
                    
                
             </div>
            <div className='mt-2'>
                {review}
            </div>
         </div>
       </div>
    );
};

export default ReviewCart;