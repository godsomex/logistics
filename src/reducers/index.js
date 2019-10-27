import { combineReducers } from "redux";
import shipmentReducer from "./shipmentReducer";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
  shipment: shipmentReducer,
  auth: authReducer,
  error: errorReducer
});
