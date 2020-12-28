import React from "react";
import {Form, Button} from 'react-bootstrap';
import './login.css';

class Login extends React.Component {


    render (){

      var style = {
          display: 'block' ,
          textAlign: 'left',
          fontFamily: "Amazon Ember",
          fontSize: 13,
          color: 'black',
      }
        return (
            <React.Fragment>
 


<Form className="formTable">
<h1 id="h1"> Sign-In</h1>
  <Form.Group controlId="userName">
    <Form.Label style={style}>UserName</Form.Label>
    <Form.Control  style={style} type="text" placeholder="Enter username" />
    {/* <Form.Text style={style} className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text> */}
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label style={style}>Password</Form.Label>
    <Form.Control style={style} type="password" placeholder="Password" />
    <Form.Text style={style} className="text-muted">
      Your password is secured.
    </Form.Text>
  </Form.Group>
 {/*  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
    By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
  </Form.Group> */}
  <Button  className="button btn default" variant="primary" type="submit">
    Continue
  </Button>

  <Form.Text style={style} className="text-muted">
  By continuing, you agree to Amazon's <a href="">Conditions of Use</a> and <a href="">Privacy Notice.</a> 
    </Form.Text>
</Form>

<div className="amazonBlock">
  <h4 id="h4"> New to Amazon ?</h4>
  <Button className="createAmazonAccount btn default"> Create your Amazon Account</Button>
</div>
            </React.Fragment>
           

        );
    }
}


export default Login;
