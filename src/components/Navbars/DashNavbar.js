import React from "react";
import {Link} from "react-router-dom";
import Headroom from "headroom.js";
import {
    UncontrolledCollapse,
    DropdownMenu,
    DropdownItem,
    DropdownToggle,
    UncontrolledDropdown,
    Media,
    NavbarBrand,
    Navbar,
    NavItem,
    Nav,
    Container,
    Row,
    Col,
    Button
} from "reactstrap";
class DashNavbar extends React.Component {
    componentDidMount(){
        let headroom = new Headroom(document.getElementById("navbar-main"));
        headroom.init();
    }
    state = {
        collapseClasses: "",
        collapseOpen: false
    }
    onExiting = () => {
        this.setState({
            collapseClasses: "collapsing-out"
        });
    }
    onExited = () => {
        this.setState({
            collapseClasses: ""
        });
    }
    render(){
        return(
            <>
                <header className="header-global">
                    <Navbar className="navbar-main navbar-transparent navbar-light headroom" expand="lg" id="navbar-main">
                        <Container>
                            <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                                <img alt="..." src={require("assets/img/brand/argon-react-white.png")}/>
                            </NavbarBrand>
                            <button className="navbar-toggler" id="navbar_global">
                                <span className="navbar-toggler-icon"/>
                            </button>
                            <UncontrolledCollapse toggler="#navbar_global" navbar
                                className={this.state.collapseClasses}
                                onExiting={this.onExiting}
                                onExited={this.onExited}
                            >
                                <div className="navbar-collapse-header">
                                    <Row>
                                        <Col className="collapse-brand" xs="6">
                                            <Link to="/">
                                                <img alt="..." src={require("assets/img/brand/argon-react.png")}/>
                                            </Link>
                                        </Col>
                                        <Col className="collapse-close" xs="6">
                                            <button className="navbar-toggler" id="navbar_global">
                                                <span />
                                                <span />
                                            </button>
                                        </Col>
                                    </Row>
                                </div>
                                <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                                    <UncontrolledDropdown nav>
                                        <DropdownToggle nav>
                                            <i className="ni ni-ui-04 d-lg-none mr-1"/>
                                            <span className="nav-link-inner--text">Components</span>
                                        </DropdownToggle>
                                        <DropdownMenu className="dropdown-menu-xl">
                                            <div className="dropdown-menu-inner">
                                                <Media className="d-flex align-items-center" to="#" tag={Link}>
                                                    <div className="icon icon-shape bg-gradient-primary rounded-circle text-white">
                                                        <i className="ni ni-spaceship"/>
                                                    </div>
                                                    <Media body className="ml-3">
                                                        <h6 className="heading text-primary mb-md-1">Getting Started</h6>
                                                        <p className="description d-none d-md-inline-block mb-0">
                                                            Learn how to use Argon compiling scss, change brand colors and more.
                                                        </p>
                                                    </Media>
                                                </Media>
                                            </div>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                    <UncontrolledDropdown nav>
                                        <DropdownToggle nav>
                                            <i className="ni ni-collection d-lg-none mr-1"/>
                                            <span className="nav-link-inner--text">Examples</span>
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem to="#" tag={Link}>
                                                Landing
                                            </DropdownItem>
                                            <DropdownItem to="#" tag={Link}>
                                                Profile
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                </Nav>
                                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                                    <NavItem className="d-none d-lg-block ml-lg-4">
                                        <Button className="btn-neutral btn-icon"
                                            color="default" href="#"
                                            target="_blank"
                                        >
                                            <span className="btn-inner--icon">
                                                <i className="fa fa-cloud-download mr-2"/>
                                            </span>
                                            <span className="nav-link-inner--text ml-1">
                                                Download
                                            </span>
                                        </Button>
                                    </NavItem>
                                </Nav>
                            </UncontrolledCollapse>
                        </Container>
                    </Navbar>
                </header>
            </>
        );
    }
}
export default DashNavbar;