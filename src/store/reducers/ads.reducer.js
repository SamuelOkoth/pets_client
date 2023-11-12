import { postRequest, getRequest, deleteRequest } from "../../config/axiosConfig";
import { createAd,createFavAd, getAd, deleteAd, searchAd,complexFilter, searchByType, searchByCountry } from "../slices/ads.slice";

export function createAdsAsync(data) {
  return async (dispatch, _getState) => {
    const res = await postRequest("api/v1/pets", data);
    dispatch(createAd(res?.ad));
    window.location.replace(res.checkout_link);
  };
}
export function createFavAdsAsync(data) {
  return async (dispatch, _getState) => {
    const res = await postRequest("favourite_ads", data);
    console.log(data);
    // if(res){

    //   window.location.replace("/favoriteads");
    // }
    dispatch(createFavAd());
  };

}

export function getAdsAsync() {
  return async (dispatch, _getState) => {
    const res = await getRequest("api/v1/pets");
    dispatch(getAd(res));
  };
}

export function getMyAdsAsync() {
  return async (dispatch, _getState) => {
    const res = await getRequest("api/v1/myads");
    dispatch(getAd(res));
  };
}

export function deleteAdsAsync(id) {
  return async (dispatch, _getState) => {
    await deleteRequest(`api/v1/pets/${id}`);
    dispatch(deleteAd(id));
  };
}
// SEARCH
export function searchAds(searchString) {
  return (dispatch, _getState) => {
    dispatch(searchAd(searchString));
  };
}
export function complexSearch(type, country) {
  return (dispatch, _getState) => {
    dispatch(complexFilter({type, country}));
  };
}
export function searchCountry(country) {
  return (dispatch, _getState) => {
    dispatch( searchByCountry(country));
  };
}
export function searchType(type) {
  return (dispatch, _getState) => {
    dispatch( searchByType(type));
  };
}
