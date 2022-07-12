export const CHECK_STATUS = 'CHECK_STATUS';

export const initialState = {
  status: [],
};

export default function categoriesReducer(state = initialState, action = {}) {
  switch (action.type) {
    case CHECK_STATUS:
      return 'UNDER CONSTRUCTION';
    default:
      return state;
  }
}

export function checkStatus(status) {
  return {
    type: CHECK_STATUS,
    status,
  };
}
