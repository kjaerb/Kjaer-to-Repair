import React from 'react';
import './styles/main.css';
import AppRoutes from './routes/index';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
