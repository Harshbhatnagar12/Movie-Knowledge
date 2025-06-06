import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  info: null,
}

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
   
    loadmovie:(state,action) => {
        state.info = action.payload;
    },
    removeemovie: (state,action) => {
        state.info = null;
    }

   },
})

// Action creators are generated for each case reducer function
export const { loadmovie, removeemovie } = movieSlice.actions

export default movieSlice.reducer