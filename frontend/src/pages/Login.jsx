import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import {
  Box,
  Button,
  Card,
  Container,
  Divider,
  Input,
  TextField,
  Typography,
} from '@mui/material';

const Login = () => {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);
  const { isAuth, login } = authContext;

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: null,
    password: null,
  });

  //check if the user is already loggedin
  useEffect(() => {
    if (isAuth) {
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuth]);

  const validateSubmit = (e) => {
    e.preventDefault();
    const tempErrors = {
      email: !formData.email ? 'Email is required' : null,
      password: !formData.password ? 'Password is required' : null,
    };
    setErrors(tempErrors);

    if (Object.values(tempErrors).filter((value) => value).length) {
      return;
    }
    submitHandler(e);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    await login(formData);
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        py: {
          xs: '60px',
          md: '240px',
        },
        height: '100vh',
      }}
    >
      <Card elevation={16} sx={{ p: 4 }}>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Typography variant="h4">Log in</Typography>
          <Typography color="textSecondary" sx={{ mt: 2 }} variant="body2">
            Sign in on the internal platform
          </Typography>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            mt: 3,
          }}
        >
          <form noValidate onSubmit={validateSubmit}>
            <TextField
              fullWidth
              type="text"
              name="email"
              label="Email"
              autoFocus
              id="email"
              margin="normal"
              value={formData.email}
              autoComplete={false}
              onChange={(e) => {
                setErrors({ ...errors, email: null });
                setFormData({
                  ...formData,
                  email: e.target.value,
                });
              }}
            />
            <TextField
              fullWidth
              autoFocus
              type="password"
              label="Password"
              name="password"
              variant="outlined"
              id="password"
              margin="normal"
              value={formData.password}
              onChange={(e) => {
                setErrors({ ...errors, password: null });
                setFormData({
                  ...formData,
                  password: e.target.value,
                });
              }}
            />
            <Box sx={{ mt: 2 }}>
              <Button fullWidth size="large" type="submit" variant="contained">
                Log In
              </Button>
            </Box>
          </form>
        </Box>
      </Card>
      {/* <div className='login-signup-wrapper'>
					<div className='card max-w-[480px] w-full bg-primary text-white'>
						<div className='text-center'>
							<h2 className='card-page-title'>
								Welcome to Video Streamer
							</h2>
							<p className='card-page-info'>
								Log into your account by entering your email and
								password.
							</p>
						</div>
						<form
							id='websiteUserLoginForm'
							onSubmit={validateSubmit}
							className='grid grid-cols-1 group'
						>
							<div className='input-fields-wrapper'>
								<TextField
									fullWidth
									type='text'
									name='email'
									label='Email'
									autoFocus
									id='email'
									value={formData.email}
									autoComplete={false}
									onChange={(e) => {
										setErrors({ ...errors, email: null });
										setFormData({
											...formData,
											email: e.target.value,
										});
									}}
								/>
								<span className='err-tag'>
									{errors.email ?? ""}
								</span>
							</div>
							<div className='input-fields-wrapper'>
								<TextField
									fullWidth
									autoFocus
									type='password'
									label='Password'
									name='password'
									variant='outlined'
									id='password'
									value={formData.password}
									onChange={(e) => {
										setErrors({ ...errors, password: null });
										setFormData({
											...formData,
											password: e.target.value,
										});
									}}
								/>
								<span className='err-tag'>
									{errors.password ?? ""}
								</span>
							</div>
							<div className='mt-uni-gap'>
								<Button
									type='submit'
									className='w-full py-3 text-lg text-white btn bg-button-primary'
								>
									Log In
								</Button>
							</div>
						</form>
					</div>
				</div> */}
    </Container>
  );
};

export default Login;
