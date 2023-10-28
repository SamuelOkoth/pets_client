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
    },
    searchAd: (state,action)=>{
      state.ads = state.ads.filter((ad)=> ad.name.includes(action.payload))
      // if(!action.payload){
      //   state.ads = 
      // }
    }
  },
});

export const createAd = adsSlice.actions.createAd
export const getAd = adsSlice.actions.getAd
export const deleteAd = adsSlice.actions.deleteAd
export const searchAd = adsSlice.actions.searchAd


const AdsSlice = adsSlice.reducer;
export default AdsSlice;
