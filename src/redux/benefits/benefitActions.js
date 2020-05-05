import {
	FETCH_BENEFITS_REQUEST,
	FETCH_BENEFITS_SUCCESS,
	FETCH_BENEFITS_FAILURE,
	SELECT_BENEFITS_CHECKBOXES,
} from "./benefitActionTypes";
import data from "../../benefits.json";

//import data from ‘./data/data.json’;

export const fetchBenefitsRequest = () => {
	return {
		type: FETCH_BENEFITS_REQUEST,
	};
};

export const fetchBenefitsSuccess = (benefits) => {
	return {
		type: FETCH_BENEFITS_SUCCESS,
		payload: benefits,
	};
};

export const fetchBenefitsFailure = (error) => {
	return {
		type: FETCH_BENEFITS_FAILURE,
		payload: error,
	};
};

export const selectBenefitCheckBoxes = (categoty) => {
	console.log("action categoty", categoty);
	return {
		type: SELECT_BENEFITS_CHECKBOXES,
		payload: categoty,
	};
};

export const fetchBenefits = () => {
	return (dispatch) => {
		dispatch(fetchBenefitsRequest());
		if (data) {
			//console.log("DATATAT: " + data.packageName);
			const benefits = data;
			dispatch(fetchBenefitsSuccess(benefits));
		} else {
			dispatch(fetchBenefitsFailure("Error"));
		}
	};
};
