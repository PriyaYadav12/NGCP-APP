import { createSlice } from '@reduxjs/toolkit';

// Define a slice of state for authentication
const navSlice = createSlice({
  name: 'nav',
  initialState: {
    activeNav: null,
  },
  reducers: {
    setNavActive(state, { payload }) {
      state.activeNav = payload.activeNav;
    },
  },
  extraReducers(builder) {},
});

const selectNavData = (state) => state.auth;
// Export the slice reducer
const { setNavActive } = navSlice.actions;

export { selectNavData, setNavActive };

export default navSlice.reducer;
