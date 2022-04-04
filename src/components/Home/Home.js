import React from 'react';
import {Link} from 'react-router-dom';
import reveiwData from '../Hook/reveiwData';
import PoneDetail from '../PhoneDetail/PoneDetail';
import Phoneimage from '../PhoneImage/Phoneimage';
import ReviewCart from '../ReveiewCart/ReviewCart';

const Home = () => {
    const persons=reveiwData()
   
    



    return (
        <div >
            <div className="phone-section row mx-0">
             
               <PoneDetail></PoneDetail>
               <Phoneimage></Phoneimage>
               
                
            </div>

            <div className="customar-review-section">
                <h1 className='fw-bold text-center pt-4'>Customar Reviews</h1>
                <div className='row row-cols-1 row-cols-lg-2 gx-4 gy-3 pt-5 mx-auto' style={{width:"90%"}}>
                    {
                           persons.slice(0,3).map((person,index)=> <ReviewCart key={index} person={person}></ReviewCart>)

                    }
                </div>
                <p className='text-center py-3 '><Link to={"/reviews"}> <button className='btn  btn-success px-4 py-2 mt-2'>See All Reviews</button> </Link></p>
            </div>
            
        </div>
    );
};

export default Home;






