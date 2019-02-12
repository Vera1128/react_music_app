/**
 * Created by yangyang.xu on 2017/11/28.
 */
import { combineReducers } from "redux";

const initState = [];

export function red_articles_list(state = initState, action) {
  switch (action.type) {
    case "GET_ARTICLES_LIST_SUCCESS":
      return action.data;
      break;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  red_articles_list
})
export default rootReducer
