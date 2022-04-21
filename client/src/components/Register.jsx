import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import {Button,Modal,Form} from "react-bootstrap";

import { registerUser } from '../JS/actions/authActions';

const Register = () => {
    const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [name,setName] =  useState('');
  const [lastName,setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password,setPassword] =useState("");

  const UserRegister = ()=>{
      const newUser = {name,lastName,email,password};
      dispatch(registerUser(newUser));
      setName("");
      setLastName("");
      setEmail("");
      setPassword("")
  }


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        Register
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>create account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
  
    <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name ..." name='name' value={name} onChange={(e)=>setName(e.target.value)} />
    </Form.Group>
    <Form.Group className="mb-3" >
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Last Name ..." name='lastName' value={lastName} onChange={(e)=>setLastName(e.target.value)} />
    </Form.Group>
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
          <Button variant="primary" onClick={()=>{ UserRegister()  ; handleClose()}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


   


export default Register