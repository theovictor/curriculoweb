export const initialState = {
  logged: null,
  user: null,
  edit: null,
  foto: null,
}
//  userReducer.js
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TOKEN': return { ...state, logged: action.values };
    case 'ADD_USER': return { ...state, user: action.values };
    case 'EDIT': return { ...state, edit: action.values };
    case 'CARREGA_FOTO': return { ...state, foto: action.values };
    default: return state
  }
}

export default userReducer;