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
            {ROUTES_CONSTANTS.map(({ path, element }) => {
              return (
                <Route
                  key={path}
                  exact
                  path={path}
                  element={element}
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