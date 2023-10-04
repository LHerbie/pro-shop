import * as React from 'react';
import { AppBar, Box, Button, IconButton, Toolbar } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import BackpackIcon from '@mui/icons-material/Backpack';
import DoNotStepIcon from '@mui/icons-material/DoNotStep';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import DensitySmallIcon from '@mui/icons-material/DensitySmall';

export default function MenuBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
            <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                <HomeIcon />
            </IconButton>
            <Button variant="contained" color="secondary">
                <DensitySmallIcon/>&nbsp; All Items
            </Button> &nbsp;&nbsp;
            <Button variant="contained" color="secondary">
                <SportsTennisIcon/>&nbsp; Rackets
            </Button> &nbsp;&nbsp;
            <Button variant="contained" color="secondary">
                <CheckroomIcon/>&nbsp; Clothing
            </Button> &nbsp;&nbsp;
            <Button variant="contained" color="secondary">
                <BackpackIcon/>&nbsp; Bags
            </Button> &nbsp;&nbsp;
            <Button variant="contained" color="secondary">
                <DoNotStepIcon/>&nbsp; Shoes
            </Button> &nbsp;&nbsp;
            <Button variant="contained" color="secondary">
                <WorkspacesIcon/>&nbsp; Misc
            </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}