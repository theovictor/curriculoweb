import React, { useState } from 'react';
import { Button, Row, Col } from 'reactstrap';
import axios from 'axios'
import { api_file2, api_file } from '../../services/api.js';
import { useSelector, useDispatch } from 'react-redux'
import userActions from '../../store/actions/userActions'

export default function Upload() {

  const dispatch = useDispatch();
  const rd_user = useSelector(state => state.userReducer)
  const [imagem, setImagem] = useState() //nova imagem

  const enviar_imagem = async (e) => {
    e.preventDefault()
    const formData = new FormData();
    const headers = { 'Content-Type': 'application/json', 'Authorization': `Bearer ${sessionStorage.getItem('token')}` } //indicando que os dados serão enviados em JSON 
    formData.append('thumbnail', imagem) //coluna 'imagem' recebe o imagem do front (useState) 
    await axios.put(api_file2, formData, { headers })
      .then((response) => {
        dispatch(userActions.busca_user())
      }).catch(() => { })
  }

  return (
    <>
      <Row className="justify-content-center">
        <Col className="order-lg-2" lg="3">
          <div className="card-profile-image">
            {imagem
              ?
              <img className="fileImg" src={URL.createObjectURL(imagem)} alt="Foto" />
              :
              rd_user.logged?.thumbnail ?
                <img className="fileImg" src={`${api_file}/${rd_user.logged.thumbnail}`} alt="..." />
                :
                rd_user?.foto?
                  <img className="foto-nav rounded-circle" src={`${api_file}/${rd_user.foto}`} alt=""/>
                :
                <div className="rounded-circle" />
            }
          </div>
        </Col>
      </Row>
      <Button className="btn-img">
        <label htmlFor='file' className='btnAddImage'>
          Adicionar Foto
        </label>
      </Button>
      <input id='file' style={{ display: 'none' }} type="file" onChange={e => setImagem(e.target.files[0])} />
      <br />
      <Button className="mt-4 btn-img bg-gradient-success text-white border-0" onClick={enviar_imagem}>Salvar</Button>
    </>
  )
}