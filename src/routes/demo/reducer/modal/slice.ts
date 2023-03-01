import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ActionType } from '../../../../common/types/modal';
import { ITreeItem } from '../demo/slice';

export interface IModalState extends Omit<ITreeItem, 'children'> {
    isOpenModal: boolean;
    actionType: ActionType;
}

const initialState: IModalState = {
    isOpenModal: false,
    actionType: ActionType.DEFAULT,
    id: 0,
    name: ''
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        onOpenModal(state, { payload }: PayloadAction<Omit<IModalState, 'isOpenModal'>>) {
            if (payload) {
                state.actionType = payload.actionType;
                state.id = payload.id;
                state.name = payload.name;
            }
            state.isOpenModal = true
            return state
        },

        onCloseModal(state) {
            state.isOpenModal = false
            state.actionType = ActionType.DEFAULT
        },

        reset(): IModalState {
            return initialState;
        },
    },
});

export const { actions, reducer } = modalSlice
