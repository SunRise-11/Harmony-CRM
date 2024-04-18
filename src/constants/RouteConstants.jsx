import { lazy } from "react";

const Dashboard = lazy(() => import("../pages/Dashboard"));
const Recipients = lazy(() => import("../pages/Recipients"));
const Recipient = lazy(() => import("../pages/Recipients/Recipient"));
const EventReport = lazy(() => import("../pages/Reports"));
const MainTask = lazy(() => import("../pages/MainTask"));
const DailyPlanner = lazy(() => import("../pages/DailyPlanner"));
const Presence = lazy(() => import("../pages/Reporting/Presence"));
const Expense = lazy(() => import("../pages/Reporting/Expense"));
const Employment = lazy(() => import("../pages/Reporting/Employment"));
const Opportunities = lazy(() => import("../pages/EmploymentOpportunities"));
const ServiceApplicants = lazy(() => import("../pages/CRM/ServiceApplicants"));
const Customers = lazy(() => import("../pages/CRM/Customers"));
const Tutorials = lazy(() => import("../pages/Tutorials"));
const Alerts = lazy(() => import("../pages/Alerts"));
const PageNotFound = lazy(() => import("../common/PageNotFound"));

const RouteConstants = [
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
    element: <Recipients />,
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
    path: "/main-task",
    element: <MainTask />,
  },
  {
    path: "/daily-planner",
    element: <DailyPlanner />,
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
    path: "/crm/customers",
    element: <Customers />,
  },
  {
    path: "/tutorials",
    element: <Tutorials />,
  },
  {
    path: "/alerts",
    element: <Alerts />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
];

export default RouteConstants;
