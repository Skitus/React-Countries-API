import axios from "axios";

let initialState = {
    countries: []
};

const main  = (state = initialState,  action) => {
    switch(action.type) {
        case "SET_COUNTRIES": {
            return {
                ...state,
                countries: action.payload
            }
        }
        default:
            return state;
    }
}

export const setCountries = (items) => ({
    type: "SET_COUNTRIES",
    payload: items
});

export const fetchCountries = () => (dispatch) => {
    axios.get("https://restcountries.eu/rest/v2/all").then(({data}) => {
        dispatch(setCountries(data));
    })
}

export default main;