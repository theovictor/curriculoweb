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

const show_curriculo = (values) => {return { type: 'SHOW_CURRICULO', values }};
const show_formacao = (values) => {return { type: 'SHOW_FORMACAO', values }};
const show_conhecimento = (values) => {return { type: 'SHOW_CONHECIMENTO', values }};
const show_experiencia = (values) => {return { type: 'SHOW_EXPERIENCIA', values }};
const edit_mode = values => {return { type: 'EDIT_MODE', values };};
const modal_escola = values => {return { type: 'MODAL_ESCOLA', values };};
const modal_conhecimento = values => {return { type: 'MODAL_CONHECIMENTO', values };};
const modal_experiencia = values => {return { type: 'MODAL_EXPERIENCIA', values };};

export default {
  busca_curriculo,
  show_curriculo,
  show_formacao,
  show_conhecimento,
  show_experiencia,
  edit_mode,
  modal_escola,
  modal_conhecimento,
  modal_experiencia
};
