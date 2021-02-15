import constants from "../constants";

const initialState = {
  data: [],
  minimized: false,
};

const compare = (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.SETCOMPARE:
      return { ...state, data: [...state.data, payload] };
    case constants.REMOVECOMPARE:
      return { ...state, data: payload };
    case constants.REMOVEALLCOMPARE:
      return { ...state, data: [] };
    case constants.SETMINIMISZED:
      return { ...state, minimized: payload };
    default:
      return state;
  }
};

export default compare;
