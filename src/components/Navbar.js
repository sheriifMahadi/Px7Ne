import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useStyles from '../styles/styles';
import { HashLink } from 'react-router-hash-link';
import navIcon from '../data/navIcon.png'

import {
  StyledEngineProvider,
  ThemeProvider,
  createTheme
} from "@mui/material/styles";

const theme = createTheme({
components: {
  MuiDrawer: {
  styleOverrides: {
      paper: {
      background: "black"
      }
  }
  }
}
});

const drawerWidth = 240;
const navItems = ['About', 'Projects', 'Contact'];

function DrawerAppBar(props) {
  const classes = useStyles()
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const currWindowSize = props.windowsize.innerWidth < 420 
  ? true
  : false
  
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center'}}>
      <Typography variant="h6" sx={{ my: 2 }}>
      <HashLink smooth to = {`/#home`} className={classes.navStyling} style={{color: 'cyan'}}>
          Mahadi
      </HashLink>

      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
            <HashLink key={item} smooth to = {`/#${item.toLowerCase()}`} className={classes.navStyling}>
              <ListItem key={item} disablePadding>
                  <ListItemButton sx={{ textAlign: 'center' }}>
                    <ListItemText primary={item} />
                </ListItemButton>
              </ListItem>
          </HashLink>

        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar component="nav" className={classes.nav}>
        <Toolbar>
          <span style={{color: 'cyan', fontSize: '10px'}}>
            {
              currWindowSize ?
                <img src={navIcon} style={{width: '20px', height: '20px'}} alt="img" />
              : ''
            }
          </span>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ ml: 38, color: 'grey', display: { sm: 'none' }}}
          >
            <MenuIcon/>
          </IconButton>
          
          <HashLink smooth to = {`/#home`} className={classes.navStyling}>
            <Button sx={{ color: 'cyan' }}>
              <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 0, fontSize: '18px', display: { xs: 'none', sm: 'block' } }}
            >
              Mahadi
              </Typography>
            </Button>
          </HashLink>

            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <HashLink key={item} smooth to = {`/#${item.toLowerCase()}`} className={classes.navStyling}>
                <Button 
                className={classes.nav}
                key={item} sx={{ color: 'grey' }}>
                  {item}
                </Button>
              </HashLink>

            ))}
          </Box>

        </Toolbar>
      </AppBar>
      <Box component="nav">
        <ThemeProvider theme={theme}>
          <Drawer
            anchor="right"
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
        </ThemeProvider>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;