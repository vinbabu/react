import {
	FETCH_BENEFITS_REQUEST,
	FETCH_BENEFITS_SUCCESS,
	FETCH_BENEFITS_FAILURE,
	SELECT_BENEFITS_CHECKBOXES,
} from "./benefitActionTypes";

const initialState = {
	loading: false,
	benefits: [],
	error: "",
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_BENEFITS_REQUEST:
			return {
				...state,
				loading: true,
			};
		case FETCH_BENEFITS_SUCCESS:
			return {
				loading: false,
				benefits: action.payload,
				error: "",
			};
		case FETCH_BENEFITS_FAILURE:
			return {
				loading: false,
				benefits: [],
				error: action.payload,
			};
		case SELECT_BENEFITS_CHECKBOXES:
			console.log("Here >>> ", action);
			return {
				...state,
				loading: false,
				selectedBenefits: action.payload,
				error: "",
			};
		default:
			return state;
	}
};

export default reducer;
