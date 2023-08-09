import { useForm } from 'react-hook-form';
import { Box, TextField } from '@mui/material';

type SignInFormValues = {
  username: string;
  email: string;
  password: string;
};

const errorMessages = {
  color: 'black',
  fontSize: '15px',
};

const SignInForm = () => {
  const { register, handleSubmit, formState } = useForm<SignInFormValues>();
  const { errors } = formState;

  const onSubmit = (data: SignInFormValues) => console.log(data);

  return (
    <Box
      sx={{
        backgroundColor: 'white',
        padding: '10px',
        borderRadius: '7px',
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* <label htmlFor="username">Username</label> */}
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
        <p style={errorMessages}>{errors.username?.message}</p>

        {/* <label htmlFor="email">Email</label> */}
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
        <p style={errorMessages}>{errors.email?.message}</p>

        {/* <label htmlFor="password">Password</label> */}
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
        <p style={errorMessages}>{errors.password?.message}</p>

        <button>Sign In</button>
      </form>
    </Box>
  );
};
export default SignInForm;
