export const initialState = {
  logged: null,
  dados_api: [],
  edit: null,
}
 //  userReducer.js
const userReducer = (state = initialState, action) => {
  switch (action.type) {
   case 'LOGIN': return { ...state, logged: action.values }; // sempre que precisar alterar o state, tem que fazer a desestruturação para add a action dentro do state
   case 'INDEX': return { ...state, dados_api: action.values }; // sempre que precisar alterar o state, tem que fazer a desestruturação para add a action dentro do state
   case 'EDIT': return { ...state, edit: action.values };
   default: return state
   }
}

export default userReducer;