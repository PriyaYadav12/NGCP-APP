import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import config from '../../config/config';
import FetchApi from '../../utility/client';

const login = createAsyncThunk('auth/login', async (credentials) => {
  return FetchApi.fetch(`${config.api}/api/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });
});

const signup = createAsyncThunk('auth/signup', async (payload) => {
  return FetchApi.fetch(`${config.api}/api/auth/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
});

// const forgetPass = createAsyncThunk('auth/forgetPass', async (payload) => {
//   return FetchApi.fetch(`${config.api}/api/auth/forget`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(payload),
//   });
// });

// const forgetPassVerify = createAsyncThunk('auth/forgetPassVerify', async (payload) => {
//   return FetchApi.fetch(
//     `${config.api}/api/auth/verifypassword?userId=${payload.userId}&token=${payload.token}`,
//     {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: {
//         password: payload.password,
//         confirmPassword: payload.confirmPassword,
//       },
//     },
//   );
// });

// const logout = createAsyncThunk('auth/logout', async (credentials) => {
//   return FetchApi.fetch(`${config.api}/api/auth/logout`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(credentials),
//     credentials: 'include',
//   });
// });

// Define a slice of state for authentication
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    token: '',
    // nav
    activeNav: null,
  },
  reducers: {
    logout(state) {
      state.user = null;
      state.isAuthenticated = false;
    },
    setIsAuthenticated(state, { payload }) {
      state.isAuthenticated = payload.isAuthenticated;
    },
    setNavActive(state, { payload }) {
      state.activeNav = payload.activeNav;
    },
  },
  extraReducers(builder) {
    builder.addCase(login.fulfilled, (state, { payload }) => {
      if (payload.isAuthenticated) {
        state.isAuthenticated = true;
        state.token = payload.token;
      }
    });
    builder.addCase(signup.fulfilled, (state, { payload }) => {
      // notify({ type: 'alert', message: payload.message });
    });
    // builder.addCase(forgetPass.fulfilled, (state, { payload }) => {
    //   alert(payload.message);
    // });
    // builder.addCase(forgetPassVerify.fulfilled, (state, { payload }) => {
    //   alert(payload.message);
    // });
    // builder.addCase(logout.fulfilled, (state) => {
    //   state.isAuthenticated = false;
    // });
  },
});

const selectAuthenticated = (state) => state.auth.isAuthenticated;
const selectAuthData = (state) => state.auth;
// Export the slice reducer
const { setIsAuthenticated, setNavActive } = authSlice.actions;

export {
  selectAuthenticated,
  selectAuthData,
  // logout,
  login,
  signup,
  // forgetPass,
  // forgetPassVerify,
  setIsAuthenticated,
  setNavActive,
};

export default authSlice.reducer;
