import React from 'react';
import styled from 'styled-components';
import { Line } from 'react-chartjs-2';

interface LineChartProps {
  label: string
  data: number[]
  labels: any[] 
}

export const LineChart = (props: LineChartProps) => {
  return (
    <Container>
      <Line
        data={{
          labels: props.labels,
          datasets: [
            {
              label: props.label,
              data: props.data,
              fill: false,
              borderColor: '#FFE05E',
              borderWidth: 2,
              pointBackgroundColor: '#fff',
              pointBorderColor: 'black',
              pointBorderWidth: 2,
              pointHoverBorderColor: 'red',
              pointHoverBorderWidth: 10,
              lineTension: 0,
            }
          ]
        }}
        options={options}
      />
    </Container>
  );
}

const Container = styled.div`

`

const options = {
  responsive: false,
  elements: { 
    point: {
      radius: 6,
      hitRadius: 6, 
      hoverRadius: 6 
    } 
  },
  legend: {
    display: false,
  },
  // tooltips: {
  //   backgroundColor: 'transparent',
  //   displayColors: false,
  //   bodyFontSize: 14,
  //   callbacks: {
  //     label: (tooltipItems: any) => `${tooltipItems.yLabel}°C`
  //   }
  // },
  scales: {
    xAxes: [{
      display: false,
    }],
    yAxes: [{
      display: false,
      ticks: {
        beginAtZero: true,
      },
    }]
  }
};