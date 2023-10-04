import { Button, Container, Paper, Typography } from '@mui/material';
import logo from './../../logo.svg';
import './App.css';
import MenuBar from '../MenuBar.js'
import Dashboard from '../Dashboard';

function App() {
  return (
    <Container maxWidth="lg" className="App">
      <MenuBar></MenuBar>
      <Paper>

      <Typography variant="h4" component="h1" gutterBottom>
          Create React App + Material-UI
        </Typography>
      <Dashboard></Dashboard>
        <img src = {logo}className="App-logo" alt="logo" />
        <Typography variant="h4" component="h1" gutterBottom>
          Create React App + Material-UI
        </Typography>
        <Button variant="contained" color="primary">
          Primary Button
        </Button>
        <Button variant="contained" color="secondary">
          Secondary Button
        </Button>
      </Paper>
    </Container>
  );
}
export default App;
