import React from 'react';
import ChartArea from '../Chart/ChartArea';
import ChartLine from '../Chart/ChartLine';


const DashBoard = () => {
    return (
        <div className='row ' style={{width:"90%",margin:"auto"} }>
            <div className="col-lg-6 py-4 ">
                <h3 className='fw-bold text-center'>Month wise sell</h3>
               <div className=' d-flex justify-content-center py-5'>  
               <ChartLine></ChartLine>
               </div>
                

            </div>
            <div className="col-lg-6 py-4">
            <h3 className='fw-bold text-center '>Investment VS Reveneu</h3>
            <div className=' d-flex justify-content-center py-4'> 
            <ChartArea></ChartArea>
            </div>



            </div>
            
        </div>
    );
};

export default DashBoard;