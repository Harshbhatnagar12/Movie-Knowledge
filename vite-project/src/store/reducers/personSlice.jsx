import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  info: null,
}

export const perosnSlice = createSlice({
  name: 'perosn',
  initialState,
  reducers: {
   
    loadperosn:(state,action) => {
        state.info = action.payload;
    },
    removeeperosn: (state,action) => {
        state.info = null;
    }

   },
})

// Action creators are generated for each case reducer function
export const { loadperosn, removeperosn } = perosnSlice.actions

export default perosnSlice.reducer