import React from 'react';
import reveiwData from '../Hook/reveiwData';
import ReviewCart from '../ReveiewCart/ReviewCart';

const Reviews = () => {
    const persons=reveiwData()
    return (
        <div className='pb-5'>

                <h3 className='fw-bold text-center pt-4 pb-0'>Customar Reviews</h3>
               
  
                <div className='row row-cols-1 row-cols-lg-2 gx-4 gy-3 pt-3 mx-auto' style={{width:"90%"}}>
                {
                           persons.map((person,index)=> <ReviewCart key={index} person={person}></ReviewCart>)


                    }
                    </div>
        
        </div>
    );
};

export default Reviews;