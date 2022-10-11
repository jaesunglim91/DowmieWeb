import {useContext} from 'react';
import {
  Box,
  Button,
  FormControl,
  Input,
  InputLabel,
  Typography,
} from '@mui/material';
import {AuthContext} from '../contexts/Auth';
import {isEmptyObject, setItemToLocalStorage} from '../utils';
import {useNavigate} from 'react-router-dom';
import Header from '../components/Header';

export default function SignUp() {
  const {userInfo, dispatch} = useContext(AuthContext);
  const navigate = useNavigate();

  const isSignUpMode = isEmptyObject(userInfo);

  const {name, email, phoneNumber} = userInfo;

  const pageTitle = isSignUpMode ? 'SignUp' : 'Modify';
  const buttonText = isSignUpMode ? 'SIGN UP' : 'MODIFY';

  const handleSignupSubmit = (e) => {
    e.preventDefault();

    const signUpFormData = new FormData(e.currentTarget);

    const userInfo = {
      name: signUpFormData.get('name'),
      email: signUpFormData.get('email'),
      phoneNumber: signUpFormData.get('phoneNumber'),
    };

    setItemToLocalStorage({userInfo});
    dispatch({
      type: 'SIGNUP',
      payload: userInfo,
    });

    navigate('/');
  };
  return (
    <>
      <Header />
      <Box
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box sx={{width: 600, height: 1000}}>
          <Typography component="h1" variant="h5">
            {pageTitle}
          </Typography>
          <form onSubmit={handleSignupSubmit}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="name">name</InputLabel>
              <Input
                id="name"
                name="name"
                autoComplete="name"
                defaultValue={name}
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">email</InputLabel>
              <Input
                name="email"
                type="email"
                id="password"
                autoComplete="email"
                defaultValue={email}
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="phoneNumber">phoneNumber</InputLabel>
              <Input
                name="phoneNumber"
                id="phoneNumber"
                autoComplete="phoneNumber"
                defaultValue={phoneNumber}
              />
            </FormControl>
            <Button
              sx={{marginTop: 5}}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              {buttonText}
            </Button>
          </form>
        </Box>
      </Box>
    </>
  );
}
