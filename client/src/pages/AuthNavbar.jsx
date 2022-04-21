import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Nav,Navbar,Container,Button} from "react-bootstrap";
import { Link } from 'react-router-dom';

import { logoutUser } from '../JS/actions/authActions';

import Register from '../components/Register';
import Login from "../components/Login"

const AuthNavbar = () => {
  const dispatch = useDispatch();
    const isAuth = useSelector(state=> state.authReducer.isAuth);
    const user = useSelector(state=> state.authReducer.user);

    const logout = ()=>{
      dispatch(logoutUser())
    }

  return (
    <div>
          <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand>Navbar</Navbar.Brand>
    <Nav className="me-auto">
    <Nav.Link ><Link className='link' to="/"> Home</Link></Nav.Link>
    <Nav.Link ><Link className='link' to="/dashboard">Dashboard</Link></Nav.Link> 
    </Nav>
    </Container>
    {isAuth ? (
    <div>
        <strong>
        <span style={{color:"white",padding:"1rem"}} >Hello {user.name} </span>
        <Button variant="dark" onClick={logout} >
        Logout
      </Button>
        </strong>
    </div>):(
    <>
    <Register />
    <Login />
    </>
    )}
  </Navbar>
    </div>
  )
}

export default AuthNavbar