import constants from "../constants";

const initialState = {
  categories: {
    loading: true,
  },
  universities: {
    loading: true,
  },
  trending: {
    loading: true,
  },
};

const common = (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.GETCATEGORIES:
      return {
        ...state,
        categories: {
          ...state.categories,
          ...payload,
        },
      };
    case constants.GETUNIVERSITIES:
      return {
        ...state,
        universities: {
          ...state.universities,
          ...payload,
        },
      };

    default:
      return state;
  }
};

export default common;
