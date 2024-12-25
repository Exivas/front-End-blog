import { Container, Typography, Paper, Avatar } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Meavatar from '../../assets/me.jpg';

const AboutMe = () => {
  return (
    <Container sx={{ marginTop: '8rem' }}>
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <div style={{ width: '100%', height: '200px', overflow: 'hidden' }}>
              <Avatar
                alt="Erick Corcino"
                src={Meavatar}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Typography variant="h4" component="h2">
              Erick Corcino
            </Typography>
            <Typography variant="body1" component="p">
              <strong>Profesión:</strong> Desarrollador de Software Full Stack
            </Typography>
            <Typography variant="body1" component="p">
              <strong>Experiencia:</strong> 1 años en desarrollo web
            </Typography>
            <Typography variant="body1" component="p">
              <strong>Educación:</strong> Estudiante de desarrollo de software
            </Typography>
            <Typography variant="body1" component="p">
              <strong>Habilidades:</strong> 
              JavaScript, TypeScript, .Net, HTML, CSS,  React, Node.js, Express.Js, MongoDB, MySQL, postgreSQL
            </Typography>
            <Typography variant="body1" component="p">
              <strong>Idiomas:</strong> Espanol(Nativo), Ingles(A2)
            </Typography>
            <Typography variant="body1" component="p">
              <strong>Intereses:</strong> Jugar Videojuegos, Historia, Quimica y aveces la fisica cuando me siento valiente
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default AboutMe;