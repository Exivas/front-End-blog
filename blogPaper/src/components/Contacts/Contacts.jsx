import { IconButton} from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
const Contacts = () => {
  return (
    <>
    <IconButton href="https://github.com/Exivas" target="_blank" sx={{color: '#333'}}> 
                <GitHubIcon fontSize="large"/>
    </IconButton>

    <IconButton href="https://www.linkedin.com/in/erick-corcino-373894218/" target="_blank" sx={{color: '#0077B5'}}> 
                <LinkedInIcon fontSize="large"/>
    </IconButton>

    <IconButton href="mailto:erickalexandercorcino@gmail.com" target="_blank" sx={{color: '#0a66c2'}}>
                <ForwardToInboxIcon fontSize="large"/>
    </IconButton>

    </>
  )
}

export default Contacts