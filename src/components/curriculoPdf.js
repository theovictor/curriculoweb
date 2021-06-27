import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { api_file } from '../services/api'
pdfMake.vfs = pdfFonts.pdfMake.vfs;

// inicio curriculo 
const curriculoPdf = props => {

  // console.log(props[0])
  // console.log(props[1])
  const { curriculo, conhecimento, experiencias, formacoes } = props[0]
  const { thumbnail } = props[1]

  const docDefinition = {
    pageSize: 'A4',
    pageMargins: [25, 40, 25, 35],
    // background:[
    //   {
    //     svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><defs><linearGradient id="lgrad" x1="0%" y1="50%" x2="100%" y2="50%" ><stop offset="0%" style="stop-color:rgb(3,169,244);stop-opacity:1.00" /><stop offset="100%" style="stop-color:rgb(156,39,176);stop-opacity:1.00" /></linearGradient></defs><rect y="0" x="0" fill="url(#lgrad)"/><path fill="url(#lgrad)" fill-opacity="1" d="M0,256L40,261.3C80,267,160,277,240,277.3C320,277,400,267,480,218.7C560,171,640,85,720,53.3C800,21,880,43,960,64C1040,85,1120,107,1200,96C1280,85,1360,43,1400,21.3L1440,0L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>',
    //     width: 600,
    //   },
    // ],
    content: [
      {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><defs><linearGradient id="lgrad" x1="0%" y1="50%" x2="100%" y2="50%" ><stop offset="0%" style="stop-color:rgb(3,169,244);stop-opacity:1.00" /><stop offset="100%" style="stop-color:rgb(156,39,176);stop-opacity:1.00" /></linearGradient></defs><rect y="0" x="0" fill="url(#lgrad)"/><path fill="url(#lgrad)" fill-opacity="1" d="M0,256L40,261.3C80,267,160,277,240,277.3C320,277,400,267,480,218.7C560,171,640,85,720,53.3C800,21,880,43,960,64C1040,85,1120,107,1200,96C1280,85,1360,43,1400,21.3L1440,0L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>',
        width: 600,
        margin: [-25, -40 , -25, -35],
      },
      {
        alignment: 'justify',
        columns:[
          {
            image: 'userImg', 
            width: 95,
            alignment: 'left',
            margin: [25, -87, 0, 0],
          },
          {
            alignment: 'center',
            bold: true,
            fontSize: 26,
            color: 'black',
            text: `${curriculo.nome}`,
            style: 'quote',
            margin: [3, -39, 0, 3]
          },
        ],
        columnGap: 10
      },'\n',
      {
        style: 'tableStyle',
        table:{
          widths:[170, '*'],
          body:[
            [
              {//contato
                border:[false, false, true, false],
                style: 'header', alignment: 'left',
                text: 'Contato',
              },
              {//objetivo
                border:[false,false,false,true],
                style: 'header', alignment: 'left',
                text: 'Objetivo',
              },
            ],
            [
              {//dados-contato
                border:[false,false,false,false],
                alignment: 'justify',
                text: `\n» ${curriculo.cidade} - ${curriculo.estado}\n» ${curriculo.nacionalidade} - ${curriculo.civil}\n» ${curriculo.email}\n» ${curriculo.telefone}\n\n`,
              },
              {//dados-objetivo
                border:[false,false,false,false],
                alignment: 'justify',
                text: `${curriculo.objetivo}`,
              },
            ],
            [
              {//documentos
                border: [false,false,false,false],
                text: 'Documentos',
                style: 'header',
                alignment: 'left'
              },
              {//formação
                border: [true,false,false,true],
                text: 'Formação Acadêmica',
                style: 'header',
                alignment: 'left'
              }
            ],
            [
              {//dados documentos
                border: [false,false,false,false],
                alignment: 'justify',
                type: 'none',
                ol:[
                  conhecimento.map((item, idx) => {
                    if(item.docAdicional != ""){
                      return[
                        {text: `${item.docAdicional}\n`}
                      ]
                    }
                  }),
                ]
              },
              {//dados formação
                border:[false,false,false,false],
                alignment: 'justify',
                type: 'none',
                ol:[
                  formacoes.map((item, idx) =>{
                    if(item.periodo != ''){
                      return[
                        {
                          text: `${item.dataInicio} - ${item.dataTermino}\n${item.instituicao} - ${item.curso}\n${item.periodo} Período - ${item.turno} - ${item.status}\n\n`
                        }
                      ]
                    }else{
                      return[
                        {text: `${item.instituicao}\nEnsino ${item.curso} - ${item.status}\n\n`}
                      ]
                    }
                  })
                ]
              }
            ],
            [
              {
                border: [false,false,false,false],
                text: '',
              },
              {//Experiencia Profissional
                border: [true,false,false,true],
                text: 'Experiências Profissionais',
                style: 'header',
                alignment: 'left'
              }
            ],
            [
              {
                border: [false,false,false,false],
                text: '',
              },
              {//dados experiencia
                border:[false,false,false,false],
                alignment: 'justify',
                type: 'none',
                ol:[
                  experiencias.map((item, idx) =>[
                    {text: `${item.dataInicio} - ${item.dataTermino}\n${item.nome} - ${item.local}\n${item.atividades}\n\n`}
                  ]),
                ]
              }
            ],
            [
              {
                border: [false,false,false,false],
                text: '',
              },
              {//Conhecimento Complementares
                border: [true,false,false,true],
                text: 'Conhecimento Complementares',
                style: 'header',
                alignment: 'left'
              }
            ],
            [
              {
                border: [false,false,false,false],
                text: '',
              },
              {//dados Conhecimentos
                border:[false,false,false,false],
                alignment: 'justify',
                type: 'none',
                ol:[
                  conhecimento.map((item, idx) => {
                    if(item.nome != "" || item.nivel != ""){
                      return[
                        {text: `${item.nome} - ${item.nivel}\n`}
                      ]
                    }if(item.cursoAdicional != ""){
                      return[
                        {text: `${item.cursoAdicional}\n`}
                      ]
                    }
                  }),
                ]
              }
            ],
          ]
        }
      },
    ],
    styles: {
      header: {
        fontSize: 15,
        bold: true
      },
      subheader: {
        fontSize: 15,
        bold: true,
        margin: [0, 10, 0, 5]
      },
      quote: {
        italics: true
      },
      small: {
        fontSize: 8
      },
      tableStyle:{
        margin:[0, 5, 0, 15]
      }
    }, 
    images:{ userImg: `${api_file}/${thumbnail}` }
  }
  pdfMake.createPdf(docDefinition).open()
}

export default curriculoPdf;
