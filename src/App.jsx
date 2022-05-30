import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { checkAuth } from 'redux/modules/auth';
import PublicRoute from 'routes/PublicRoute';
import './scss/styles.scss';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  //! Render
  return (
    <Router>
      <Switch>
        {/* <Route path={RouteBase.Login} exact component={LoginPage} /> */}
        <PublicRoute />
      </Switch>
    </Router>
  );
};

export default App;
