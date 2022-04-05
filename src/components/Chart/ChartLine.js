import React from 'react';
import { Legend, Line, LineChart, Tooltip, XAxis, YAxis} from 'recharts';
import chartData from '../Hook/chartData';

const ChartLine = () => {
    const data=chartData();
    return (
       
    
          <LineChart className='chart' width={350}  height={250} data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
      
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="sell" stroke="#8884d8" />
    
    </LineChart>
    
    );
};

export default ChartLine;