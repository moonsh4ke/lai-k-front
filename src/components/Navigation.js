import { Container } from 'react-bootstrap';
import { Navbar, Nav } from 'react-bootstrap';
import LoginModal from './Login';


const Navigation = (props) => {
    var type = props.type === "login" ? "login" : "Log out";
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Lai-K</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/about">Acerca de</Nav.Link>
                        <Nav.Link href="/contact">Contactenos!</Nav.Link>
                    </Nav>
                    <Nav>
                        <LoginModal type={type}/>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default Navigation;