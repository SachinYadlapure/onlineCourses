import {
  Box,
  Button,
  Container,
  FormLabel,
  Input,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/actions/userAction';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const submitHandler = e => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <Container h={'95vh'}>
      <VStack h={'full'} justifyContent="center" spacing={'16'}>
        <h1
          style={{ fontSize: '1.8rem' }}
          children="Welcome To Learning Platform"
        />
        <form onSubmit={submitHandler} style={{ width: '100%' }}>
          <Box marginY={'4'}>
            <FormLabel htmlFor="email" children="Email Address" />
            <Input
              required
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="abc@gmail.com"
              type={'email'}
              focusBorderColor={'yellow.500'}
            />
          </Box>
          <Box marginY={'4'}>
            <FormLabel htmlFor="password" children="Password" />
            <Input
              required
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Enter Your Password"
              type={'password'}
              focusBorderColor={'yellow.500'}
            />
          </Box>
          <Box>
            <Link to="/forgotpassword">
              <Button fontSize={'sm'} variant="link">
                Forgot Password?
              </Button>
            </Link>
          </Box>
          <Button my={'4'} colorScheme={'yellow'} type={'submit'}>
            Login
          </Button>
          <Box my={'4'}>
            New User?{' '}
            <Link to="/register">
              <Button colorScheme={'yellow'} variant="link">
                SignUp
              </Button>{' '}
              here
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Login;
