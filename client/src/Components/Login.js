import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import useForm from '../libs/useForm';
import { connect } from 'react-redux';
import styled from 'styled-components';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '35ch',
    },
  },
  submit: {
    width: '90%;',
    margin: theme.spacing(3, 0, 2),
  }
}));



const RegisterStyle = styled.div`
  display: flex;
  width: 700px;
  margin: 0 auto;
  justify-content: space-between;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }

`;

const RegisterTextStyle = styled.div`
  margin-top: 2rem;
  flex: 1 1;

  p {
    font-size: 0.8rem;
    margin-top: 1rem;
  }

  @media (max-width: 767px) {
    margin-top: 0;

    h2 {
      text-align: center;
    }
  }
`;

const RegisterFormStyle = styled.div`
  flex: 1 1;

  @media (max-width: 767px) {
    margin: 0 auto;
    max-width: 85%;
  }
`;


function Register(props) {
    const classes = useStyles();
    const { inputs, handleChange } = useForm({
      email: "anurag@gmail.com",
      password: "qwerty"
    });

    const validateLogin = (user) => {
      let users = JSON.parse(localStorage.getItem("users"));
      let validated = false;

      // validate inputs
      if (!users) {
        alert("Please register before login");
        return false;
      }
      if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(inputs.email))) {
        alert("Please validate email format");
        return false;
      }
      
      // validate login details
      for(let i=0; i<users.data.length; i++) {
        if (users.data[i]?.email === inputs.email && users.data[i]?.password === inputs.password) {
          validated = true;
          break;
        }
      }

      return validated;
      
    }

    const handleSubmit = (e) => {
      e.preventDefault();

      if (!inputs.email || !inputs.password) {
        alert("All the fields should be non empty");
        return false;
      }

      if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(inputs.email))) {
        alert("Please validate email format");
        return false;
      }

      if(validateLogin(inputs)) {
        // alert("Authenticated");
        props.loginSuccess();
        props.history.push("/");
      } else {
        alert(`Invalid credentials. If new user, please register yourself`);
      }
    }

    return (
        <RegisterStyle>
            <RegisterTextStyle>
                <h2>Login</h2>
                <p>Get access to your Orders, Wishlist and Recommendations</p>
            </RegisterTextStyle>
            <RegisterFormStyle>
                <form className={classes.root} method="post" onSubmit={handleSubmit} autoComplete="off">
                    <TextField 
                      label="Email"
                      name="email"
                      value={inputs.email}
                      onChange={handleChange} />
                    <TextField 
                      label="Password"
                      name="password"
                      value={inputs.password}
                      onChange={handleChange} />
                    <Button 
                      className={classes.submit} 
                      variant="contained" 
                      color="secondary"
                      type="submit" >Login</Button>
                </form>
            </RegisterFormStyle>
        </RegisterStyle>
    );
}

const mapDispatchToProps = dispatch => {
  return {
    loginSuccess : () => dispatch({ type: "LOGIN_SUCCESS" })
  }
}

export default connect(null, mapDispatchToProps)(Register);