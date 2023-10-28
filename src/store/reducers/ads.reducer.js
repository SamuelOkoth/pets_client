import { postRequest, getRequest, deleteRequest } from "../../config/axiosConfig";
import { createAd, getAd, deleteAd, searchAd } from "../slices/ads.slice";

export function createAdsAsync(data) {
  return async (dispatch, _getState) => {
    const res = await postRequest("api/v1/ads", data);
    dispatch(createAd(res?.ad));
    window.location.replace(res.checkout_link);
  };
}

export function getAdsAsync() {
  return async (dispatch, _getState) => {
    const res = await getRequest("api/v1/ads");
    dispatch(getAd(res));
  };
}

export function deleteAdsAsync(id) {
  return async (dispatch, _getState) => {
    await deleteRequest(`api/v1/ads/${id}`);
    dispatch(deleteAd(id));
  };
}

export function searchAds(searchString) {
  return (dispatch, _getState) => {
    dispatch(searchAd(searchString));
  };
}
