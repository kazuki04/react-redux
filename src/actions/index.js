import axios from "axios";

const ROOT_URL = "https://udemy-utils.herokuapp.com/api/v1";
const QUERYSTRING = "?token=token123";

export const READ_EVENTS = "READ_EVENTS";
export const CREATE_EVENT = "CREATE_EVENTS";
// ピュアなオブジェクトを返さなければならない
// →readEvents関数内で非同期処理はできない
export const readEvents = () => async (dispatch) => {
  const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`);
  dispatch({ type: READ_EVENTS, response });
};

export const postEvent = (values) => async (dispatch) => {
  const response = await axios.post(`${ROOT_URL}/events${QUERYSTRING}`, values);
  dispatch({ type: CREATE_EVENT, response });
};
