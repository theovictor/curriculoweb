import axios from 'axios';
import { api_user } from '../../services/api'
// requisição de login

const busca_user = (token) => {
  return dispatch => {
    axios.get(api_user, {headers: {Authorization: `Bearer ${sessionStorage.getItem('token')}`}})
      .then(res => {
        dispatch(login(res.data))
      })
  };
};
  const login = (values) => {
      return { type: 'LOGIN', values };
  };
  const user_name = (values) => {
      return { type: 'USER_NAME', values };
  };
  
  const carrega_foto = (values) => {
      return { type: 'CARREGA_FOTO', values };
  };

  const edit = values => {
    return { type: 'EDIT', values };
  };

  export default { 
    login, 
    edit, 
    user_name, 
    carrega_foto,
    busca_user,
   };