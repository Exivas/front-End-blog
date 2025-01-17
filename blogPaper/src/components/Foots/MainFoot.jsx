import { Container, Typography, Link, Box } from '@mui/material';

const MainFoot = () => {
    return (
        <Box component="footer" sx={{ py: 3, px: 2, mt: 'auto', backgroundColor: '#333', color: 'white', marginTop: '20px' }}>
            <Container maxWidth="sm">
                <Typography variant="body1" align="center">
                    &copy; {new Date().getFullYear()} BlogPaper
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                    <Link href="/about" color="inherit" sx={{ mx: 1 }}>
                        Acerca de
                    </Link>
                    <Link href="/contact" color="inherit" sx={{ mx: 1 }}>
                        Contacto
                    </Link>
                    <Link href="/privacy" color="inherit" sx={{ mx: 1 }}>
                        Política de privacidad
                    </Link>
                </Box>
            </Container>
        </Box>
    );
};

export default MainFoot;