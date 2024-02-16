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
const Expense = lazy(() => import("../pages/reporting/expense/Expense"));
const Employment = lazy(() =>
  import("../pages/reporting/employment/Employment")
);
const Opportunities = lazy(() =>
  import("../pages/employmentOpportunities/Opportunities")
);

const ServiceApplicants = lazy(() =>
  import("../pages/crm/serviceApplicants/ServiceApplicants")
);

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
    path: "/reporting/expense",
    element: <Expense />,
  },
  {
    path: "/reporting/employment",
    element: <Employment />,
  },
  {
    path: "/employment",
    element: <Opportunities />,
  },
  {
    path: "/crm/service-applicants",
    element: <ServiceApplicants />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
];
