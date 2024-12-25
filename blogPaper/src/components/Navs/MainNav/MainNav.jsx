import {Link} from 'react-router-dom';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { green } from '@mui/material/colors';
export const MainNav = () => {
  return (
    <>
        <nav style={{margin: '0px 0px' ,padding: '5px'}} >
            <Box sx={{ display: 'flex', justifyContent: 'end',}}>
            <ButtonGroup  variant="text"  color='inherit' >
                <Button  sx={{  backgroundColor: green['A400'] }} ><Link to="/Home" >Home</Link></Button>
                <Button  sx={{  backgroundColor: green['A400'] }} ><Link to="/Editor">Editor</Link></Button>
                <Button  sx={{  backgroundColor: green['A400'] }} ><Link to="/Summary">Blog</Link></Button>
            </ButtonGroup>

            </Box>
            
        </nav>
    </>
  )
}
