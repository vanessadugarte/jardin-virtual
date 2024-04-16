import React, {useState} from 'react';
import {
    AppBar, Badge,
    Box,
    Button,
    CssBaseline,
    Divider, Drawer, IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Toolbar,
    Typography
} from "@mui/material";
import PropTypes from "prop-types";
import MenuIcon from '@mui/icons-material/Menu';
import {HiShoppingCart} from "react-icons/hi";

const drawerWidth = 240;
const Navbar = (props) => {
    const {window} = props;
    const [mobileOpen, setMobileOpen] = useState(false);
    const [cartQuantity, setCartQuantity] = useState(3)
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const addItem = () => {
        setCartQuantity(cartQuantity + 1)
    }

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{textAlign: 'center'}}>
            <Typography variant="h6" sx={{my: 2}}>
                Jardín Virtual
            </Typography>
            <Divider/>
            <List>
                <ListItem disablePadding>
                    <ListItemButton href="/home" sx={{textAlign: 'center'}}>
                        <ListItemText primary="Inicio"/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton href="/categories" sx={{textAlign: 'center'}}>
                        <ListItemText primary="Categorías"/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton href="/about" sx={{textAlign: 'center'}}>
                        <ListItemText primary="Nosotros"/>
                    </ListItemButton>
                </ListItem>
                <Divider/>
                <ListItem>
                    <ListItemButton>
                    <IconButton size="large" aria-label="show 4 new mails">
                        <Badge badgeContent={cartQuantity} color="error" >
                            <HiShoppingCart/>
                        </Badge>
                    </IconButton>
                    </ListItemButton>
                </ListItem>
            </List>

        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <AppBar component="nav" sx={{ bgcolor: '#88D3B8' }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{mr: 2, display: {sm: 'none'}}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{flexGrow: 1, display: {xs: 'none', sm: 'flex'}}}
                    >
                       JARDÍN VIRTUAL
                    </Typography>
                    <Box sx={{display: {xs: 'none', sm: 'block'}}}>
                        <Button href="/home" sx={{color: '#fff',fontSize: '1.2rem', mr:2}}>
                            Inicio
                        </Button>
                        <Button href="/categories" sx={{color: '#fff',fontSize: '1.2rem', mr:2}}>
                            Categorías
                        </Button>
                        <Button href="/about" sx={{color: '#fff',fontSize: '1.2rem', mr:2}}>
                            Nosotros
                        </Button>
                        <IconButton size="large" aria-label="show 4 new mails" sx={{color:"white"}}>
                            <Badge badgeContent={cartQuantity} color="error">
                                <HiShoppingCart/>
                            </Badge>
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: {xs: 'block', sm: 'none'},
                        '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
            <Box component="main" sx={{p: 3}}>
                <Toolbar/>
            </Box>
        </Box>
    );
};

Navbar.propTypes = {
    window: PropTypes.func,
};

export default Navbar;