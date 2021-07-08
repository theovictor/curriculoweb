// import React from 'react'
import { useDispatch } from 'react-redux'
import curriculoActions from "store/actions/curriculoActions";

export const useIdade = () =>{
  const dispatch = useDispatch()
  
    const calc_idade = (dataNascimento) => {
      // console.log(dataNascimento)
      const dataInfo = dataNascimento;
      const anoAtual = new Date().getFullYear();
      const dataInfoParts = dataInfo.split('-');
      const anoNasc = dataInfoParts[0];
      const mesNasc = dataInfoParts[1];
      const diaNasc = dataInfoParts[2];
      let age = anoAtual - anoNasc;
      const mesAtual = new Date().getMonth() + 1;
      if (mesAtual < mesNasc) {
        age--;
      } else {
        if (mesAtual === mesNasc) {
          if (new Date().getDate() < diaNasc) {
            age--;
          }
        }
      }
      return (
        // age.toString(),
        // console.log(age),
        dispatch(curriculoActions.idade(age.toString()))
      )
    }
    return {
      calc_idade
    }

}
