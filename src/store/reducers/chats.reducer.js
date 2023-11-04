import { postRequest, getRequest, deleteRequest } from "../../config/axiosConfig";
import { getConversations,getConversation, getMessages, sendMessage, deleteConversation } from "../slices/ads.slice";

export function createAdsAsync(data) {
  return async (dispatch, _getState) => {
    const res = await postRequest("api/v1/ads", data);
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
    const res = await getRequest("api/v1/ads");
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
    await deleteRequest(`api/v1/ads/${id}`);
    dispatch(deleteAd(id));
  };
}
// SEARCH
export function searchAds(searchString) {
  return (dispatch, _getState) => {
    dispatch(searchAd(searchString));
  };
}
export function complexSearch({}) {
  return (dispatch, _getState) => {
    dispatch(complexFilter({}));
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
