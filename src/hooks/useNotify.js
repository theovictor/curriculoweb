import React, { useState, useRef } from 'react'

export const useNotify = () => {


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


  return {
    notify,
    notifica
  }
}
