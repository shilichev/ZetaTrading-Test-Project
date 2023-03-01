import { createSlice } from '@reduxjs/toolkit';

export interface ITreeItem {
    id: number;
    name: string;
    children?: ITreeItem[];
}

const initialState: ITreeItem = {
    id: 0,
    name: '',
    children: []
}

const demoTreeSlice = createSlice({
    name: 'demoTree',
    initialState,
    reducers: {
        setTree(state, { payload }) {
            if (payload) {
                state = payload;
            }
            state.name = 'Root'
            return state
        },
        reset(): ITreeItem {
            return initialState;
        },
    },
});

export const { actions, reducer } = demoTreeSlice
