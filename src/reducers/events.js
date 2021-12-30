import _ from "lodash";
import { DELETE_EVENT, READ_EVENTS } from "../actions";

export default (events = {}, action) => {
  switch (action.type) {
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
