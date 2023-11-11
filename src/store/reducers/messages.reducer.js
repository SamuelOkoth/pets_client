import {
  deleteMessage,
  getMyMessages,
  getMyMessage,
  sendMessage,
} from "../slices/messages.slice";
import {
  postRequest,
  getRequest,
  deleteRequest,
} from "../../config/axiosConfig";

export function sendMessageAsync(data) {
  return async (dispatch, _getState) => {
    const res = await postRequest("api/v1/conversations", data);
    dispatch(sendMessage(res?.message));
  };
}

export function GetMyMessagesAsync(data) {
  return async (dispatch, _getState) => {
    const res = await getRequest("api/v1/conversations");
    dispatch(getMyMessages(res));
  };
}

export function deleteAdsAsync(id) {
  return async (dispatch, _getState) => {
    await deleteRequest(`api/v1/conversations/${id}`);
    dispatch(deleteMessage(id));
  };
}

export function GetMyMessageAsync(id) {
  return async (dispatch, _getState) => {
    try {
      const res = await getRequest(`api/v1/conversations/${id}`);
      dispatch(getMyMessage(res));  // Assuming `getMyMessage` is your action creator
      return res.messages || [];  // Return messages array directly
    } catch (error) {
      // Handle error if needed
      console.error("Error fetching conversation:", error);
      throw error;  // Rethrow the error to be caught in the component
    }
  };
}