// For convenience, we will pre-bind the action creation functions later
import { bindActionCreators } from 'redux';
import * as brickblockActions from './modules/brickblock';

import store from './index';

const { dispatch } = store;

export const BrickblockActions = bindActionCreators(brickblockActions, dispatch);
