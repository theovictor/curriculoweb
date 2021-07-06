import React, { useState, useEffect } from "react";
import { useFormik } from 'formik';
import { Input, Form, Row, Col, FormGroup, Button, FormFeedback, Label, Card, CardHeader, CardBody, ListGroup, ListGroupItem, CardTitle } from "reactstrap";
import { useSelector, useDispatch } from 'react-redux'
import { api_curriculo } from '../../services/api'
import axios from "axios";
import MaskedInput from 'react-text-mask'
import curriculoActions from '../../store/actions/curriculoActions'

export default function DadosPrincipais() {
  const [editMode, setEditMode] = useState(false)
  const curriculoReducer = useSelector(state => state.curriculoReducer)
  const rd_user = useSelector( state => state.userReducer);
  const dispatch = useDispatch()

  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${sessionStorage.getItem('token')}`
  }
  const formik = useFormik({
    initialValues: {
      nome: '',
      email: '',
      idade: '',
      telefone: '',
      dataNascimento: '',
      sexo: '',
      estadoCivil: '',
      nacionalidade: '',
      cep: '',
      logradouro: '',
      numeroCasa: '',
      bairro: '',
      cidade: '',
      uf: '',
      objetivo: '',
    }
  })
  const bucas_cep = (ev, setFieldValue) => {
    const { value } = ev.target;
    const cep = value?.replace(/[^0-9]/g, '');
    if (cep?.length !== 8) {
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
  const calc_idade = (setFieldValue) => {
    const dataInfo = formik.values.dataNascimento;
    const anoAtual = new Date().getFullYear();
    const dataInfoParts = dataInfo.split('-');
    const anoNasc = dataInfoParts[0];
    const mesNasc = dataInfoParts[1];
    const diaNasc = dataInfoParts[2];
    let age = anoAtual - anoNasc;
    const mesAtual = new Date().getMonth() + 1;
    if (mesAtual < mesNasc) {
      setFieldValue('idade', age--);
    } else {
      if (mesAtual === mesNasc) {
        if (new Date().getDate() < diaNasc) {
          setFieldValue('idade', age--);
        }
      }
    }
    return setFieldValue('idade', age.toString());
  }
  const limpar = () => {
    formik.values.nome = '';
    formik.values.email = '';
    formik.values.idade = '';
    formik.values.telefone = '';
    formik.values.dataNascimento = '';
    formik.values.sexo = '';
    formik.values.estadoCivil = '';
    formik.values.nacionalidade = '';
    formik.values.cep = '';
    formik.values.logradouro = '';
    formik.values.numeroCasa = '';
    formik.values.bairro = '';
    formik.values.cidade = '';
    formik.values.uf = '';
    formik.values.objetivo = '';
  }
  const envia_curriculo = () => {
    axios.post(`${api_curriculo}/create`, {
      nome: formik.values.nome,
      email: formik.values.email,
      idade: formik.values.idade,
      telefone: formik.values.telefone,
      dataNascimento: formik.values.dataNascimento,
      sexo: formik.values.sexo,
      civil: formik.values.estadoCivil,
      nacionalidade: formik.values.nacionalidade,
      cep: formik.values.cep,
      logradouro: formik.values.logradouro,
      casa: formik.values.numeroCasa,
      bairro: formik.values.bairro,
      cidade: formik.values.cidade,
      estado: formik.values.uf,
      objetivo: formik.values.objetivo,
    }, { headers })
    .then(res => {
      setEditMode(false)
      dispatch(curriculoActions.busca_curriculo(rd_user.user._id))
      }).catch(err => {
        console.log(err)
      })
  }
  const att_curriculo = () => {
    axios.put(`${api_curriculo}/update`, {
      nome: formik.values.nome,
      email: formik.values.email,
      idade: formik.values.idade,
      telefone: formik.values.telefone,
      dataNascimento: formik.values.dataNascimento,
      sexo: formik.values.sexo,
      civil: formik.values.estadoCivil,
      nacionalidade: formik.values.nacionalidade,
      cep: formik.values.cep,
      logradouro: formik.values.logradouro,
      casa: formik.values.numeroCasa,
      bairro: formik.values.bairro,
      cidade: formik.values.cidade,
      estado: formik.values.uf,
      objetivo: formik.values.objetivo,
    }, { headers })
      .then(res => {
        setEditMode(false)
        dispatch(curriculoActions.busca_curriculo(rd_user.user._id))
      }).catch(err => {
        // console.log(err)
      })
  }
  const btnDeletar = (id_curriculo) => {
    axios.delete(`${api_curriculo}/delete/${id_curriculo}`, { headers })
      .then(res => {
        limpar()
        setEditMode(false)
        dispatch(curriculoActions.busca_curriculo(rd_user.user._id))
      }).catch(err => {
        // console.log(err + 'falha ao apagar curriculo')
      })
  }
  // preenche os dados q estão no reducer para os inputs do formulário
  useEffect(() => {
    if (curriculoReducer.show_curriculo && curriculoReducer.show_curriculo.curriculo) {
      formik.setFieldValue('nome', curriculoReducer.show_curriculo.curriculo.nome ? curriculoReducer.show_curriculo.curriculo.nome : '')
      formik.setFieldValue('email', curriculoReducer.show_curriculo.curriculo.email ? curriculoReducer.show_curriculo.curriculo.email : '')
      formik.setFieldValue('telefone', curriculoReducer.show_curriculo.curriculo.telefone ? curriculoReducer.show_curriculo.curriculo.telefone : '')
      formik.setFieldValue('idade', curriculoReducer.show_curriculo.curriculo.idade ? curriculoReducer.show_curriculo.curriculo.idade : '')
      formik.setFieldValue('dataNascimento', curriculoReducer.show_curriculo.curriculo.dataNascimento ? curriculoReducer.show_curriculo.curriculo.dataNascimento : '')
      formik.setFieldValue('sexo', curriculoReducer.show_curriculo.curriculo.sexo ? curriculoReducer.show_curriculo.curriculo.sexo : '')
      formik.setFieldValue('estadoCivil', curriculoReducer.show_curriculo.curriculo.civil ? curriculoReducer.show_curriculo.curriculo.civil : '')
      formik.setFieldValue('nacionalidade', curriculoReducer.show_curriculo.curriculo.nacionalidade ? curriculoReducer.show_curriculo.curriculo.nacionalidade : '')
      formik.setFieldValue('cep', curriculoReducer.show_curriculo.curriculo.cep ? curriculoReducer.show_curriculo.curriculo.cep : '')
      formik.setFieldValue('logradouro', curriculoReducer.show_curriculo.curriculo.logradouro ? curriculoReducer.show_curriculo.curriculo.logradouro : '')
      formik.setFieldValue('numeroCasa', curriculoReducer.show_curriculo.curriculo.casa ? curriculoReducer.show_curriculo.curriculo.casa : '')
      formik.setFieldValue('bairro', curriculoReducer.show_curriculo.curriculo.bairro ? curriculoReducer.show_curriculo.curriculo.bairro : '')
      formik.setFieldValue('cidade', curriculoReducer.show_curriculo.curriculo.cidade ? curriculoReducer.show_curriculo.curriculo.cidade : '')
      formik.setFieldValue('uf', curriculoReducer.show_curriculo.curriculo.estado ? curriculoReducer.show_curriculo.curriculo.estado : '')
      formik.setFieldValue('objetivo', curriculoReducer.show_curriculo.curriculo.objetivo ? curriculoReducer.show_curriculo.curriculo.objetivo : '')
    }
  }, [curriculoReducer.show_curriculo])
 
  return editMode ?(
    <>
      <CardHeader className="bg-secondary border-0">
      <Row className="align-items-center">
        <Col xs="8">
          <h3 className="mb-0">Meu Curriculo</h3>
        </Col>
      </Row>
      </CardHeader>
      <CardBody>
        <Form>
          <Card className="p-2 shadow">
            <CardTitle className="heading-small text-muted">Dados Principais</CardTitle>
              <Row className="m-0 mt-2">
              <Col lg="5">
                <FormGroup>
                  <Label className="form-control-label" htmlFor="name">Nome</Label>
                  <Input className="form-control border-light shadow" id="nome" placeholder="Nome" type="text"
                    invalid={formik.touched.nome && formik.errors.nome ? true : false}
                    {...formik.getFieldProps('nome')} />
                  <FormFeedback>{formik.touched.nome && formik.errors.nome ? formik.errors.nome : null}</FormFeedback>
                </FormGroup>
              </Col>
              <Col lg="4">
                <FormGroup>
                  <Label className="form-control-label" htmlFor="email">Email</Label>
                  <Input className="form-control border-light shadow" id="email" placeholder="examplo@email.com" type="email"
                    invalid={formik.touched.email && formik.errors.email ? true : false}
                    {...formik.getFieldProps('email')} />
                  <FormFeedback>{formik.touched.email && formik.errors.email ? formik.errors.email : null}</FormFeedback>
                </FormGroup>
              </Col>
              <Col lg="3">
                <FormGroup>
                  <Label className="form-control-label" htmlFor="sexo">Sexo</Label>
                  <Input className="form-control border-light shadow" id="sexo" type="select" data-trigger=""
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
              <Row className="m-0">
              <Col lg="4">
                <FormGroup>
                  <Label className=" form-control-label" htmlFor="telefone">Telefone</Label>
                  <MaskedInput
                    mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', '-', ' ', /\d/, /\d/, /\d/, /\d/]}
                    className="form-control border-light shadow" id="telefone" type="text" placeholder="(DDD) 0 0000-0000"
                    {...formik.getFieldProps('telefone')}/>
                  <FormFeedback>{formik.touched.telefone && formik.errors.telefone ? formik.errors.telefone : null}</FormFeedback>
                </FormGroup>
              </Col>
              <Col lg="4">
                <FormGroup>
                  <Label className=" form-control-label" htmlFor="dataNascimento">Date de Nascimento</Label>
                  <Input className="form-control shadow border-light" id="dataNascimento" type="date"
                    invalid={formik.touched.dataNascimento && formik.errors.dataNascimento ? true : false}
                    {...formik.getFieldProps('dataNascimento')}
                    onBlur={() => calc_idade(formik.setFieldValue)}
                  />
                  <FormFeedback>{formik.touched.dataNascimento && formik.errors.dataNascimento ? formik.errors.dataNascimento : null}</FormFeedback>
                </FormGroup>
              </Col>
              <Col lg="2">
                <FormGroup>
                  <Label className=" form-control-label" htmlFor="idade">Idade</Label>
                  <Input className="form-control border-light shadow" id="idade" type="text" disabled
                    {...formik.getFieldProps('idade')}
                    invalid={formik.touched.idade && formik.errors.idade ? true : false} />
                  <FormFeedback>{formik.touched.idade && formik.errors.idade ? formik.errors.idade : null}</FormFeedback>
                </FormGroup>
              </Col>
            </Row>
              <Row className="m-0">
              <Col lg="4">
                <FormGroup>
                  <Label className=" form-control-label" htmlFor="estadoCivil">Estado Civil</Label>
                  <Input className="form-control border-light shadow" id="estadoCivil" type="select"
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
                  <Label className=" form-control-label" htmlFor="nacionalidade">Nacionalidade</Label>
                  <Input className="form-control border-light shadow" id="nacionalidade" type="text" placeholder="País"
                    invalid={formik.touched.nacionalidade && formik.errors.nacionalidade ? true : false}
                    {...formik.getFieldProps('nacionalidade')} />
                  <FormFeedback>{formik.touched.nacionalidade && formik.errors.nacionalidade ? formik.errors.nacionalidade : null}</FormFeedback>
                </FormGroup>
              </Col>
            </Row>
          </Card>
          <hr className="line-primary"/>
          <Card className="p-2 shadow">
            <CardTitle className="heading-small text-muted">Endereço</CardTitle>
              <Row className="m-0 mt-2">
              <Col lg="3">
                <FormGroup>
                  <Label className="form-control-label" htmlFor="cep">CEP</Label>
                  <Input className="form-control border-light shadow" id="cep" placeholder="CEP" type="text"
                    {...formik.getFieldProps('cep')}
                    invalid={formik.touched.cep && formik.errors.cep ? true : false}
                    onBlur={(ev) => bucas_cep(ev, formik.setFieldValue)} />
                  <FormFeedback>{formik.touched.cep && formik.errors.cep ? formik.errors.cep : null}</FormFeedback>
                </FormGroup>
              </Col>
              <Col lg="3">
                <FormGroup>
                  <Label className="form-control-label" htmlFor="logradouro">Logradouro</Label>
                  <Input className="form-control border-light shadow" id="logradouro" placeholder="Logradouro" type="text" disabled
                    {...formik.getFieldProps('logradouro')}
                    invalid={formik.touched.logradouro && formik.errors.logradouro ? true : false} />
                  <FormFeedback>{formik.touched.logradouro && formik.errors.logradouro ? formik.errors.logradouro : null}</FormFeedback>
                </FormGroup>
              </Col>
              <Col lg="2">
                <FormGroup>
                  <Label className="form-control-label" htmlFor="numeroCasa">Nº Casa</Label>
                  <Input className="form-control border-light shadow" id="numeroCasa" placeholder="nº casa" type="text"
                    invalid={formik.touched.numeroCasa && formik.errors.numeroCasa ? true : false}
                    {...formik.getFieldProps('numeroCasa')} />
                  <FormFeedback>{formik.touched.numeroCasa && formik.errors.numeroCasa ? formik.errors.numeroCasa : null}</FormFeedback>
                </FormGroup>
              </Col>
              <Col lg="3">
                <FormGroup>
                  <Label className=" form-control-label" htmlFor="bairro">Bairro</Label>
                  <Input className="form-control border-light shadow" id="bairro" placeholder="Bairro" type="text" disabled
                    {...formik.getFieldProps('bairro')}
                    invalid={formik.touched.bairro && formik.errors.bairro ? true : false} />
                  <FormFeedback>{formik.touched.bairro && formik.errors.bairro ? formik.errors.bairro : null}</FormFeedback>
                </FormGroup>
              </Col>
            </Row>
              <Row className="m-0">
              <Col lg="3">
                <FormGroup>
                  <Label className=" form-control-label" htmlFor="cidade">Cidade</Label>
                  <Input className="form-control border-light shadow" id="cidade" placeholder="Cidade" type="text" disabled
                    {...formik.getFieldProps('cidade')}
                    invalid={formik.touched.cidade && formik.errors.cidade ? true : false} />
                  <FormFeedback>{formik.touched.cidade && formik.errors.cidade ? formik.errors.cidade : null}</FormFeedback>
                </FormGroup>
              </Col>
              <Col lg="3">
                <FormGroup>
                  <Label className=" form-control-label" htmlFor="uf">UF</Label>
                  <Input className="form-control border-light shadow" id="uf" placeholder="UF" type="select" disabled
                    invalid={formik.touched.uf && formik.errors.uf ? true : false}
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
          </Card>
          <hr className="line-primary"/>
          <Card className="p-2  bg-transparent border-0">
            <CardTitle className="heading-small text-muted">Objetivo</CardTitle>
            <Row className="m-0">
              <Input className="form-control border-light shadow" id="objetivo" placeholder="Digite aqui o seu objetivo geral." rows="6" type="textarea"
                {...formik.getFieldProps('objetivo')}/>
            </Row>
          </Card>
          <hr className="line-primary"/>
          {curriculoReducer.edit_mode?
            <Row className="justify-content-center m-0">
              <Button className="btn-icon mb-2 bg-gradient-indigo text-white border-0" onClick={att_curriculo}>
                <span className="btn-inner--icon">
                  <i className="ni ni-check-bold ml--2" />
                </span>
                <span className="btn-inner--text ml-2">Salvar Edição</span>
              </Button>
              <Button className="btn-icon mb-2 bg-gradient-warning text-white border-0" onClick={() => {dispatch(curriculoActions.edit_mode(false)); setEditMode(false)}}>
                <span className="btn-inner--icon">
                  <i className="ni ni-fat-remove ml--2" />
                </span>
                <span className="btn-inner--text ml-2">Cancelar Edição</span>
              </Button>
            </Row>
            :
            <Row className="justify-content-center m-0">
              <Button className="btn-icon mb-2 bg-gradient-indigo text-white" onClick={envia_curriculo}>
                <span className="btn-inner--icon">
                  <i className="ni ni-check-bold ml--2" />
                </span>
                <span className="btn-inner--text ml-2">Salvar Curriculo</span>
              </Button>
            </Row>
          }
        </Form>
      </CardBody>
    </>
  )
    :
    curriculoReducer.show_curriculo?.curriculo? (
    <>
      <CardBody>
        <Row className="m-0 justify-content-center mb-4"><h2>{curriculoReducer.show_curriculo.curriculo.nome}</h2></Row>
        <Row className="m-0 justify-content-center mb-4">
          <Col>
            <Row className="justify-content-end">{curriculoReducer.show_curriculo.curriculo.email}</Row>
            <Row className="justify-content-end">{curriculoReducer.show_curriculo.curriculo.telefone}</Row>
            <Row className="justify-content-end">{curriculoReducer.show_curriculo.curriculo.civil} - {`${curriculoReducer.show_curriculo.curriculo.idade} Anos`}</Row>
          </Col>
          <Col className="border-left-pink mr-4 ml-4" md="0"/>
          <Col>
            <Row className="justify-content-start">{curriculoReducer.show_curriculo.curriculo.cidade} - {curriculoReducer.show_curriculo.curriculo.estado}</Row>
            <Row className="justify-content-start">{curriculoReducer.show_curriculo.curriculo.logradouro} - {curriculoReducer.show_curriculo.curriculo.casa} - {curriculoReducer.show_curriculo.curriculo.bairro}</Row>
            <Row className="justify-content-start">{curriculoReducer.show_curriculo.curriculo.nacionalidade}</Row>
          </Col>
        </Row>
        <hr className="my-1" color="pink"/>
        <Label className="titulos-curriculo">Objetivo</Label>
        <hr className="my-1" color="pink"/>
        <Row className="m-0 mb-3">
          <Col>
            <Input className="form-control border-0 bg-neutral shadow" rows="6" type="textarea" disabled
            defaultValue={curriculoReducer.show_curriculo.curriculo.objetivo}/>
          </Col>
        </Row>
        <hr className="my-1" color="pink"/>
        <Label className="titulos-curriculo">Formações Acadêmicas</Label>
        <hr className="my-1" color="pink"/>
        <Row className="m-0 mb-3">
          {curriculoReducer.show_curriculo?.formacoes ? curriculoReducer.show_curriculo.formacoes.map((item, idx) => {
            if(item.dataInicio === ""){
              return(
                <Col md="4" key={idx}>
                  <Card className="border p-2 mb-1 shadow">
                    <Label>Instituição: {item.instituicao}</Label>
                    <Label>Ensino: {item.curso}</Label>
                    <Label className="status-required"> {item.status}</Label>
                  </Card>
                </Col>             
              )
            }else{
              return(
                <Col md="4" key={idx}>
                  <Card className="border p-2 mb-1 shadow">
                    <Label>Instituição: {item.instituicao}</Label>
                    <Label>Curso: {item.curso}</Label>
                    <Label className="status-required"> {item.status}</Label>
                    <Row key={idx} className="m-0">
                      <Col className="p-0">
                        <Label>Período: {item.periodo}</Label>
                      </Col>
                      <Col className="p-0">
                        <Label>Turno: {item.turno}</Label>
                      </Col>
                    </Row>
                    <Row className="m-0">
                      <Col className="p-0">
                        <Label>Início: {item.dataInicio}</Label>
                      </Col>
                      <Col className="p-0">
                        <Label>Término: {item.dataTermino}</Label>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              )
            }
          }) : null}
        </Row>
        <hr className="my-1" color="pink"/>
        <Label className="titulos-curriculo">Experiências Profissionais</Label>
        <hr className="my-1" color="pink"/>
        <Row className="m-0 mb-3">
          {curriculoReducer.show_curriculo?.experiencias ? curriculoReducer.show_curriculo?.experiencias.map((item, idx) => {
            return(
              <Col md="4" key={idx}>
                <Card className="border p-2 mb-1 shadow">
                  <Label>Nome: {item.nome}</Label>
                  <Label>Local: {item.local}</Label>
                  <Label>Atividade: {item.atividades}</Label>
                  <Row className="m-0">
                    <Col className="p-0">
                      <Label>Início: {item.dataInicio}</Label>
                    </Col>
                    <Col className="p-0">
                      <Label>Término: {item.dataTermino}</Label>
                    </Col>
                  </Row>
                </Card>
              </Col>
            )
          }) : null}
        </Row>
        <hr className="my-1" color="pink"/>
        <Label className="titulos-curriculo">Cursos e Documentos</Label>
        <hr className="my-1" color="pink"/>
        <Row className="m-0 mb-3 Cursos-Docs">
          <Col>
            <Card className="border p-2 mb-1 shadow">
              <Row className="justify-content-center"><Label className="titulo-doc-E-curso">Cursos</Label></Row>
              {curriculoReducer.show_curriculo?.conhecimento ? curriculoReducer.show_curriculo?.conhecimento.map((item, idx) => {
                if(item.cursoAdicional != ""){
                  return(
                    <ListGroup key={idx}>
                      <ListGroupItem>{item.cursoAdicional}</ListGroupItem>
                    </ListGroup>
                  )
                }
              }) : null}
            </Card>
          </Col>
          <Col>
            <Card className="border p-2 mb-1 shadow">
            <Row className="justify-content-center"><Label className="titulo-doc-E-curso">Documentos</Label></Row>
              {curriculoReducer.show_curriculo?.conhecimento ? curriculoReducer.show_curriculo?.conhecimento.map((item, idx) => {
                if(item.docAdicional != ""){
                  return(
                    <ListGroup key={idx}>
                      <ListGroupItem>{item.docAdicional}</ListGroupItem>
                    </ListGroup>
                  )
                }
              }) : null}
            </Card>
          </Col>
        </Row>
        <hr className="my-1" color="pink"/>
        <Label className="titulos-curriculo">Conhecimentos Adicionais</Label>
        <hr className="my-1" color="pink"/>
        <Row className="m-0">
          {curriculoReducer.show_curriculo?.conhecimento ? curriculoReducer.show_curriculo?.conhecimento.map((item, idx) => {
            if(item.nome != "" || item.nivel != ""){
              return(
                <Col md="4" key={idx}>
                  <Card className="border p-2 mb-1 shadow">
                    <Label>Curso: {item.nome}</Label>
                    <Label>Nível: {item.nivel}</Label>
                  </Card>
                </Col>
              )
            }
          }) : null}
        </Row>
        <Row className="justify-content-center mt-4">
          <Button className="btn-icon mb-2 mr-4 bg-gradient-success text-white border-0" onClick={() => {dispatch(curriculoActions.edit_mode(true)); setEditMode(true)}}>
            <span className="btn-inner--icon">
              <i className="fa fa-pencil ml--2"/>
            </span>
            <span className="btn-inner--text ml-2">Editar</span>
          </Button>
          <Button className="btn-icon mb-2 ml-3 bg-gradient-danger text-white border-0" onClick={() => {btnDeletar(curriculoReducer.show_curriculo.curriculo._id)}}>
            <span className="btn-inner--icon">
              <i className="ni ni-basket ml--2" />
            </span>
            <span className="btn-inner--text ml-2">Apagar</span>
          </Button>
        </Row>
      </CardBody>
    </>
  )
    :
  (
    <>
      <Row className="justify-content-center mt-8 m-0">
      <h3 className="text-center">Você não tem nenhum Curriculo Cadastrado.</h3>
      </Row>
      <Row className="justify-content-center mt-3 m-0">
        <h4>Cadastre um agora mesmo!</h4>
      </Row>
      <Row className="justify-content-center mt-3 m-0">
        <Button className="bg-gradient-yellow border" onClick={() => setEditMode(true)}>
          Cadastrar Currículo
        </Button>
      </Row>
    </>
  )
}