import React from "react";
import {Link} from "react-router-dom";
import {
    Col,
    Row,
    Nav,
    Navbar,
    NavLink,
    NavItem,
    NavbarBrand,
    Collapse,
    Container,
    DropdownMenu,
    DropdownItem,
    DropdownToggle,
    UncontrolledDropdown
} from "reactstrap";
function DashNavbar(){
    const [collapseOpen, toggleCollapseOpen] = React.useState(false);
    return(
        <>
            <Navbar className="navbar-dark bg-transparent" expand="lg">
                <Container>
                    <NavbarBrand href="#" onClick={(e) => e.preventDefault()}>
                        LOGO
                    </NavbarBrand>
                    <button className="navbar-toggler"
                        onClick={() => toggleCollapseOpen(!collapseOpen)}
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <Collapse isOpen={collapseOpen} navbar>
                        <div className="navbar-collapse-header">
                            <Row>
                                <Col className="collapse-brand" xs="6">
                                    <Link to="/dashboard-page">
                                        <img alt="..." src={require("assets/img/brand/blue.png")}/>
                                    </Link>
                                </Col>
                                <Col className="collapse-close" xs="6">
                                    <button className="navbar-toggler"
                                        onClick={() => toggleCollapseOpen(!collapseOpen)}
                                    >
                                        <span />
                                        <span />
                                    </button>
                                </Col>
                            </Row>
                        </div>
                        <Nav className="ml-lg-auto" navbar>
                            <NavItem>
                                <NavLink className="nav-link-icon" href="#"
                                    onClick={(e) => e.preventDefault()}
                                >
                                    <i className="ni ni-favourite-28"/>
                                    <span className="nav-link-inner--text d-lg-none">
                                        Discover
                                    </span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link-icon" href="#"
                                    onClick={(e) => e.preventDefault()}
                                >
                                    <i className="ni ni-notification-70"/>
                                    <span className="nav-link-inner--text d-lg-none">
                                        Profile
                                    </span>
                                </NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav>
                                <DropdownToggle
                                    aria-expanded={false}
                                    aria-haspopup={true}
                                    caret
                                    className="nav-link-icon"
                                    color="default"
                                    data-toggler="dropdown"
                                    href="#"
                                    onClick={(e) => e.preventDefault()}
                                    id="navbar_default_dropdown_1"
                                    nav
                                    role="button"
                                >
                                    <i className="ni ni-settings-gear-650"/>
                                    <span className="nav-link-inner--text d-lg-none">
                                        Settings
                                    </span>
                                </DropdownToggle>
                                <DropdownMenu aria-labelledby="navbar-default_dropdown_1" right>
                                    <DropdownItem href="#"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        Action
                                    </DropdownItem>
                                    <DropdownItem href="#"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        Another action
                                    </DropdownItem>
                                    <DropdownItem divider></DropdownItem>
                                    <DropdownItem href="#"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        Something else here
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </>
    );
}
export default DashNavbar;