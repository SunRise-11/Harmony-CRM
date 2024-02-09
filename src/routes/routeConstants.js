import { lazy } from 'react';

const Dashboard = lazy(() => import('../pages/dashBoard/index'));
const PageNotFound = lazy(() => import('../common/pageNotFound/pageNotFound'));

export const ROUTES_CONSTANTS = [
  {
    path: '/dashboard',
    component: Dashboard,
  },
  {
    path: '*',
    component: PageNotFound,
  },
];