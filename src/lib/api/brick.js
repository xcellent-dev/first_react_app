import axios from 'axios';

export const getBrickData = () => axios.get('https://blockchain.brickblock.io/inputs');
export const getExchangeRate = () => axios.get('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=ETH,LTC,BTC,USD');
