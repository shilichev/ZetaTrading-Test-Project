import { fetchDemoTree } from './../demo/thunks';
import { ITreeItem } from './../demo/slice';


import { createAsyncThunk } from "@reduxjs/toolkit";
import httpClient from "../../../../app/httpClient";
import { actions } from "./slice";

interface IFetchAddItemParams {
    parentNodeId: number,
    nodeName: string
}

interface IFetchRenameItemParams {
    nodeId: number,
    newNodeName: string
}

interface IFetchRDeleteItemParams {
    nodeId: number,
}
export const fetchAddBranch = createAsyncThunk('fetchAddBranch',
    async ({ parentNodeId, nodeName }: IFetchAddItemParams, { dispatch }) => {
        try {
            await httpClient.post<ITreeItem>('/api.user.tree.node.create', {
                treeName: "ed6bd1ad-02d8-446e-b5cf-1eb388fd4822",
                parentNodeId: parentNodeId,
                nodeName: nodeName
            });
            await dispatch(fetchDemoTree())
            dispatch(actions.onCloseModal())
        } catch (error) {
            console.log(error);
        }
    })


export const fetchRenameBranch = createAsyncThunk('fetchRenameBranch',
    async ({ nodeId, newNodeName }: IFetchRenameItemParams, { dispatch }) => {
        try {
            await httpClient.post<ITreeItem>('/api.user.tree.node.rename', {
                treeName: "ed6bd1ad-02d8-446e-b5cf-1eb388fd4822", nodeId, newNodeName
            });
            await dispatch(fetchDemoTree())
            dispatch(actions.onCloseModal())
        } catch (error) {
            console.log(error);
        }
    })


export const fetchDeleteBranch = createAsyncThunk('fetchRenameBranch',
    async ({ nodeId }: IFetchRDeleteItemParams, { dispatch }) => {
        try {
            await httpClient.post<ITreeItem>('/api.user.tree.node.delete', {
                treeName: "ed6bd1ad-02d8-446e-b5cf-1eb388fd4822", nodeId
            });
            await dispatch(fetchDemoTree())
            dispatch(actions.onCloseModal())
        } catch (error) {
            console.log(error);
        }
    })