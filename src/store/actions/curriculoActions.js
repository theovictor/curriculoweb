import axios from 'axios';
import { api_curriculos } from '../../services/api'
  

const busca_dados_api = () => {
  return dispatch => {
    axios.get(api_curriculos)
      .then(res => {
        dispatch(index(res.data))
      })
  };
};


  const index = (values) => {
      return { type: 'INDEX', values }
  };

  const edit = values => {return { type: 'EDIT', values };};

  export default { index, edit, busca_dados_api };