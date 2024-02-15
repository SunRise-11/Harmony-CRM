import { lazy } from "react";

const Dashboard = lazy(() => import("../pages/dashboard/index"));
const Recipient_desktop = lazy(() =>
  import("../pages/recipients/desktop/Desktop")
);
const Recipient = lazy(() => import("../pages/recipients/recipient/Recipient"));
const PageNotFound = lazy(() => import("../common/pageNotFound/pageNotFound"));
const EventReport = lazy(() =>
  import("../pages/reports/eventReport/EventReport")
);
const MainTask = lazy(() => import("../pages/mainTask/MainTask"));
const Presence = lazy(() => import("../pages/reporting/presence/Presence"));

export const ROUTES_CONSTANTS = [
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/recipients",
    element: <Recipient_desktop />,
  },
  {
    path: "/recipients/recipient",
    element: <Recipient />,
  },
  {
    path: "/report/event",
    element: <EventReport />,
  },
  {
    path: "/maintask",
    element: <MainTask />,
  },
  {
    path: "/reporting/presence",
    element: <Presence />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
];
