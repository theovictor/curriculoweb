import React, {useState, createRef} from 'react';
import PropTypes from "prop-types";
import {Button} from 'reactstrap';
import { api_file } from '../../services/api.js';

import defaultImage from "assets/img/image_placeholder.jpg";
import defaultAvatar from "assets/img/placeholder.jpg";

export default function Upload(){

  const imagem = sessionStorage.getItem('thumbnail')
  const avatar = `${api_file}/${imagem}`
  
  const [file, setFile] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState(
    (imagem !== 'undefined') ? avatar : defaultImage
  );
  const fileInput = createRef();
  const handleImageChange = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      setFile(file);
      setImagePreviewUrl(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };
  // const handleSubmit = e => {
  // e.preventDefault();
  // this.state.file is the file/image uploaded
  // in this function you can save the image (this.state.file) on form submit
  // you have to call it yourself
  // };
  const handleClick = () => {
    fileInput.current.click();
  };
  const handleRemove = () => {
    setFile(null);
    setImagePreviewUrl(avatar ? defaultAvatar : defaultImage);
    fileInput.current.value = null;
  };
  return (
    <div className="fileinput text-center">
      <input type="file" onChange={handleImageChange} ref={fileInput} />
      <div
        className={
          "fileinput-new thumbnail img-raised" +
          (avatar ? " img-circle" : "")
        }
      >
        <img className="fileImg" src={imagePreviewUrl} alt="..." />
      </div>
      <div className="btn-foto">
        {file === null ? (
          <Button className="btn-round" color="default" size="sm" onClick={handleClick}>
            {avatar ? "Add Foto" : "Select image"}
          </Button>
        ) : (
          <span className="btn-upload-foto">
            <Button color="default" size="sm" onClick={handleClick}>
              Alterar
            </Button>
            {avatar ? <br /> : null}
            <Button color="success" size="sm" onClick={handleRemove}>
              Salvar
            </Button>
            {avatar ? <br /> : null}
            <Button color="danger" size="sm" onClick={handleRemove}>
              Remover
            </Button>
          </span>
        )}
      </div>
    </div>
  );
}

// Upload.propTypes = {
//   avatar: PropTypes.bool,
// };