import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import {Button,Modal,Form} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

import { loginUser } from '../JS/actions/authActions';

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password,setPassword] =useState("");

  const UserLogin= ()=>{
      const newUser = {email,password};
      dispatch(loginUser(newUser));
      navigate("/dashboard")
      setEmail("");
      setPassword("")
  }


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        Login
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>connect account</Modal.Title>
        </Modal.Header>
        <Modal.Body>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" name='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" name='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
  </Form.Group>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{ UserLogin()  ; handleClose()}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


   


export default Register