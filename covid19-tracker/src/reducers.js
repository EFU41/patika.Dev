// reducers.js
const initialState = {
  countryData: {},
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_COUNTRY_DATA":
      return {
        ...state,
        countryData: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
