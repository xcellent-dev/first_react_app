import { createAction, handleActions } from 'redux-actions';
import { Record, List, fromJS } from 'immutable';
import { pender } from 'redux-pender';
import * as BrickAPI from 'lib/api/brick';

const FETCH_BRICK_DATA = 'brickblock/FETCH_BRICK_DATA';
const FETCH_BRICK_RATE = 'brickblock/FETCH_BRICK_RATE';

export const fetchBrickData = createAction(FETCH_BRICK_DATA, BrickAPI.getBrickData);
export const fetchBrickRate = createAction(FETCH_BRICK_RATE, BrickAPI.getExchangeRate);


// The Record function returns a function that creates record type data.
// So, you need to paste it after the () to create the data.
const initialState = Record({
  preIco: List(),
  ico: List(),
  rate: Record({
  }),
})();


export default handleActions({
  ...pender({
    type: FETCH_BRICK_DATA,
    onSuccess: (state, action) => {
      const { preIco, ico } = action.payload.data;
      return state.set('preIco', fromJS(preIco)).set('ico', fromJS(ico));
    }
  }),
  ...pender({
    type: fetchBrickRate,
    onSuccess: (state, action) => {
      const { LTC, BTC, USD } = action.payload.data;
      const eth_rate = USD;
      const ltc_rate = USD/LTC;
      const btc_rate = USD/BTC;
      return state.set('rate', {ETH: eth_rate, LTC: ltc_rate, BTC: btc_rate});
    }
  })
}, initialState);
