import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense } from "react";

import { RouteConstants } from "../constants";
import Loader from "../common/Loader";
import PageLayout from "../common/PageLayout";

const RoutesDefined = () => {
  return (
    <Router>
      <PageLayout>
        <Suspense fallback={<Loader />}>
          <Routes>
            {RouteConstants.map(({ path, element }) => (
              <Route key={path} exact path={path} element={element} />
            ))}
          </Routes>
        </Suspense>
      </PageLayout>
    </Router>
  );
};

export default RoutesDefined;
