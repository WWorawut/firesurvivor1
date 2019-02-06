import { combineReducers } from "redux";
import score from "./savescore";
import sound from "./sound";

export default combineReducers({
  score,
  sound
})