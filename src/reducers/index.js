import { combineReducers } from "redux";
import score from "./savescore";
import sound from "./sound";
import timer from "./timer";
import time from "./time";
import user from "./user";
import choosefriend from "./choosefriend";
import choosealarm from "./choosealarm";
import choosecall from "./choosecall";
import allchoose from "./allchoose";
import fireroom from "./fireroom";
import share from "./share";

export default combineReducers({
  score,
  sound,
  timer,
  time,
  user,
  allchoose,
  choosefriend,
  choosecall,
  choosealarm,
  fireroom,
  share
})