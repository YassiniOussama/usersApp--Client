import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Moke from '../components/moke/moke';
import Users from '../components/Users/Users';
import Form from '../components/Form/Form';
import UserDetails from '../components/UserDetails/UserDetails';

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' exact component={Users}></Route>
      <Route exact path='/moke/:numUsersToAdd' component={Moke} ></Route>
      <Route exact path='/users' exact component={Users}></Route>
      <Route exact path='/user/details/:id' component={UserDetails}></Route>
      <Route exact path='/update/:id' component={Form}></Route>
    </Switch>
  );
}

export default Main;