import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Suspense } from 'react';
import { Route } from 'react-router-dom';

import Loader from '../common/loader/loader';
import { ROUTES_CONSTANTS } from './routesConstants';
import PageLayout from '../common/PageLayout/PageLayout';

function Routes() {
  return (
    <Router>
      <PageLayout>
        <Suspense fallback={<Loader />}>
          <Switch>
            {ROUTES_CONSTANTS.map(({ path, component }) => {
              return (
                <Route
                  exact
                  path={path}
                  component={component}
                />
              );
            })}
          </Switch>
        </Suspense>
      </PageLayout>
    </Router>
  );
}

export default Routes;