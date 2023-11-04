import {
  deleteMessage,
  getMyMessages,
  sendMessage,
} from "../slices/messages.slice";
import {
  postRequest,
  getRequest,
  deleteRequest,
} from "../../config/axiosConfig";

export function sendMessageAsync(data) {
  return async (dispatch, _getState) => {
    const res = await postRequest("api/messages", data);
    dispatch(sendMessage(res?.message));
  };
}

export function GetMyMessagesAsync(data) {
  return async (dispatch, _getState) => {
    const res = await getRequest("api/messages");
    dispatch(getMyMessages(res));
  };
}

export function deleteAdsAsync(id) {
  return async (dispatch, _getState) => {
    await deleteRequest(`api/messages/${id}`);
    dispatch(deleteMessage(id));
  };
}
