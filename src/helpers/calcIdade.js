// função que calcula a idade, capturando a data fornecida no campo de dataNascimento.
export default function calcIdade (dataNascimento, setFieldValue){
  const dataInfo = dataNascimento;
  const anoAtual = new Date().getFullYear();
  const dataInfoParts = dataInfo.split('-');
  const anoNasc = dataInfoParts[0];
  const mesNasc = dataInfoParts[1];
  const diaNasc = dataInfoParts[2];
  let age =  anoAtual - anoNasc;
  const mesAtual = new Date().getMonth() + 1;
  if(mesAtual < mesNasc){
    setFieldValue('idade', age--);
  }else{
    if(mesAtual === mesNasc){
      if(new Date().getDate() < diaNasc){
        setFieldValue('idade', age--);
      }
    }
  }
  return setFieldValue('idade', age);
}