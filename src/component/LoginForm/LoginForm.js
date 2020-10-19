import React, { useState, useContext } from 'react';
import {
  Button,
  TextField,
  Typography,
  makeStyles,
  Container,
  FormControl,
  InputLabel,
  InputAdornment,
  IconButton,
  OutlinedInput,
  FormControlLabel,
  Checkbox,
  Hidden,
} from '@material-ui/core';
import purple from '@material-ui/core/colors/purple';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import myContext from '../../createContext';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(5),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },

  submit: {
    marginTop: theme.spacing(3),
  },

  studentButton: {},
  teacherButton: {
    backgroundColor: '#2196f3',
    borderColor: '#2196f3',

    '&:hover': {
      backgroundColor: '#1769aa',
      borderColor: '#2196f3',
    },
  },
  adminButton: {
    backgroundColor: purple[500],
    borderColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
      borderColor: purple[500],
    },
  },
  studentIcon: {
    color: theme.palette.secondary.main,
  },
  teacherIcon: {
    color: '#2196f3',
  },
  adminIcon: {
    color: purple[500],
  },
}));

function LoginForm() {
  const classes = useStyles();
  const value = useContext(myContext);
  const [submitError, setSubmitError] = useState(false);
  const [names, setNames] = useState('');
  const [values, setValues] = useState({
    password: '',
    showPassword: false,
  });
  const onClickSignin = () => {
    // if (names == '' || values.password == '') {
    //   alert('Please fill in the field');
    // }
    setSubmitError(false);
    if (names === '') {
      setSubmitError(true);
    }
  };

  const handleChange = (prop) => (e) => {
    setValues({ ...values, [prop]: e.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const userNameChange = (e) => {
    setNames(e.target.value);
    if (e.target.value == '') {
      setSubmitError(true);
    } else {
      setSubmitError(false);
    }
  };

  return (
    <div>
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form}>
            <TextField
              id="outlined-username-input"
              label="Username"
              type="username"
              autoComplete="current-username"
              variant="outlined"
              margin="normal"
              value={names}
              error={submitError}
              onChange={userNameChange}
              helperText={submitError ? 'Required' : Hidden}
              required
              fullWidth
            />
            <FormControl variant="outlined" required fullWidth margin="normal">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange('password')}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? (
                        <Visibility
                          className={`${
                            value == 0
                              ? classes.studentIcon
                              : value == 1
                              ? classes.teacherIcon
                              : classes.adminIcon
                          }`}
                        />
                      ) : (
                        <VisibilityOff
                          className={`${
                            value == 0
                              ? classes.studentIcon
                              : value == 1
                              ? classes.teacherIcon
                              : classes.adminIcon
                          }`}
                        />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={70}
              />
            </FormControl>

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              size="large"
              onClick={onClickSignin}
              className={`${classes.submit} ${
                value == 0
                  ? classes.studentButton
                  : value == 1
                  ? classes.teacherButton
                  : classes.adminButton
              }`}
            >
              Sign in
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default LoginForm;
