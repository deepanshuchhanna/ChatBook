/* eslint-disable import/no-unresolved */
/* eslint-disable react/react-in-jsx-scope */
// eslint-disable-next-line no-unused-vars
import react from 'react';
import 'rsuite/dist/styles/rsuite-default.css';
import './styles/main.scss';
import { Switch } from 'react-router';
import SignIn from './pages/SignIn';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

import Home from './pages/Home';

function App() {
  return (
    <Switch>
      <PublicRoute path="/signIn">
        <SignIn />
      </PublicRoute>
      <PrivateRoute path="/">
        <Home />
      </PrivateRoute>
    </Switch>
  );
}

export default App;
