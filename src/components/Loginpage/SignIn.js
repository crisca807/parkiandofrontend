import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link as RouterLink } from 'react-router-dom';
import '../../assets/css/Login_Styles.css'; // Importa los estilos CSS

function SignIn() {
  return (
    <div className='body-login'>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className="paper">
          <Avatar className="avatar">
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Iniciar sesión
          </Typography>
          <form className="form" noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="correo-electronico"
              label="Correo electrónico"
              name="email"
              autoComplete="email"
              autoFocus
              className="textField"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="contraseña"
              autoComplete="current-password"
              className="textField"
            />
            <Button
              component={RouterLink}
              to="/"
              fullWidth
              variant="contained"
              className="submit"
            >
              Iniciar sesión
            </Button>
            <Grid container className="links-container">
              <Grid item xs={12}>
                <Link href="#" variant="body2" className="forgot-password">
                  ¿Olvidaste tu contraseña?
                </Link>
              </Grid>
              <Grid item xs={12}>
                <RouterLink to="/registerOptions" variant="body2" className="sign-up-link">
                  {"¿No tienes una cuenta? Regístrate"}
                </RouterLink>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="#">
              Parkiando
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        </Box>
      </Container>
    </div>
  );
}

export default SignIn;
