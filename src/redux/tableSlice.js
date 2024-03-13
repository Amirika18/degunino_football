import { createSlice } from '@reduxjs/toolkit'

export const tableSlice = createSlice({
    name: 'table',
    initialState: {
        data: []
    },
    reducers: {
        setData: (state, action) => {
            state.data = action.data;
        }
    }
})

export const {setData} = tableSlice.actions;

export default tableSlice.reducer;