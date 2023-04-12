import '../css/index.css';
import { Form, Button } from 'react-bootstrap';

import {useEffect, useState} from "react"; 
import * as axios from 'axios';

function RegisterUser() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const [name, setName] = useState("");
  const [registerUser, setRegisterUser] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  
  function getAge(DOB) {
    var today = new Date();
    var birthDate = new Date(DOB);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }    
    return age;
}

  
  useEffect(() => {
    if(registerUser == true) {
     if(username.length < 3 || password.length < 5 || getAge(dob)<18 || name.length < 3 ) {
      setErrorMessage('Enter proper input')
       setShowError(true)
     }
  
     else {
      setErrorMessage('')
       setShowError(false)
     axios.post('http://localhost:4000/registerUser', {
      username: username,
       password: password,
       dob: dob,
       name:name

     })
     .then(function (response) {
       console.log(response);
       window.location.href = './login' 
     })
     .catch(function (error) {
      console.log(error.response);
      setErrorMessage(error.response.data.message)
      setShowError(true)
     });
   }
   setRegisterUser(false)
    }
 
   }, [registerUser]);



  return (
    <div className="main">
     <div className='header'> Register</div>
     {showError && <div className='errorMessage'>{errorMessage}</div>}
      <div className='form'>
   
      <Form className="auth-form">
          <Form.Group controlId="loginName">
          <Form.Label className="input">Name</Form.Label>
            <Form.Control 
              type = "text"
              name = "name"
              placeholder = "Name (Min length:3)"
              className="text"
              onChange={e => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="loginDob">
          <Form.Label className="input">Date of birth</Form.Label>
            <Form.Control 
              type = "date"
              name = "dob"
              placeholder = ""
              className="text"
              onChange={e => setDob(e.target.value)}
            />
          </Form.Group>
         
          <Form.Group controlId="loginUsername">
          <Form.Label className="input">Username</Form.Label>
            <Form.Control 
              type = "text"
              name = "username"
              placeholder = "Username (Min length:3)"
              className="text"
              onChange={e => setUsername(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="loginPassword">
          <Form.Label className="input">Password</Form.Label>
            <Form.Control 
            type = "password"
            name = "password"
            placeholder = "Password (Min length:5)"
            className="text"
            onChange={e => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button variant="dark" className='button' onClick={() => setRegisterUser(true)}>
            Sign up
          </Button>
        </Form>
    
    </div>
    <hr/>
 
    
    </div>
  );
}

export default RegisterUser;