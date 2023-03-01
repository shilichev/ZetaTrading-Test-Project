import { combineReducers } from '@reduxjs/toolkit';
import { reducer as tree } from './demo/slice';
import { reducer as modal } from './modal/slice';

export const reducer = combineReducers({
    tree,
    modal
});
