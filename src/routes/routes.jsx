import { lazy } from 'react';
import withErrorBoundary from 'components/HOCs/withErrorBoundary';
import { RouteBase } from 'constants/routeUrl';

const HomePage = lazy(() => import('views/Home'));
const Dashboard = lazy(() => import('views/Dashboard'));
const Knowledge = lazy(() => import('views/Knowledge'));
const Docs = lazy(() => import('views/Docs'));
const Page404 = lazy(() => import('views/Page404'));

//* For secured route
const routes = [
  { path: RouteBase.Dashboard, name: 'Dashboard', component: withErrorBoundary(Dashboard) },
  { path: RouteBase.Home, exact: true, name: 'Home', component: withErrorBoundary(HomePage) },
  { path: RouteBase.Knowledge, exact: true, name: 'Knowledge', component: withErrorBoundary(Knowledge) },
  { path: RouteBase.Docs, exact: true, name: 'Docs', component: withErrorBoundary(Docs) },
  { name: '404', component: withErrorBoundary(Page404) },
];

export default routes;
