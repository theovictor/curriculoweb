import axios from 'axios';
import { api_curriculo } from '../../services/api'

const busca_curriculo = (user_id) => {
  return dispatch => {
    axios.get(`${api_curriculo}?id=${user_id}`)
      .then(res => {
        dispatch(show_curriculo(res.data))
      })
  };
};

const show_curriculo = (values) => {
    return { type: 'SHOW_CURRICULO', values }
};

const edit_mode = values => {return { type: 'EDIT_MODE', values };};

export default {
  busca_curriculo,
  show_curriculo,
  edit_mode
};