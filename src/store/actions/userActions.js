import axios from 'axios';
import { api_user } from '../../services/api'

const busca_user = () => {
  return dispatch => {
    axios.get(api_user, {headers: {Authorization: `Bearer ${sessionStorage.getItem('token')}`}})
      .then(res => {
        dispatch(add_user(res.data))
        dispatch(carrega_foto(res.data.thumbnail))
      })
  };
};
  
  const add_token = (values) => {
      return { type: 'ADD_TOKEN', values };
  };
  
  const add_user = (values) => {
      return { type: 'ADD_USER', values };
  };
  
  const carrega_foto = (values) => {
      return { type: 'CARREGA_FOTO', values };
  };

  const edit = values => {
    return { type: 'EDIT', values };
  };

  const add_controle = () => {
    return { type: 'ADD_CONTROLE' };
  };

  export default { 
    add_token, 
    edit, 
    add_user, 
    carrega_foto,
    busca_user,
    add_controle,
   };