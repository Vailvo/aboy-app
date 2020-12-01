import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
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
  const { setCurrentUser, currentUser } = props;

  useEffect(() => {
    const authListener = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()

          });
        })
      }

      setCurrentUser(userAuth);
    });

    return () => {
      authListener();
    };
  }, [setCurrentUser]);

  return (
    <div className="App">
      <Route exact path="/" render={() => (
        <MainLayout>
          <Homepage />
        </MainLayout>
      )} />
      <Route exact path="/Registration" render={() => currentUser ? <Redirect to="/" /> : (
        <MainLayout>
          <Registration />
        </MainLayout>
      )} />
      <Route exact path="/Login" render={() => currentUser ? <Redirect to="/" /> : (
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
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})













export default connect(mapStateToProps, mapDispatchToProps)(App);
