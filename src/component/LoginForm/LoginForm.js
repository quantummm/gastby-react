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
  // Hidden,
  Snackbar,
  Portal,
  // Collapse,
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import purple from '@material-ui/core/colors/purple';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import myContext from '../../createContext';
import { useDispatch } from 'react-redux';
import { LOGIN_REQUEST } from '../../store/actions/index';

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
  const dispatch = useDispatch();
  const value = useContext(myContext);
  const [submitError, setSubmitError] = useState(false);
  const [names, setNames] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const [values, setValues] = useState({
    password: '',
    showPassword: false,
  });

  const login = (username, password) =>
    dispatch({
      type: LOGIN_REQUEST,
      username,
      password,
    });

  const onClickSignin = (e) => {
    e.preventDefault();

    setSubmitError(false);

    if (names === '' && values.password === '') {
      setErrorMessage('Require username and password');
      return setSubmitError(true);
    } else if (values.password === '') {
      setErrorMessage('Require password');
      return setSubmitError(true);
    } else if (names === '') {
      setErrorMessage('Require username');
      return setSubmitError(true);
    }

    if (names && values.password) {
      login(names, values.password);
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

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSubmitError(false);
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
              onChange={userNameChange}
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
            <Portal>
              <Snackbar
                open={submitError}
                autoHideDuration={3000}
                onClose={handleClose}
              >
                <Alert onClose={handleClose} severity="error">
                  {errorMessage}
                </Alert>
              </Snackbar>
            </Portal>

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
              Sign In
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default LoginForm;
