import React, { useEffect } from "react";
import { UncontrolledCollapse, DropdownMenu, DropdownItem, DropdownToggle, UncontrolledDropdown, Media, NavbarBrand, Navbar, Nav, Container, Row, Col, Card } from "reactstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { api_file } from '../../services/api.js';
import userActions from "store/actions/userActions";
import curriculoActions from "store/actions/curriculoActions";

export default function Navbar1() {

  const rd_user = useSelector( state => state.userReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    if(!rd_user.logged){
      const token = sessionStorage.getItem('token')
      dispatch(userActions.busca_user())
      dispatch(userActions.add_token(token))
    }
  }, [])
  
  useEffect(() => {
    if (rd_user.user)
    dispatch(curriculoActions.busca_curriculo(rd_user.user._id))
    // console.log(rd_user.user)
  }, [rd_user])

  return (
    <>
      <header className="header-global">
        <Navbar className="navbar-main navbar-transparent navbar-light" expand="lg" id="navbar-main">
          <Container className="nav-container">
            <NavbarBrand className="mr-lg-5 ml-4">
              <div className="logo-navbar"/>
            </NavbarBrand>
            <button className="navbar-toggler" id="navbar_global">
              <span className="avatar avatar-sm rounded-circle">
                {rd_user.logged?.thumbnail?
                  <img className="foto-nav rounded-circle" src={`${api_file}/${rd_user.logged.thumbnail}`} alt="..."/>
                  :
                  rd_user?.foto?
                    <img className="foto-nav rounded-circle" src={`${api_file}/${rd_user.foto}`} alt=""/>
                  :
                  <div className="img-default-nav rounded-circle"/>
                }
              </span>
            </button>
            <UncontrolledCollapse toggler="#navbar_global" className="align-items-center justify-content-around" navbar>
              <div className="navbar-collapse-header">
                <Row>
                  <div className="collapse-brand">
                    <Media className="align-items-center">
                      <span className="avatar avatar-sm rounded-circle">
                        {rd_user.logged?.thumbnail?
                          <img className="foto-nav rounded-circle" src={`${api_file}/${rd_user.logged.thumbnail}`} alt="..."/>
                          :
                          rd_user?.foto?
                            <img className="foto-nav rounded-circle" src={`${api_file}/${rd_user.foto}`} alt=""/>
                          :
                          <div className="img-default-nav rounded-circle"/>
                        }
                      </span>
                      <Media className="ml-2 mr-1 d-lg-block">
                        <span className="mb-0 text-sm font-weight-bold">
                          {rd_user.user?.nome? rd_user.user.nome : null}
                        </span>
                      </Media>
                    </Media>
                  </div>
                  <Col className="collapse-close">
                    <button className="navbar-toggler" id="navbar_global">
                      <span />
                      <span />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                <UncontrolledDropdown nav>
                  <DropdownToggle nav to="/dados_iniciais" tag={Link}>
                    <i className="fa fa-home" />
                    <span className="nav-link-inner--text">Início</span>
                  </DropdownToggle>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav>
                  <DropdownToggle nav to="/configuracao" tag={Link}>
                    <i className="ni ni-settings-gear-65"/>
                    <span className="nav-link-inner--text">Configurações</span>
                  </DropdownToggle>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav>
                  <DropdownToggle nav to="/contato" tag={Link}>
                    <i className="ni ni-support-16" />
                    <span className="nav-link-inner--text">Contato</span>
                  </DropdownToggle>
                </UncontrolledDropdown>
                <UncontrolledDropdown className="d-lg-none" nav>
                  <DropdownToggle nav to="/" tag={Link} onClick={() => { sessionStorage.removeItem('token'); }}>
                    <i className="ni ni-user-run" />
                    <span className="nav-link-inner--text">Sair</span>
                  </DropdownToggle>
                </UncontrolledDropdown>
              </Nav>
              <Nav className="align-items-lg-center" navbar>
                <div className="d-none d-lg-block ml-lg-4">
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <Card className="card-nav collapse-brand bg-gradient-pink">
                        <Media className="align-items-center">
                          <span className="avatar avatar-sm rounded-circle">
                          {rd_user.logged?.thumbnail?
                            <img className="foto-nav rounded-circle" src={`${api_file}/${rd_user.logged.thumbnail}`} alt="..."/>
                            :
                            rd_user?.foto?
                              <img className="foto-nav rounded-circle" src={`${api_file}/${rd_user.foto}`} alt=""/>
                            :
                            <div className="img-default-nav rounded-circle"/>
                          }
                          </span>
                          <Media className="ml-1 mr-1 d-lg-block">
                            <span className="mb-0 text-sm font-weight-bold" id="nome">
                              {rd_user.user?.nome? rd_user.user.nome : null}
                            </span>
                          </Media>
                        </Media>
                      </Card>
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu">
                      <DropdownItem to="/" tag={Link} onClick={() => { sessionStorage.removeItem('token'); }}>
                        <i className="ni ni-user-run mr-2" />
                        <span className="nav-link-inner--text font-weight-bold">Sair</span>
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </div>
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
}