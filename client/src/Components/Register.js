import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useForm, Controller } from "react-hook-form";
import { RegisterStyle, RegisterTextStyle, RegisterFormStyle, ErrorMessage } from "../styles/AuthStyles";
import { validateInput, saveUser } from "../libs/useForm";
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
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function Register(props) {
    const [emailError, setEmailError] = useState(null);
    const classes = useStyles();
    const { control, watch, formState: { errors }, handleSubmit } = useForm();
    const watchFields = watch(["password", "confirm"]);


    const onSubmit = inputs => {
      let users = JSON.parse(localStorage.getItem("users"));
      let validateResult = validateInput(inputs, users);
      if (validateResult.valid) {
        saveUser(inputs, users);
        props.history.push("/login");
      } else {
        setEmailError(validateResult.errorMessage);
      }
    };

    return (
        <RegisterStyle>
            <RegisterTextStyle>
                <h2>Sign Up</h2>
                <p>We do not share your personal details with anyone</p>
            </RegisterTextStyle>
            <RegisterFormStyle>
            <form className={classes.root} autoComplete="off"  onSubmit={handleSubmit(onSubmit)}>
                <div className="field">
                    <label>First Name</label>
                    <Controller 
                      name="firstname"
                      id="firstname"
                      control={control}
                      rules={{ required: true, pattern: /^[A-Za-z]+$/i }}
                      render={({ field }) => <TextField {...field} />}
                    />
                    {errors.firstname?.type === 'required' && <ErrorMessage>First name is required</ErrorMessage>}
                    {errors.firstname?.type === 'pattern' && <ErrorMessage>First name only allows alphabets</ErrorMessage>}
                </div>
                <div className="field">
                    <label>Last Name</label>
                    <Controller
                      name="lastname"
                      id="lastname"
                      rules={{ required: true, pattern: /^[A-Za-z]+$/i }}
                      control={control}
                      defaultValue=""
                      render={({ field }) => <TextField {...field} />}
                    />
                    {errors.lastname?.type === 'required' && <ErrorMessage>Last name is required</ErrorMessage>}
                    {errors.lastname?.type === 'pattern' && <ErrorMessage>Last name only allows alphabets</ErrorMessage>}
                </div>
                <div className="field">
                    <label>Email</label>
                    <Controller
                      name="email"
                      id="email"
                      rules={{ required: true, pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i }}
                      control={control}
                      defaultValue=""
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
                </div>
                <div className="field">
                    <label>Confirm Password</label>
                    <Controller
                      name="confirm"
                      id="confirm"
                      rules={{ required: true, validate: () => watchFields[0] === watchFields[1] }}
                      control={control}
                      defaultValue=""
                      render={({ field }) => <TextField type="password" {...field} />}
                    />
                     {errors.confirm?.type === 'required' && <ErrorMessage>Confirmation password is required</ErrorMessage>}
                     {errors.confirm?.type === 'validate' && <ErrorMessage>Both password and confirm password should be same</ErrorMessage>}
                     <ErrorMessage>{emailError}</ErrorMessage>
                </div>
                <Button type="submit" className={classes.submit} variant="contained" color="secondary">Sign Up</Button>
                </form>
            </RegisterFormStyle>
        </RegisterStyle>
    );
}