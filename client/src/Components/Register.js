import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import useForm from '../libs/useForm';
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
    margin: theme.spacing(3, 0, 2)
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

export default function Register(props) {
    const classes = useStyles();
    const { inputs, handleChange } = useForm({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirm: ""
    });

    const handleSubmit = (e) => {
      e.preventDefault();

      let users = JSON.parse(localStorage.getItem("users"));
      // Validate inputs
      if (validateInput(inputs, users)) {
        // add data to localStorage
        saveUser(users);
      } else {
        return false;
      }

      props.history.push("/login");
    };

    const validateInput = (inputs, users) => {

        let validObj = { isValid : true, errorMsg: "" }; 
        // 1- Check all fields are non empty
        if (!inputs.firstname || !inputs.lastname || !inputs.email || !inputs.password || !inputs.confirm) {
          validObj.errorMsg = "All the fields should be non empty";
          validObj.isValid = validObj.isValid && false;
        }
        // 2- check if email has proper format
        if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(inputs.email))) {
          validObj.errorMsg = "Please validate email format";
          validObj.isValid = validObj.isValid && false;
        }
        // 3- check if email already exists
        if (users) {
          for(let i=0; i<users.data.length; i++) {
            if (users.data[i]?.email === inputs.email) {
              validObj.errorMsg = "Email already exists";
              validObj.isValid = validObj.isValid && false;
              break;
            }
          }
        }

        // password and confirmation password must be same
        if (inputs.password !== inputs.confirm) {
          validObj.errorMsg = "Passwords are not matched";
          validObj.isValid = validObj.isValid && false;
        }

        if(validObj.errorMsg) {
          alert(validObj.errorMsg);
        }

        return validObj.isValid;
    }

    const saveUser = users => {
      let usersObj;
      if(users && users.data.length) {
        let updatedArr = users.data.concat(inputs);
        usersObj = { data: updatedArr };
      } else {
        usersObj = {data: new Array(inputs) };
      }
      localStorage.setItem("users", JSON.stringify(usersObj));
    }

    return (
        <RegisterStyle>
            <RegisterTextStyle>
                <h2>Sign Up</h2>
                <p>We do not share your personal details with anyone</p>
            </RegisterTextStyle>
            <RegisterFormStyle>
                <form className={classes.root} autoComplete="off" onSubmit={handleSubmit} method="post">
                    <TextField 
                      id="standard-basic" 
                      label="First Name" 
                      name="firstname"
                      value={inputs.firstname}
                      onChange={handleChange} />
                    <TextField 
                      id="standard-basic" 
                      label="Last Name"
                      name="lastname"
                      value={inputs.lastname}
                      onChange={handleChange}  />
                    <TextField 
                      id="standard-basic" 
                      label="Email" 
                      name="email"
                      value={inputs.email}
                      onChange={handleChange}  />
                    <TextField 
                      id="standard-basic" 
                      label="Password" 
                      name="password"
                      value={inputs.password}
                      onChange={handleChange}  />
                    <TextField 
                      id="standard-basic" 
                      label="Confirm Password" 
                      name="confirm"
                      value={inputs.confirm}
                      onChange={handleChange}  />
                    <Button type="submit" className={classes.submit} variant="contained" color="secondary">Register</Button>
                </form>
            </RegisterFormStyle>
        </RegisterStyle>
    );
}