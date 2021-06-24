import React, {useRef, useEffect} from "react";
import Routes from './Routes'
// import { useSelector, useDispatch } from 'react-redux'
// import userActions from './store/actions/userActions'
import NotificationAlert from "react-notification-alert";

function App() {


  const notifica = useRef()

  const notify = (type, msg) => {
    const options = {
      place: 'tc',
      message: (
        <div className="alert-text">
          <span className="alert-title" data-notify="title">
            {''}
           Aviso
          </span>
          <span data-notify="message">{msg}</span>
        </div>
      ),
      type: type,
      icon: "ni ni-bell-55",
      autoDismiss: 3
    };
    notifica.current.notificationAlert(options)
  };

  
  useEffect(() => {
    notify('TESTE')
  }, [])

  return (
    <>
      <div className="rna-wrapper"><NotificationAlert ref={notifica} /></div>
      <Routes />
    </>
  );
}

export default App;
