import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
// import { useSelector } from 'react-redux'
pdfMake.vfs = pdfFonts.pdfMake.vfs;

// inicio curriculo 
const curriculoPdf = props => {
  console.log(props)
  const { curriculo, conhecimento, experiencias, formacoes } = props

  const docDefinition = {
    pageSize: 'A4',
    pageMargins: [40, 30, 40, 60],
    header: [],
    content: [
      { text: `${curriculo.nome}`, alignment: 'center', fontSize: 13, color: 'gray' },
      { text: `${curriculo.logradouro}, ${curriculo.bairro}`, alignment: 'center', fontSize: 13, color: 'gray' },
      { text: `CERTIDÃO n. 50`, style: 'header', alignment: 'center', margin: [0, 40, 0, 40] },
      { text: `De ordem da Senhora Corregedora Geral/SEJUS, Crisanara Mazza de Toledo, `, alignment: 'right', lineHeight: 2, margin: [0, 20, 0, 0] },
    ]
  }
  pdfMake.createPdf(docDefinition).open()
}

export default curriculoPdf;
