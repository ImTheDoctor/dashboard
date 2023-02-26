import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { CustomTooltip } from './CustomTooltip';

const Charts = ({ data }) => {

  return (
    <ResponsiveContainer width="50%" aspect={4}>
      <BarChart
        data={data}
        margin={{
          top: 15,
          right: 80,
          left: 20,
          bottom: 5,
        }}
        style={{ backgroundColor: '#419BF0' }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" tick={{ fill: '#E4ECED' }} />
        <YAxis tick={{ fill: '#E4ECED' }} />
        <Tooltip cursor={{fill:'transparent'}} content={<CustomTooltip />} />
        <Bar dataKey="sales" radius={[5, 5, 0, 0]} barSize={5} fill="#E4ECED" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default Charts