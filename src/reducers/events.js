import _ from "lodash";
import {
  CREATE_EVENT,
  DELETE_EVENT,
  READ_EVENT,
  READ_EVENTS,
  UPDATE_EVENT,
} from "../actions";

export default (events = {}, action) => {
  switch (action.type) {
    case CREATE_EVENT:
    case READ_EVENT:
    case UPDATE_EVENT:
      const data = action.response.data;
      return { ...events, [data.id]: data };
    case READ_EVENTS:
      return _.mapKeys(action.response.data, "id");
    case DELETE_EVENT:
      delete events[action.id];
      // 新しいメモリ空間上に更新後のeventのオブジェクトを返す
      return { ...events };
    default:
      return events;
  }
};
