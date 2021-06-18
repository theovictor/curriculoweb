import React, { useState, createRef } from 'react';
import PropTypes from "prop-types";
import { Button, Form, FormGroup } from 'reactstrap';
import axios from 'axios'
import { api_file2 } from '../../services/api.js';

import defaultImage from "assets/img/image_placeholder.jpg";
import defaultAvatar from "assets/img/placeholder.jpg";

export default function Upload() {

  // const imagem = sessionStorage.getItem('thumbnail')
  // const avatar = `${api_file}/${imagem}`

  // const [file, setFile] = useState(null);
  // const [imagePreviewUrl, setImagePreviewUrl] = useState(
  //   (imagem !== 'undefined') ? avatar : defaultImage
  // );
  // const fileInput = createRef();
  // const handleImageChange = (e) => {
  //   e.preventDefault();
  //   let reader = new FileReader();
  //   let file = e.target.files[0];
  //   reader.onloadend = () => {
  //     setFile(file);
  //     setImagePreviewUrl(reader.result);
  //   };
  //   if (file) {
  //     reader.readAsDataURL(file);
  //   }
  // };

  const [imagem, setImagem] = useState('') //nova imagem
  const [imagePreviewUrl, setImagePreviewUrl] = useState(); //imagem atual

  const editarAnuncioImagem = async (e) => {
    e.preventDefault()
    const formData = new FormData();
    const headers = { 'Content-Type': 'application/json', 'Authorization': `Bearer ${sessionStorage.getItem('token')}` } //indicando que os dados serão enviados em JSON 
    formData.append('thumbnail', imagem) //coluna 'imagem' recebe o imagem do front (useState) 
    await axios.put(api_file2, formData, { headers })
      .then((response) => {
        
      }).catch(() => {

      })
  }

  // const handleSubmit = e => {
  // e.preventDefault();
  // this.state.file is the file/image uploaded
  // in this function you can save the image (this.state.file) on form submit
  // you have to call it yourself
  // };
  // const handleClick = () => {
  //   fileInput.current.click();
  // };
  // const handleRemove = () => {
  //   setFile(null);
  //   setImagePreviewUrl(avatar ? defaultAvatar : defaultImage);
  //   fileInput.current.value = null;
  // };
  return (

    <Form onSubmit={editarAnuncioImagem}>
      <input type="file" name="imagem" onChange={e => setImagem(e.target.files[0])} />
      <FormGroup>
        {imagem 
        ? <img src={URL.createObjectURL(imagem)} alt="Imagem anuncio" width="150" heigh="150" /> //se
        : <img src={imagePreviewUrl} alt="Imagem anuncio" width="150" heigh="150" /> //senao
        } 
      </FormGroup>
      <Button className="mt-4" type="submit" color="danger">Salvar</Button>
    </Form>

  )

}
// Upload.propTypes = {
//   avatar: PropTypes.bool,
// };