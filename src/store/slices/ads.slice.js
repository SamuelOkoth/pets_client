import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ads: [],
};

const adsSlice = createSlice({
  name: "ads",
  initialState,
  reducers: {
    createAd: (state, action) => {
      state.ads.push(action.payload);
    },
    getAd: (state, action)=>{
      state.ads = action.payload;
    },
    deleteAd: (state, action)=>{
      state.ads = state.ads.filter((ad) => ad.id !== action.payload);
    }
  },
});

export const createAd = adsSlice.actions.createAd
export const getAd = adsSlice.actions.getAd
export const deleteAd = adsSlice.actions.deleteAd


const AdsSlice = adsSlice.reducer;
export default AdsSlice;
