import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { RegisterStyle, RegisterTextStyle, RegisterFormStyle, ErrorMessage } from "../styles/AuthStyles";

import { useForm, Controller } from "react-hook-form";
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '35ch',
      display: "flex",
      flexDirection: "column"
    },
  },
  submit: {
    width: '90%;',
    margin: theme.spacing(3, 0, 2),
  }
}));

function NewLogin(props) {
    const [UserError, setUserError] = useState(null);
    const classes = useStyles();
    const { control, formState: { errors }, handleSubmit } = useForm();

    const validateLogin = userData => {
        let users = JSON.parse(localStorage.getItem("users"));
        let validated = false;
  
        // validate if any user exists
        if (!users) {
            setUserError("Please register before login");
            return false;
        }
        
        // validate login details
        for(let i=0; i<users.data.length; i++) {
          if (users.data[i]?.email === userData.email && users.data[i]?.password === userData.password) {
            validated = true;
            break;
          }
        }
  
        return validated;
      }
  
      const onSubmit = inputs => {
        if(validateLogin(inputs)) {
          props.loginSuccess();
          props.history.push("/");
        } else {
            setUserError("Invalid credentials");
        }
      }

    return (
        <RegisterStyle>
            <RegisterTextStyle>
                <h2>Login</h2>
                <p>Get access to your Orders, Wishlist and Recommendations</p>
            </RegisterTextStyle>
            <RegisterFormStyle>
                <form className={classes.root} method="post" onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                    <div className="field">
                        <label>Email</label>
                        <Controller
                        name="email"
                        id="email"
                        rules={{ required: true, pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i }}
                        control={control}
                        defaultValue="anurag@gmail.com"
                        render={({ field }) => <TextField {...field} />}
                        />
                        {errors.email?.type === 'required' && <ErrorMessage>Email is required</ErrorMessage>}
                        {errors.email?.type === 'pattern' && <ErrorMessage>The entered email is invalid</ErrorMessage>}
                    </div>
                    <div className="field">
                        <label>Password</label>
                        <Controller
                        name="password"
                        id="password"
                        rules={{ required: true }}
                        control={control}
                        defaultValue=""
                        render={({ field }) => <TextField type="password" {...field} />}
                        />
                        {errors.password?.type === 'required' && <ErrorMessage>Password is required</ErrorMessage>}
                        <ErrorMessage>{UserError}</ErrorMessage>
                    </div>
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

export default connect(null, mapDispatchToProps)(NewLogin);