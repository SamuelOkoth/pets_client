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
    dispatch(sendMessage(res || []));
    return res || [];
  };
}

export function GetMyMessagesAsync() {
  return async (dispatch, _getState) => {
    try {
      const res = await getRequest("api/v1/conversations");
      dispatch(getMyMessages(res || []));
      return res || [];
    } catch (error) {
      console.error("Error fetching conversations:", error);
      throw error;
    }
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
      dispatch(getMyMessage(res || []));
      return res || [];
    } catch (error) {
      // Handle error if needed
      console.error("Error fetching conversation:", error);
    }
  };
}