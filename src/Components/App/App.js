import { AppBar, Drawer, IconButton, ListItem, ListItemIcon, ListItemText, Toolbar } from '@mui/material';
import './App.css';
import Dashboard from '../Dashboard';
import { Backpack, Checkroom, DashboardOutlined, DensityMedium, DoNotStep, Inventory, SportsTennis, Workspaces } from '@mui/icons-material';
import { useState } from 'react';

const data = [
  { name: "Dashboard", icon: <DashboardOutlined />, },
  { name: "All Items", icon: <Inventory /> },
  { name: "Rackets", icon: <SportsTennis /> },
  { name: "Bags", icon: <Backpack /> },
  { name: "Shoes", icon: <DoNotStep /> },
  { name: "Clothing", icon: <Checkroom /> },
  { name: "Misc", icon: <Workspaces /> },
];

function App() {
  const [open, setOpen] = useState(false);

  const getList = () => (
    <div style={{ width: 250 }} onClick={() => setOpen(false)}>
      {data.map((item, index) => (
        <ListItem button key={index}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.name} />
        </ListItem>
      ))}
    </div>
  );
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton onClick={() => setOpen(true)}size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <DensityMedium />
          </IconButton>
          Dashboard
        </Toolbar>
      </AppBar>
      <Dashboard></Dashboard>
      <Drawer open={open} anchor={"left"} onClose={() => setOpen(false)}>
        <br></br>
        {getList()}
      </Drawer>
    </div>
  );
}

export default App;
