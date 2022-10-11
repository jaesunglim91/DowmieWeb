import {AppBar, Box, Typography, Button, Toolbar} from '@mui/material';
import {Link} from 'react-router-dom';

export default function Header() {
  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar>
          <Button>
            <Link
              to="/"
              style={{cursor: 'pointer', color: '#fff', textDecoration: 'none'}}
            >
              Home
            </Link>
          </Button>
          <Button>
            <Link
              to="/signup"
              style={{cursor: 'pointer', color: '#fff', textDecoration: 'none'}}
            >
              SignUp/Modify
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
