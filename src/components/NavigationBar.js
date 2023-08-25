import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import {useState} from "react";

const NavigationBar = () => {
    const [isAuth, setIsAuth] = useState(window.localStorage.getItem('isAuth') === "true");

    const login = () => {
        window.localStorage.setItem('isAuth', "true");
        setIsAuth(true);
    }

    const logout = () => {
        window.localStorage.setItem('isAuth', "false");
        setIsAuth(false);
    }

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/category">Category</Nav.Link>
                        <Nav.Link href="/products">Products</Nav.Link>
                        <Nav.Link href="/admin">Admin</Nav.Link>
                        <Nav.Link href="/user/account">Account</Nav.Link>
                        <Nav.Link href="/user/profile">Profile</Nav.Link>
                    </Nav>
                    <Button variant={isAuth ? 'warning' : 'success'} onClick={isAuth  ? logout : login}>{isAuth ? "Logout" : "Login"}</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;