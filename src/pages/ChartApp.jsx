import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area, BarChart, Bar } from 'recharts';


const ChartApp = ()=>{
    const pdata = [
        {
          name: 'MON',
          stu:1000,
          fees: 1000
        },
        {
          name: 'TUE',
          stu:15000,
          fees: 5000
        },
        {
          name: 'WED',
          stu:25000,
          fees: 10000
        },
        {
          name: 'THU',
          stu:15000,
          fees: 20000
        },
        {
          name: 'FRI',
          stu:30000,
          fees: 30000
        },
        {
          name: 'SAT',
          stu:40000,
          fees: 40000
        },
        {
            name: 'SUN',
            stu:`${50000}`,
            fees:50000
          },
      ];

  return (
    <>
        <ResponsiveContainer width="100%" height={"100%"} aspect={3}>
        <LineChart data={pdata} width={1000} height={1000} margin={{ top: 5, right: 5, left: 5, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" interval={'preserveStartEnd'} tickFormatter={(value) => value  } />
          <YAxis type="number"  interval={'preserveStartEnd'} />
          
          <Tooltip contentStyle={{ backgroundColor: 'white',color:"black" }} />
          {/* <Legend /> */}
          <Line type="monotone" dataKey="stu" stroke="green" activeDot={{ r: 8 }} />
          {/* <Line type="monotone" dataKey="fees" stroke="green" activeDot={{ r: 8 }} /> */}
        </LineChart>
      </ResponsiveContainer>
    </>
);
  
}

export default ChartApp
