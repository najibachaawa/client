import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';


const Start = React.lazy(() =>
  import(/* webpackChunkName: "start" */ './start')
);
const Delete = React.lazy(() =>
  import('./delete')
);
const Gogo = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/add`} />
      <Route
        path={`${match.url}/add`}
        render={props => <Start {...props} />}
      />
      <Redirect exact from={`${match.url}/`} to={`${match.url}/delete`} />
      <Route
        path={`${match.url}/delete`}
        render={props => <Delete {...props} />}
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default Gogo;
