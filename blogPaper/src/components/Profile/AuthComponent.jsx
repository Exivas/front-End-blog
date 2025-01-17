import { useState } from "react";
import useAuth from "../../hooks/auth";
import { IconButton, Dialog, DialogContent, TextField, Button } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from '@mui/icons-material/Logout';

const AuthComponent = () => {
  const { token, login, logout } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);

  const handleLogin = () => {
    login(username, password);
    setOpen(false); // Cerrar el modal después de iniciar sesión
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      <IconButton
      sx={{left: "95%"}}
      
      onClick={() => {
        if (token) {
          handleLogout();
        } else {
          setOpen(true);
        }
      }}>
        {token ? <LogoutIcon fontSize="large" /> : <LoginIcon fontSize="large" />}
      </IconButton>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogContent>
          <div>
            <TextField
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              margin="normal"
            />
            <Button onClick={handleLogin} variant="contained" color="primary">
              Login
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AuthComponent;
