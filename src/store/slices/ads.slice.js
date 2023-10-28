import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ads: [],
  filteredAds: [],  // For holding search results
  searchTerm: "",   // For holding the current search string (optional)
};

const adsSlice = createSlice({
  name: "ads",
  initialState,
  reducers: {
    createAd: (state, action) => {
      state.ads.push(action.payload);
      if (action.payload.name.includes(state.searchTerm)) {
        state.filteredAds.push(action.payload);
      }
    },
    getAd: (state, action) => {
      state.ads = action.payload;
      state.filteredAds = action.payload;
    },
    deleteAd: (state, action) => {
      state.ads = state.ads.filter((ad) => ad.id !== action.payload);
      state.filteredAds = state.filteredAds.filter((ad) => ad.id !== action.payload);
    },
    searchAd: (state, action) => {
      state.searchTerm = action.payload;
      state.filteredAds = state.ads.filter((ad) => ad.name.includes(action.payload));
    },
  },
});

export const { createAd, getAd, deleteAd, searchAd } = adsSlice.actions;
export default adsSlice.reducer;
