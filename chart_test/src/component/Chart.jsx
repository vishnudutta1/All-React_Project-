import React from 'react';
import {ResponsiveContainer,LineChart,Line} from 'react-chartjs-2'

function Chart() {
  return (
  <div>
       <div>Chart</div>
    <ResponsiveContainer width = "100%" aspect = {3}>
       <LineChart>

       </LineChart>
       
    </ResponsiveContainer>
  </div>
  )
}

export default Chart