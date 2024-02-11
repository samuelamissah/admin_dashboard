import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const SparkLineArea = ({ data, height, weight}) => {
  const options = {
    chart: {
      type: 'area',
      margin: [2, 0, 2, 0],
      width: weight,
      height: height,
      style: {
        overflow: 'visible'
      },
      skipClone: true
    },
    title: {
      text: ''
    },
    credits: {
      enabled: false
    },
    xAxis: {
      labels: {
        enabled: false
      },
      title: {
        text: ''
      },
      crosshair: true,
      startOnTick: false,
      endOnTick: false,
      tickPositions: []

    },
    yAxis: {
      endOnTick: false,
      startOnTick: false,
      labels: {
        enabled: false
      },
      title: {
        text: null
      },
      tickPositions: [0]
    },
    legend: {
      enabled: false
    },
    tooltip: {
      crosshairs: true,
      shared: true,
      useHTML: true,
      headerFormat: '<small>{point.key}</small><table>',
      pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' +
        '<td style="text-align: right"><b>{point.y}</b></td></tr>',
      footerFormat: '</table>',
      valueDecimals: 2
    },
    plotOptions: {
      series: {
        animation: {
          duration: 1000,
          easing: 'easeOutBounce'
        },
        lineWidth: 1,
        shadow: false,
        states: {
          hover: {
            lineWidth: 1
          }
        },
        marker: {
          enabled: true,
          symbol: 'circle',
          radius: 2,
          states: {
            hover: {
              enabled: true,
              radius: 4
            }
          }
        },
        fillOpacity: 0.25
      },
      column: {
        negativeColor: '#910000',
        borderColor: 'silver'
      }
    },
    series: [{
      type: 'line',
      name: 'KojoWare ',
      data: data.map(item => [item.x, item.y])
    }],
    legend: {
      enabled: true
    }

  };

  return (
    <div className=''>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
    </div>
  );
};

export default SparkLineArea;