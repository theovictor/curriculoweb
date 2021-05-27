import axios from 'axios';
import { api_login } from '../../services/api'
// requisição de login
// const req_login = () => {
//   return dispatch => {
//     axios.get(api_login)
//       .then(res => {
//         dispatch(login(res.data))
//       })
//   };
// };
  const login = (values) => {
      return { type: 'LOGIN', values };
  };

  const edit = values => {
    return { type: 'EDIT', values };
  };

  export default { login, edit };