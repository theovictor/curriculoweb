import React from 'react';
import PropTypes from "prop-types";
import {Button} from 'reactstrap';

import defaultImage from "assets/img/image_placeholder.jpg";
import defaultAvatar from "assets/img/placeholder.jpg";

export default function Upload(props){
  const [file, setFile] = React.useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = React.useState(
    props.avatar ? defaultAvatar : defaultImage
  );
  const fileInput = React.createRef();
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
    setImagePreviewUrl(props.avatar ? defaultAvatar : defaultImage);
    fileInput.current.value = null;
  };
  return (
    <div className="fileinput text-center">
      <input type="file" onChange={handleImageChange} ref={fileInput} />
      <div
        className={
          "fileinput-new thumbnail img-raised" +
          (props.avatar ? " img-circle" : "")
        }
      >
        <img className="fileImg" src={imagePreviewUrl} alt="..." />
      </div>
      <div>
        {file === null ? (
          <Button className="btn-round" color="default" onClick={handleClick}>
            {props.avatar ? "Add Foto" : "Select image"}
          </Button>
        ) : (
          <span>
            <Button className="btn-round" color="default" onClick={handleClick}>
              Alterar
            </Button>
            {props.avatar ? <br /> : null}
            <Button color="danger" className="btn-round" onClick={handleRemove}>
              <i className="fa fa-times" /> Remover
            </Button>
          </span>
        )}
      </div>
    </div>
  );
}

Upload.propTypes = {
  avatar: PropTypes.bool,
};