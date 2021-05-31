import React from "react";
import { useFormik } from 'formik';
import { Input, Form, Row, Col, FormGroup, Button, FormFeedback, Label } from "reactstrap";
import * as yup from 'yup';
// import { useSelector } from 'react-redux'

export default function DadosPrincipais() {

  // const dados_curriculo = useSelector( state => state.curriculoReducer);

  // variaveis do formulario criadas usando formik.
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      idade: '',
      contato: '',
      dataNascimento: '',
      sexo: '',
      estadoCivil: '',
      nacionalidade: '',
      cep: '',
      logradouro: '',
      numeroCasa: '',
      bairro: '',
      cidade: '',
      uf:'',
    },
    // validação de campos obrigatorios.
    validationSchema: yup.object({
      name: yup.string().required('Nome obrigatório'),
      email: yup.string().required('Email obrigatório'),
      idade: yup.string().required('Idade obrigatória'),
      contato: yup.string().required('Telefone de Contato obrigatório'),
      dataNascimento: yup.string().required('Data de Nascimento obrigatório'),
      sexo: yup.string().required('Sexo obrigatório'),
      estadoCivil: yup.string().required('Estado Civil obrigatório'),
      nacionalidade: yup.string().required('Nacionalidade obrigatório'),
      cep: yup.string().required('CEP obrigatório'),
       logradouro: yup.string().required('Logradouro obrigatório'),
      numeroCasa: yup.string().required('Nº da Casa obrigatório'),
       bairro: yup.string().required('Barrio obrigatório'),
       cidade: yup.string().required('Cidade obrigatório'),
       uf: yup.string().required('Estado (UF) obrigatório'),
    }),
  });
  //função que consulta o cep
  function buscaCep (ev, setFieldValue){
    const { value } = ev.target;
    const cep = value?.replace(/[^0-9]/g, '');
    if(cep?.length !== 8){
      return;
    }
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setFieldValue('logradouro', data.logradouro);
        setFieldValue('bairro', data.bairro);
        setFieldValue('cidade', data.localidade);
        setFieldValue('uf', data.uf);
      });
  }
  // // função que calcula a idade, capturando a data fornecida no campo de dataNascimento.
  function calcIdade (setFieldValue){
    const dataInfo = formik.values.dataNascimento;
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
    return setFieldValue('idade', age.toString());
  }


  // React.useEffect(() => {
  //     formik.setFieldValue('name',  dados_curriculo.show_curriculo.curriculo.nome)
  // }, [])


  return (
    <>
      <Form>
        <h6 className="heading-small text-muted mb-4">Dados Principais</h6>
          <div> {/* Dados Principais */}
            <Row>
              <Col lg="5">
                <FormGroup>
                  <Label className="form-control-label required" htmlFor="name">Nome</Label>
                  <Input className="form-control-alternative" id="name" placeholder="Nome" type="text"
                    invalid={formik.touched.name && formik.errors.name ? true : false}
                    {...formik.getFieldProps('name')}/>
                  <FormFeedback>{formik.touched.name && formik.errors.name ? formik.errors.name : null}</FormFeedback>
                </FormGroup>
              </Col>
              <Col lg="4">
                <FormGroup>
                  <Label className="form-control-label required" htmlFor="email">Email</Label>
                  <Input className="form-control-alternative" id="email" placeholder="examplo@email.com" type="email"
                    invalid={formik.touched.email && formik.errors.email ? true : false}
                    {...formik.getFieldProps('email')}/>
                  <FormFeedback>{formik.touched.email && formik.errors.email ? formik.errors.email : null}</FormFeedback>
                </FormGroup>
              </Col>
              <Col lg="3">
                <FormGroup>
                  <Label className="form-control-label required" htmlFor="sexo">Sexo</Label>
                  <Input className="form-control-alternative" id="sexo" type="select" data-trigger=""
                    invalid={formik.touched.sexo && formik.errors.sexo ? true : false}
                    {...formik.getFieldProps('sexo')}>
                    <option value={null}>Gênero</option>
                    <option value="1">Masculino</option>
                    <option value="2">Feminino</option>
                  </Input>
                  <FormFeedback>{formik.touched.sexo && formik.errors.sexo ? formik.errors.sexo : null}</FormFeedback>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col lg="4">
                <FormGroup>
                  <Label className=" form-control-label required" htmlFor="contato">Contato</Label>
                  <Input className="form-control-alternative" id="contato" type="text" placeholder="(69) 9 9999-9999"
                    invalid={formik.touched.contato && formik.errors.contato ? true : false}
                    {...formik.getFieldProps('contato')}/>
                  <FormFeedback>{formik.touched.contato && formik.errors.contato ? formik.errors.contato : null}</FormFeedback>
                </FormGroup>
              </Col>
              <Col lg="4">
                <FormGroup>
                  <Label className=" form-control-label required" htmlFor="dataNascimento">Date de Nascimento</Label>
                  <Input className="form-control-alternative" id="dataNascimento" type="date"
                    invalid={formik.touched.dataNascimento && formik.errors.dataNascimento ? true : false}
                    {...formik.getFieldProps('dataNascimento')}
                    onBlur = {() => calcIdade(formik.setFieldValue)}
                  />
                  <FormFeedback>{formik.touched.dataNascimento && formik.errors.dataNascimento ? formik.errors.dataNascimento : null}</FormFeedback>
                </FormGroup>
              </Col>
              <Col lg="2">
                <FormGroup>
                  <Label className=" form-control-label required" htmlFor="idade">Idade</Label>
                  <Input className="form-control-alternative" id="idade" type="text" disabled
                    {...formik.getFieldProps('idade')}
                    invalid={formik.touched.idade && formik.errors.idade ? true : false}/>
                  <FormFeedback>{formik.touched.idade && formik.errors.idade ? formik.errors.idade : null}</FormFeedback>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col lg="4">
                <FormGroup>
                  <Label className=" form-control-label required" htmlFor="estadoCivil">Estado Civil</Label>
                  <Input className="form-control-alternative" id="estadoCivil" type="select" 
                    invalid={formik.touched.estadoCivil && formik.errors.estadoCivil ? true : false}
                    {...formik.getFieldProps('estadoCivil')}>
                    <option value={null}>Est. Civil</option>
                    <option value="Solteiro">Solteiro(a)</option>
                    <option value="Casado">Casado(a)</option>
                    <option value="Viúvo">Viúvo(a)</option>
                    <option value="Divorciado">Divorciado(a)</option>
                  </Input>
                  <FormFeedback>{formik.touched.estadoCivil && formik.errors.estadoCivil ? formik.errors.estadoCivil : null}</FormFeedback>
                </FormGroup>
              </Col>
              <Col lg="4">
                <FormGroup>
                  <Label className=" form-control-label required" htmlFor="nacionalidade">Nacionalidade</Label>
                  <Input className="form-control-alternative" id="nacionalidade" type="text" placeholder="País"
                    invalid={formik.touched.nacionalidade && formik.errors.nacionalidade ? true : false}
                    {...formik.getFieldProps('nacionalidade')}/>
                  <FormFeedback>{formik.touched.nacionalidade && formik.errors.nacionalidade ? formik.errors.nacionalidade : null}</FormFeedback>
                </FormGroup>
              </Col>
            </Row>
          </div>
          <hr className="line-primary"></hr>
          <h6 className="heading-small text-muted mb-4">Endereço</h6>
          <div> {/* Endereço */}
            <Row>
              <Col lg="3">
                <FormGroup>
                  <Label className="form-control-label required" htmlFor="cep">CEP</Label>
                  <Input className="form-control-alternative" id="cep" placeholder="CEP" type="text"
                    {...formik.getFieldProps('cep')}
                    invalid = {formik.touched.cep && formik.errors.cep ? true : false}
                    onBlur = {(ev) => buscaCep(ev, formik.setFieldValue)}/>
                  <FormFeedback>{formik.touched.cep && formik.errors.cep ? formik.errors.cep : null}</FormFeedback>
                </FormGroup>
              </Col>
              <Col lg="3">
                <FormGroup>
                  <Label className="form-control-label required" htmlFor="logradouro">Logradouro</Label>
                  <Input className="form-control-alternative" id="logradouro" placeholder="Logradouro" type="text" disabled
                    {...formik.getFieldProps('logradouro')}
                    invalid = {formik.touched.logradouro && formik.errors.logradouro ? true : false}/>
                  <FormFeedback>{formik.touched.logradouro && formik.errors.logradouro ? formik.errors.logradouro : null}</FormFeedback>
                </FormGroup>
              </Col>
              <Col lg="2">
                <FormGroup>
                  <Label className="form-control-label required" htmlFor="numeroCasa">Nº Casa</Label>
                  <Input className="form-control-alternative" id="numeroCasa" placeholder="nº casa" type="text"
                    invalid={formik.touched.numeroCasa && formik.errors.numeroCasa ? true : false}
                    {...formik.getFieldProps('numeroCasa')}/>
                  <FormFeedback>{formik.touched.numeroCasa && formik.errors.numeroCasa ? formik.errors.numeroCasa : null}</FormFeedback>
                </FormGroup>
              </Col>
              <Col lg="3">
                <FormGroup>
                  <Label className=" form-control-label required" htmlFor="bairro">Bairro</Label>
                  <Input className="form-control-alternative" id="bairro" placeholder="Bairro" type="text" disabled
                    {...formik.getFieldProps('bairro')}
                    invalid = {formik.touched.bairro && formik.errors.bairro ? true : false}/>
                  <FormFeedback>{formik.touched.bairro && formik.errors.bairro ? formik.errors.bairro : null}</FormFeedback>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col lg="3">
                <FormGroup>
                  <Label className=" form-control-label required" htmlFor="cidade">Cidade</Label>
                  <Input className="form-control-alternative" id="cidade" placeholder="Cidade" type="text" disabled
                    {...formik.getFieldProps('cidade')}
                    invalid = {formik.touched.cidade && formik.errors.cidade ? true : false}/>
                  <FormFeedback>{formik.touched.cidade && formik.errors.cidade ? formik.errors.cidade : null}</FormFeedback>
                </FormGroup>
              </Col>
              <Col lg="3">
                <FormGroup>
                  <Label className=" form-control-label required" htmlFor="uf">UF</Label>
                  <Input className="form-control-alternative" id="uf" placeholder="UF" type="select" disabled
                    invalid = {formik.touched.uf && formik.errors.uf ? true : false}
                    {...formik.getFieldProps('uf')}>
                    <option value={null}>UF</option>
                    <option value="AC">Acre</option>
                    <option value="AL">Alagoas</option>
                    <option value="AM">Amazonas</option>
                    <option value="AP">Amapá</option>
                    <option value="BA">Bahia</option>
                    <option value="CE">Ceará</option>
                    <option value="DF">Distrito Federal</option>
                    <option value="ES">Espírito Santo</option>
                    <option value="GO">Goiás</option>
                    <option value="MA">Maranhão</option>
                    <option value="MG">Minas Gerais</option>
                    <option value="MS">Mato Grosso do Sul</option>
                    <option value="MT">Mato Grosso</option>
                    <option value="PA">Pará</option>
                    <option value="PB">Paraíba</option>
                    <option value="PR">Paraná</option>
                    <option value="RJ">Rio de Janeiro</option>
                    <option value="RN">Rio Grande do Norte</option>
                    <option value="RO">Rondônia</option>
                    <option value="RR">Roraima</option>
                    <option value="RS">Rio Grande do Sul</option>
                    <option value="SC">Santa Catarina</option>
                    <option value="SE">Sergipe</option>
                    <option value="SP">São Paulo</option>
                    <option value="TO">Tocantins</option>
                  </Input>
                  <FormFeedback>{formik.touched.uf && formik.errors.uf ? formik.errors.uf : null}</FormFeedback>
                </FormGroup>
              </Col>
            </Row>
          </div>
          <hr className="line-primary"></hr>
        <Button className="btn-icon float-right mb-2" color="success" onClick={() => {}}>
          <span className="btn-inner--icon">
            <i className="ni ni-check-bold ml--2"/>
          </span>
          <span className="btn-inner--text ml-2">Salvar</span>
        </Button>
      </Form>
    </>
  );
}