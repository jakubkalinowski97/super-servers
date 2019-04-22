import { combineReducers } from "redux";
import { servers, serversSearch } from './servers';
     
export default combineReducers({
    servers,
    serversSearch
})