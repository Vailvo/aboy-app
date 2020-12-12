import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route } from 'react-router-dom';
import { checkUserSession } from './redux/User/user.actions';

//components
import AdminToolbar from './components/AdminToolbar';


// hoc
import WithAuth from './hoc/withAuth';
import WithAdminAuth from './hoc/withAdminAuth';

// layouts
import MainLayout from './layouts/MainLayout';
// scss
import './default.scss';

// pages
import Homepage from './pages/Homepage';
import Registration from './pages/Registration';
import Login from './pages/Login';
import Recovery from './pages/Recovery';
import Dashboard from './pages/Dashboard';
import Admin from './pages/Admin';




const App = props => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());


  }, [dispatch]);

  return (
    <div className="App">
      <AdminToolbar />
      <Route exact path="/" render={() => (
        <MainLayout>
          <Homepage />
        </MainLayout>
      )} />
      <Route exact path="/Registration" render={() => (
        <MainLayout>
          <Registration />
        </MainLayout>
      )} />
      <Route exact path="/Login" render={() => (
        <MainLayout>
          <Login />
        </MainLayout>
      )} />
      <Route exact path="/Recovery" render={() => (
        <MainLayout>
          <Recovery />
        </MainLayout>
      )} />
      <Route exact path="/Dashboard" render={() => (
        <WithAuth>
          <MainLayout>
            <Dashboard />
          </MainLayout>
        </WithAuth>
      )} />
      <Route exact path="/Admin" render={() => (
        <WithAdminAuth>
          <MainLayout>
            <Admin />
          </MainLayout>
        </WithAdminAuth>
      )} />

    </div>
  )
}

export default App;
