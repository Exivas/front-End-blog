import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button, Box } from "@mui/material";
import { green } from "@mui/material/colors";
import AuthComponent from "../../profile/AuthComponent";
import useAuth from "../../../hooks/auth";

const MainNav = () => {
  const { role } = useAuth();

  return(
    <AppBar
      position="static"
      sx={{ backgroundColor: green["A400"], marginBottom: 2 }}
    >
      <AuthComponent />
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "flex-end" }}>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          {role === "admin" && (
            <Button color="inherit" component={Link} to="/Editor">
              Editor
            </Button>
          )}
          <Button color="inherit" component={Link} to="/Summary">
            Blog
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default MainNav;
