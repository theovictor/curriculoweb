export const initialState = {
  show_curriculo: null,
  show_formacao: null,
  show_conhecimento: null,
  show_experiencia: null,
  edit_mode: false,
  modal_escola: false,
  modal_conhecimento: false,
  modal_experiencia: false,
}
 //  curriculoReducer.js
const curriculoReducer = (state = initialState, action) => {
  switch (action.type) {
  //  case 'INDEX': return { ...state, dados_api: action.values }; // sempre que precisar alterar o state, tem que fazer a desestruturação para add a action dentro do state
   case 'SHOW_CURRICULO': return { ...state, show_curriculo: action.values }; // sempre que precisar alterar o state, tem que fazer a desestruturação para add a action dentro do state
   case 'SHOW_FORMACAO': return { ...state, show_formacao: action.values }; // sempre que precisar alterar o state, tem que fazer a desestruturação para add a action dentro do state
   case 'SHOW_CONHECIMENTO': return { ...state, show_conhecimento: action.values }; // sempre que precisar alterar o state, tem que fazer a desestruturação para add a action dentro do state
   case 'SHOW_EXPERIENCIA': return { ...state, show_experiencia: action.values }; // sempre que precisar alterar o state, tem que fazer a desestruturação para add a action dentro do state
   case 'EDIT_MODE': return { ...state, edit_mode: action.values };
   case 'MODAL_ESCOLA': return { ...state, modal_escola: action.values };
   case 'MODAL_CONHECIMENTO': return { ...state, modal_conhecimento: action.values };
   case 'MODAL_EXPERIENCIA': return { ...state, modal_experiencia: action.values };
   default: return state
   }
}

export default curriculoReducer;