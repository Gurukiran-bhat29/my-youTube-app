import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2'
import { Radar } from 'react-chartjs-2'
import { Doughnut } from 'react-chartjs-2'
import { Pie } from 'react-chartjs-2'
import ChartBlock from './ChartBlock';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  RadialLinearScale,
  RadarController,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  RadialLinearScale,
  RadarController,
  Title,
  Tooltip,
  Legend
);

const DynamicChart = () => {
  const [chartData, setChartData] = useState({});

  const Chart = () => {
    let empSal = [];
    let empAge = [];

    fetch('http://dummy.restapiexample.com/api/v1/employees')
    .then(res => res.json())
    .then(
      res => {
        console.log("campu",res.data);
        for (const dataObj of res.data) {
          empSal.push(parseInt(dataObj.employee_salary));
          empAge.push(parseInt(dataObj.employee_age));
        }
        setChartData({
          labels: empAge,
          datasets: [{
            label: 'level of thicceness',
            data: empSal,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1
          }]
        });
      }
    ).catch(err => {
      console.log(err);
    })
  }

  useEffect(() => {
    Chart();
  }, []);

  if (!chartData.datasets) {
    return <p>Loading...</p>;
  }

  return (
    <div style={{ width: '100%' }}>
      <ChartBlock title="Bar Chart" ChartComponent={Bar} data={chartData} />
      <ChartBlock title="Line Chart" ChartComponent={Line} data={chartData} />
      <ChartBlock title="Radar Chart" ChartComponent={Radar} data={chartData} />
      <ChartBlock title="Doughnut Chart" ChartComponent={Doughnut} data={chartData} />
      <ChartBlock title="Pie Chart" ChartComponent={Pie} data={chartData} />
    </div>
  );
}
export default DynamicChart;