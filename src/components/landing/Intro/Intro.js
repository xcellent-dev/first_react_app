import React from 'react';
// import cx from 'classnames';
import CircleChart from 'components/landing/CircleChart'
import './Intro.scss';
import UserButton from 'components/base/UserButton'
import PropTypes from 'prop-types';

function formatMoney(n, currency) {
  return currency + " " + n.toFixed().replace(/(\d)(?=(\d{3})+(,|$))/g, '$1,');
}

const Intro = ({selected_type, pre_ico, ico, rate, onChangeType}) => {
  let statistics = {
    'pre_ico': {
      'ETH': 0,
      'BTC': 0,
      'LTC': 0
    },
    'ico': {
      'ETH': 0,
      'BTC': 0,
      'LTC': 0
    }
  };

  pre_ico.map(
    (item, i) => {
      const { currency, value } = item.toJS();
      statistics['pre_ico'][currency] += value;
      return true;
    }
  );

  ico.map(
    (item, i) => {
      const { currency, value } = item.toJS();
      statistics['ico'][currency] += value;
      return true;
    }
  );  

  const is_pre_active = selected_type === 'pre_ico' ? 'active' : '';
  const is_ico_active = selected_type === 'ico' ? 'active' : '';

  const transform_unit = { 'BTC': 100000000, 'ETH': 1000000000000000000, 'LTC': 100000000 };
  let total = 
  ( statistics[selected_type]['ETH']!==0 ? Math.floor(statistics[selected_type]['ETH'] / transform_unit['ETH']) : 0 ) + 
  ( statistics[selected_type]['BTC']!==0 ? Math.floor(statistics[selected_type]['BTC'] / transform_unit['BTC']) : 0 ) + 
  ( statistics[selected_type]['LTC']!==0 ? Math.floor(statistics[selected_type]['LTC'] / transform_unit['LTC']) : 0 );  

  let total_for_eth = statistics[selected_type]['ETH']!== 0 ? Math.floor( statistics[selected_type]['ETH'] / transform_unit['ETH']) : 0;
  let total_for_btc = statistics[selected_type]['BTC']!== 0 ? Math.floor( statistics[selected_type]['BTC'] / transform_unit['BTC']) : 0;
  let total_for_ltc = statistics[selected_type]['LTC']!== 0 ? Math.floor( statistics[selected_type]['LTC'] / transform_unit['LTC']) : 0;

  let total_dollar = total_for_eth * rate['ETH'] + total_for_btc * rate['BTC'] + total_for_ltc * rate['LTC'];

  return (
    <div className='chartsbody'>
      <div className='container'>
        <h3 className='sub_title'>
          {
            (total_dollar > 0) &&
            <div>
              THe total funding amount is  <span>{ formatMoney(Math.floor(total_dollar), '$') }</span>
            </div>
          }          
        </h3>

        <div className='btn_wrapper'>
          <div>
            <UserButton text="Pre ICO" type={is_pre_active} onClick={evt => onChangeType('pre_ico')} />
          </div>
          <div>
            <UserButton text="ICO" type={is_ico_active} onClick={evt => onChangeType('ico')} />
          </div>
        </div>

        <ul className='chartsico'>
          <li className='chartsico__item'>
            <CircleChart
              currency={'ETH'}
              total={total}
              total_for_currency={total_for_eth}
              rate={rate}
            />
            <figcaption>
              ETH
            </figcaption>
          </li>
          <li className='chartsico__item'>
            <CircleChart
              currency={'BTC'}
              total={total}
              total_for_currency={total_for_btc}
              rate={rate}
            />
            <figcaption>
              BTC
            </figcaption>
          </li>
          <li className='chartsico__item'>
            <CircleChart
              currency={'LTC'}
              total={total}
              total_for_currency={total_for_ltc}
              rate={rate}
            />
            <figcaption>
              LTC
            </figcaption>
          </li>
        </ul>
      </div>
    </div>

  );
};

Intro.propTypes = {
  selected_type: PropTypes.string,
  pre_ico: PropTypes.object,
  ico: PropTypes.object,
  onChangeType: PropTypes.func
};

export default Intro;
