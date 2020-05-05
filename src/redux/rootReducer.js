import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import benefitReducer from "./benefits/benefitReducer";

const rootReducer = combineReducers({
  benefits: benefitReducer,
  form: formReducer
});

export default rootReducer;
