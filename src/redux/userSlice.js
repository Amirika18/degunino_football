import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        isAdmin: false
    },
    reducers: {
        setIsAdmin: (state, action) => {
            state.isAdmin = action.isAdmin;
        }
    }
})

export const {setIsAdmin} = userSlice.actions;

export default userSlice.reducer;