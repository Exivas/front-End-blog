import { Container, Typography, Paper, Avatar, Divider,} from "@mui/material";
import Grid from "@mui/material/Grid2";
import Meavatar from "../../assets/me.jpg";
import Contacts from "../Contacts/Contacts";

const AboutMe = () => {
  return (
    <Container sx={{ }}>
      <Paper
        elevation={0}
        sx={{
          padding: "20px",
          marginTop: "20px",
          background: "rgba(255, 255, 255, 0.15)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          borderRadius: "16px",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          "&:hover": {
            boxShadow: "0 4px 40px rgba(0, 0, 0, 0.15)",
            transition: "all 0.3s ease-in-out",
          },
        }}
      >
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item xs={12} sm={3} container justifyContent="center">
            <Avatar
              alt="Erick Corcino"
              src={Meavatar}
              sx={{
                width: 200,
                height: 200,
                border: "4px solid rgba(255, 255, 255, 0.2)",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={9}>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontFamily: "Montserrat, sans-serif", 
                mb: 2,
                color: "#333",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Erick Corcino
            </Typography>
            <Typography
              variant="body1"
              component="p"
              sx={{
                textAlign: "center",
                fontFamily: "Open Sans, sans-serif",
                mb: 1,
              }}
            >
            <strong>  Desarrollador de Software Full Stack</strong> 
            </Typography>
            <Typography variant="body1" component="p" sx={{ mb: 1 }}>
              <strong>Educación:</strong> Desarrollo de software (ITLA)
            </Typography>
            <Typography variant="body1" component="p" sx={{ mb: 1 }}>
              <strong>Habilidades:</strong>
              JavaScript, TypeScript, .Net, HTML, CSS, React, Node.js,
              Express.js, MongoDB, MySQL, PostgreSQL
            </Typography>
            <Typography variant="body1" component="p" sx={{ mb: 1 }}>
              <strong>Idiomas:</strong> Español (Nativo), Inglés (A2)
            </Typography>
            <Typography variant="body1" component="p" sx={{ mb: 1 }}>
              <strong>Intereses:</strong> Jugar Videojuegos, Historia, Química y
              a veces la Física cuando me siento valiente
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Typography variant="body1" component="p" sx={{ mb: 1 }}>
              Soy un apasionado por la tecnología con un fuerte deseo de
              aprender y crecer en el campo de las tecnologías de la
              información. Cuento con una sólida base en programación y un
              enfoque proactivo para resolver problemas, lo que me permite
              adaptarme rápidamente a nuevos entornos y tecnologías. Busco una
              oportunidad para iniciar mi carrera profesional en una empresa
              dinámica e innovadora, donde pueda aplicar mis conocimientos,
              adquirir experiencia práctica y contribuir al éxito del equipo.
              Estoy especialmente interesado en desarrollo de software,
              y abierto a explorar nuevas áreas dentro del campo de las TI.
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <center>
              <Contacts />
            </center>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default AboutMe;
