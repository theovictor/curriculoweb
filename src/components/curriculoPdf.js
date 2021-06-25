
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
// import { useSelector } from 'react-redux'
pdfMake.vfs = pdfFonts.pdfMake.vfs;


// inicio curriculo 
const curriculoPdf = props => {

  let periodo = 'Período';

  console.log(props)
  const { curriculo, conhecimento, experiencias, formacoes } = props

  const docDefinition = {
    pageSize: 'A4',
    pageMargins: [40, 30, 40, 60],
    content: [
      {
        columns: [
          //col nome
          {
            // width: 150,
            alignment: 'left',
            bold: 20,
            fontSize: 23,
            color: 'black',
            text: `${curriculo.nome}`, style: 'quote'
          },

          {
            //col dados
            width: 200,
            alignment: 'right',
            fontSize: 12,
            color: 'gray',
            margin: [0, 0, 0, 0],
            text: `Nascimento: ${curriculo.dataNascimento} \n ${curriculo.logradouro}, \n ${curriculo.bairro},  ${curriculo.cep} \n ${curriculo.cidade} - ${curriculo.estado} \n ${curriculo.telefone}, ${curriculo.email} ${curriculo.nacionalidade} | ${curriculo.civil} `,
          }
        ],
        columnGap: 150,
      },
      '\n',
      {text: 'Objetivo', style: 'header'},
      { canvas: [{ type: 'line', x1: 0, y1: 5, x2: 595 - 2 * 40, y2: 5, lineWidth: 1 }] },
      '\n',
      {text: 'Formação Acadêmica', style: 'header'},
      { canvas: [{ type: 'line', x1: 0, y1: 5, x2: 595 - 2 * 40, y2: 5, lineWidth: 1 }] },
      '\n',

      formacoes.map((item, idx) => [{ text: `Instituição: ${item.instituicao} - ${item.curso} ${item.periodo ? `- ${periodo}: ${item.periodo}º` : ""} - Turno: ${item.turno} - Status: ${item.status} `,}]), '\n',
      
      {text: 'Conhecimento Complementares', style: 'header'},
      { canvas: [{ type: 'line', x1: 0, y1: 5, x2: 595 - 2 * 40, y2: 5, lineWidth: 1 }] }, '\n',
      conhecimento.map((item, idx) => [{ text: `${item.nome} - ${item.nivel}`, }]),
      '\n',
      {text: 'Experiências Profissionais', style: 'header'},
      { canvas: [{ type: 'line', x1: 0, y1: 5, x2: 595 - 2 * 40, y2: 5, lineWidth: 1 }] }, '\n',
       {text: 'Experiências Profissionais', style: 'header'}, experiencias.map((item, idx) => [{ text: `Cargo: ${item.nome} \nLocal: ${item.local} \n Atividade: ${item.atividades} `,}]), '\n',

      '\n',
    ],
    styles: {
      header: {
        fontSize: 15,
        bold: true
      },
      subheader: {
        fontSize: 15,
        bold: true
      },
      quote: {
        italics: true
      },
      small: {
        fontSize: 8
      }
    } 
  }

  // const imgTeste = '../assets/img/logo.png'
  pdfMake.createPdf(docDefinition).open()
}


export default curriculoPdf;

