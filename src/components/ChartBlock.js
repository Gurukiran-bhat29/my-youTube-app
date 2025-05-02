import React from 'react';

const ChartBlock = ({ title, ChartComponent, data }) => (
  <div style={{ width: '100%', height: '500px', marginBottom: '3rem' }}>
    <label className='block text-center font-bold text-xl'>{title}</label>
    <ChartComponent
      data={data}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: "THICCNESS SCALE"
          }
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }}
    />
  </div>
);

export default ChartBlock;
