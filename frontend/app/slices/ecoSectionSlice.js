import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import config from '../../config/config';
import FetchApi from '../../utility/client';

const getData = createAsyncThunk('ecoSection/getData', async (payload) => {
  
  return FetchApi.fetch(`${config.api}/api/eco/get/ecosection`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
});

// Define a slice of state for authentication
const ecoSectionSlice = createSlice({
  name: 'ecoSection',
  initialState: {
    ecoData: {},
    language: 'english'
  },
  reducers: {
    changeLanguage(state, { payload }) {
        state.language = payload.language;
    }
  },
  extraReducers(builder) {
    builder.addCase(getData.fulfilled, (state, { payload }) => {
      state.ecoData[payload.data.type] = payload.data;
    });
  },
});

const selectEcoSectionData = (state) => state.ecoSection;
const { changeLanguage } = ecoSectionSlice.actions;

export {
    getData,
    selectEcoSectionData,
    changeLanguage
};

export default ecoSectionSlice.reducer;
