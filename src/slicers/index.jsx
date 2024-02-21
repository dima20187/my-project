import { combineReducers } from "redux";
import dashbordSlice from "./dashboardSlice";

export default combineReducers({
    [dashbordSlice.name]: dashbordSlice.reducer,
});