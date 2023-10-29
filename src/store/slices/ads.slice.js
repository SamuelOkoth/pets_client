import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ads: [],
  favAds: [],
  filteredAds: [],
  searchTerm: "",
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
    createFavAd: (state, action) => {
      state.favAds.push(action.payload);
    },

    getAd: (state, action) => {
      state.ads = action.payload;
      state.filteredAds = action.payload;
    },
    deleteAd: (state, action) => {
      state.ads = state.ads.filter((ad) => ad.id !== action.payload);
      state.filteredAds = state.filteredAds.filter(
        (ad) => ad.id !== action.payload
      );
    },
    searchAd: (state, action) => {
      if (action.payload) {
        state.searchTerm = action.payload;
        state.filteredAds = state.ads.filter((ad) => {
          return ad.name.toLowerCase().includes(action.payload.toLowerCase());
        });
      } else {
        state.filteredAds = state.ads;
      }
    },
    complexFilter: (state, action) => {
      console.log(state.filteredAds);
      state.filteredAds = state.filteredAds.filter((ad) => {
        return (
          ad.country
            .toLowerCase()
            .includes(action.payload.country.toLowerCase()) &&
          ad.category
            .toLowerCase()
            .includes(action.payload.category.toLowerCase())
        );
      });
    },
    searchByCountry: (state, action) => {
      if (action.payload) {
        state.filteredAds = state.ads.filter(
          (ad) => ad.country.toLowerCase().includes(action.payload.toLowerCase())
        );
      }else{
        state.filteredAds = state.ads;
      }
    },
    searchByType: (state, action) => {
      state.filteredAds = state.ads.filter(
        (ad) => ad.category.toLowerCase() === action.payload.toLowerCase()
      );
    },
  },
});

export const {
  createAd,
  createFavAd,
  getAd,
  deleteAd,
  searchAd,
  complexFilter,
  searchByCountry,
  searchByType,
} = adsSlice.actions;
export default adsSlice.reducer;
