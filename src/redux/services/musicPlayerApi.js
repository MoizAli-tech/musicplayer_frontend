import { createSlice } from '@reduxjs/toolkit';
import axios from "axios"


const musicPlayerApi = createSlice({
    name: 'player',
    initialState: {
        data: [],
        loading: true,
        error: false
    },
    reducers: {
        setData(state, action) {
            state.data = [...action.payload]
        },
        setLoading(state, action) {
            state.loading = action.payload;
        },
        setError(state, action) {
            state.error = action.payload;
        }
    }
});

export const { setData, setLoading, setError } = musicPlayerApi.actions;

export default musicPlayerApi.reducer;


//thunk 


export function fetchMusicData() {
    return async (dispatch, getState) => {
        const options = {
            method: 'GET',
            url: 'https://musicplayerapi.up.railway.app/',
        };



        try {
            dispatch(setLoading(true));
            const response = await axios.request(options);
            console.log(response.data)
            dispatch(setData(response.data.songs));
            dispatch(setLoading(false));
        } catch (error) {
            console.log(error)
            dispatch(setError(true));
        }
    }
}
