export const initialState = {
  show_curriculo: [],
  edit_mode: false,
}
 //  curriculoReducer.js
const curriculoReducer = (state = initialState, action) => {
  switch (action.type) {
  //  case 'INDEX': return { ...state, dados_api: action.values }; // sempre que precisar alterar o state, tem que fazer a desestruturação para add a action dentro do state
   case 'SHOW_CURRICULO': return { ...state, show_curriculo: action.values }; // sempre que precisar alterar o state, tem que fazer a desestruturação para add a action dentro do state
   case 'EDIT_MODE': return { ...state, edit_mode: action.values };
   default: return state
   }
}

export default curriculoReducer;