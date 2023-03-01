

import { createAsyncThunk } from "@reduxjs/toolkit";
import httpClient from "../../../../app/httpClient";
import { actions, ITreeItem } from "./slice";


export const fetchDemoTree = createAsyncThunk('fetchActualListings', async (_, { dispatch }) => {
    let data: ITreeItem
    try {
        const res = await httpClient.get<ITreeItem>('/api.user.tree.get', { treeName: "ed6bd1ad-02d8-446e-b5cf-1eb388fd4822" });
        data = res.data;
        dispatch(actions.setTree(data))
    } catch (error) {
        console.log(error);
    }
})