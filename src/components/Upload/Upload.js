import React, { useState, createRef } from 'react';
import PropTypes from "prop-types";
import { Button, Form, FormGroup, Card, Row, Col, Input } from 'reactstrap';
import axios from 'axios'
import { api_file2, api_file } from '../../services/api.js';
import { useSelector, useDispatch } from 'react-redux'
import userActions from '../../store/actions/userActions'

import defaultImage from "assets/img/image_placeholder.jpg";
import defaultAvatar from "assets/img/placeholder.jpg";

export default function Upload() {

  const dispatch = useDispatch();
  const rd_user = useSelector(state => state.userReducer)
  const [imagem, setImagem] = useState() //nova imagem
  const [imagePreviewUrl, setImagePreviewUrl] = useState(); //imagem atual

  const enviar_imagem = async (e) => {
    e.preventDefault()
    const formData = new FormData();
    const headers = { 'Content-Type': 'application/json', 'Authorization': `Bearer ${sessionStorage.getItem('token')}` } //indicando que os dados serão enviados em JSON 
    formData.append('thumbnail', imagem) //coluna 'imagem' recebe o imagem do front (useState) 
    await axios.put(api_file2, formData, { headers })
      .then((response) => {
        dispatch(userActions.busca_user())
      }).catch(() => {

      })
  }

  return (
    <>
      <Row className="justify-content-center">
        <Col className="order-lg-2" lg="3">
          <div className="card-profile-image">
            {imagem
              ?
              <img className="rounded-circle" src={URL.createObjectURL(imagem)} alt="Foto" />
              :
              rd_user.logged?.thumbnail ?

              
                <img className="fileImg" src={`${api_file}/${rd_user.logged.thumbnail}`} alt="..." />
                :
                <div className="rounded-circle" />
            }
          </div>
        </Col>
      </Row>

      <Button>
        <label htmlFor='file' className='btnAddImage'>
        Adicionar Foto
        </label>
      </Button>
        <input id='file' style={{ display: 'none' }} type="file" onChange={e => setImagem(e.target.files[0])} />
      <br />
      <Button className="mt-4" onClick={enviar_imagem} color="success">Salvar</Button>

    </>

  )

}
// Upload.propTypes = {
//   avatar: PropTypes.bool,
// };