export const initialState = {
  logged: null,
  edit: null,
  foto: null,
}
 //  userReducer.js
const userReducer = (state = initialState, action) => {
  switch (action.type) {
   case 'LOGIN': return { ...state, logged: action.values };
   case 'EDIT': return { ...state, edit: action.values };
   case 'CARREGA_FOTO': return { ...state, foto: action.values };
   default: return state
   }
}

export default userReducer;