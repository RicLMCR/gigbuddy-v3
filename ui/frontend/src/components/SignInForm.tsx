import { useForm } from 'react-hook-form';
import { Box, TextField, Button } from '@mui/material';
import { styled } from '@mui/system';
import { SignInFormValues } from '../types';

const SignInForm = () => {
  const { register, handleSubmit, reset, clearErrors, formState } =
    useForm<SignInFormValues>();
  const { errors } = formState;

  const onSubmit = (data: SignInFormValues) => {
    console.log(data);

    if (!Object.keys(errors).length) {
      reset({
        username: '',
        firstname: '',
        lastname: '',
        email: '',
        password: '',
      });
      clearErrors();
    }
  };

  return (
    <StyledFormContainer>
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
        <StyledErrorContainer>
          <StyledErrorMessage>{errors.username?.message}</StyledErrorMessage>
        </StyledErrorContainer>

        <TextField
          variant="outlined"
          label="First Name"
          type="text"
          id="firstname"
          {...register('firstname', {
            required: {
              value: true,
              message: 'First name is required',
            },
          })}
        />
        <StyledErrorContainer>
          <StyledErrorMessage>{errors.firstname?.message}</StyledErrorMessage>
        </StyledErrorContainer>

        <TextField
          variant="outlined"
          label="Last Name"
          type="text"
          id="lastname"
          {...register('lastname', {
            required: {
              value: true,
              message: 'Last name is required',
            },
          })}
        />
        <StyledErrorContainer>
          <StyledErrorMessage>{errors.lastname?.message}</StyledErrorMessage>
        </StyledErrorContainer>

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
        <StyledErrorContainer>
          <StyledErrorMessage>{errors.email?.message}</StyledErrorMessage>
        </StyledErrorContainer>

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
        <StyledErrorContainer>
          <StyledErrorMessage>{errors.password?.message}</StyledErrorMessage>
        </StyledErrorContainer>

        <Button type="submit" variant="contained">
          Sign In
        </Button>
      </form>
    </StyledFormContainer>
  );
};

const StyledFormContainer = styled(Box)`
  background-color: white;
  padding-block: 40px;
  padding-inline: 80px;
  border-radius: 7px;
`;

const StyledErrorContainer = styled(Box)`
  min-height: 40px;
  margin-bottom: 20px;
`;

const StyledErrorMessage = styled(Box)`
  color: red;
  font-size: 12px;
  margin: 0;
`;

export default SignInForm;
