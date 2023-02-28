import { combineReducers } from '@reduxjs/toolkit';
import { reducer as tree } from './demo/slice';

export const reducer = combineReducers({
    tree
});
