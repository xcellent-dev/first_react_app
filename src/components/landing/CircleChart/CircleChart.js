import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import BTC_IMG from 'static/images/BTC.png'
import ETH_IMG from 'static/images/ETH.png'
import LTC_IMG from 'static/images/LTC.png'

import './CircleChart.scss';

import Spinner from 'components/common/Spinner'

import PropTypes from 'prop-types';

const CircleChart = ({currency, total, total_for_currency, rate}) => {
  
  if (total === 0 || !('ETH' in rate))
    return (
      <div className="doughnut-wrapper">
        <Spinner />
      </div>
    );

  const data = {
    datasets: [{
      data: [ total_for_currency, total-total_for_currency  ],
      backgroundColor: [
        '#6f3bff',
        '#151e35'
      ]
    }]
  };

  const icon_src = {
    "BTC": BTC_IMG,
    "ETH": ETH_IMG,
    "LTC": LTC_IMG
  }

  return (
    <div className="doughnut-wrapper">
      <Doughnut data={data} width={200} height={200}
        options={{
          cutoutPercentage: 80,
          responsive:false,
          maintainAspectRatio: false,
          tooltips: {
            enabled: false
          },
          events: []
      	}}
      />
      <p>{total_for_currency}</p>
      <img className="icon" src={icon_src[currency]} width={50} alt="ic"/>
    </div>
  );
};

CircleChart.propTypes = {  
  currency: PropTypes.string,
  total: PropTypes.number,
  total_for_currency: PropTypes.number
};

export default CircleChart;
