import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { Route } from 'react-router-dom';

import Loader from '../common/loader/Loader';
import PageLayout from '../common/pageLayout/PageLayout';

import { ROUTES_CONSTANTS } from './routeConstants';

function RoutesDefined() {
  return (
    <Router>
      <PageLayout>
        <Suspense fallback={<Loader />}>
          <Routes>
            {ROUTES_CONSTANTS.map(({ path, component }) => {
              return (
                <Route
                  exact
                  path={path}
                  component={component}
                />
              );
            })}
          </Routes>
        </Suspense>
      </PageLayout>
    </Router>
  );
}

export default RoutesDefined;