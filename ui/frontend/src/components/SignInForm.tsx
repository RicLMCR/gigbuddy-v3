import { useForm } from 'react-hook-form';
import { Box, TextField, Button } from '@mui/material';
import styled from '@emotion/styled';

type SignInFormValues = {
  username: string;
  email: string;
  password: string;
};

const SignInForm = () => {
  const { register, handleSubmit, reset, clearErrors, formState } =
    useForm<SignInFormValues>();
  const { errors } = formState;

  const onSubmit = (data: SignInFormValues) => {
    console.log(data);

    if (!Object.keys(errors).length) {
      reset({ username: '', email: '', password: '' });
      clearErrors();
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: 'white',
        paddingBlock: '40px',
        paddingInline: '80px',
        borderRadius: '7px',
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <TextField
          variant="outlined"
          label="Username"
          type="text"
          id="username"
          {...register('username', {
            required: {
              value: true,
              message: 'Username is required',
            },
            minLength: {
              value: 4,
              message: 'Username must have at least 4 characters',
            },
          })}
        />
        <ErrorContainer>
          <ErrorMessage>{errors.username?.message}</ErrorMessage>
        </ErrorContainer>

        <TextField
          label="email"
          variant="outlined"
          type="email"
          id="email"
          {...register('email', {
            required: {
              value: true,
              message: 'Email is required',
            },
            pattern: {
              value: /^[a-z0-9\.-_]+[@][a-z0-9-_]+[\.][a-z0-9\.]{2,}$/,
              message: 'Invalid email format',
            },
          })}
        />
        <ErrorContainer>
          <ErrorMessage>{errors.email?.message}</ErrorMessage>
        </ErrorContainer>

        <TextField
          label="password"
          variant="outlined"
          type="password"
          id="password"
          {...register('password', {
            required: {
              value: true,
              message: 'Password is required',
            },
            minLength: {
              value: 6,
              message: 'Password must have at least 6 characters',
            },
          })}
        />
        <ErrorContainer>
          <ErrorMessage>{errors.password?.message}</ErrorMessage>
        </ErrorContainer>
        <Button type="submit" variant="contained">
          Sign In
        </Button>
      </form>
    </Box>
  );
};

const ErrorContainer = styled.div`
  min-height: 40px;
  margin-bottom: 20px;
`;

const ErrorMessage = styled.span`
  color: black;
  font-size: 12px;
  margin: 0;
`;

export default SignInForm;
