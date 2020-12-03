import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route } from 'react-router-dom';
import { auth, handleUserProfile } from './firebase/utils';
import { setCurrentUser } from './redux/User/user.actions';


// hoc
import WithAuth from './hoc/withAuth';

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




const App = props => {

  const dispatch = useDispatch();

  useEffect(() => {
    const authListener = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot(snapshot => {
          dispatch(setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()

          }));
        })
      }

      dispatch(setCurrentUser(userAuth));
    });

    return () => {
      authListener();
    };
  }, []);

  return (
    <div className="App">
      
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
      
    </div>
  )
}

export default App;
