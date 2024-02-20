import InlineSVG from "react-inlinesvg";
import Table from "../../../../../components/table/Table";
import eventsSVG from "../../../../../assets/icons/events.svg";

const data = [
  {
    date: "10/11/2023",
    eventType: "סוג 1",
    activity: "פעילות 1",
  },
  {
    date: "08/11/2023",
    eventType: "סוג 2",
    activity: "פעילות 2",
  },
  {
    date: "2/11/2023",
    eventType: "סוג 3",
    activity: "פעילות 3",
  },
];

const columns = [
  {
    title: "תאריך",
    key: "date",
    dataIndex: "date",
    sorter: true,
  },
  {
    title: "סוג אירוע",
    key: "eventType",
    dataIndex: "eventType",
    sorter: true,
  },
  {
    title: "פעילות",
    key: "activity",
    dataIndex: "activity",
    sorter: true,
  },
];

const RecentEvents = () => {
  return (
    <div className="recipient-recent-events">
      <div className="recipient-recent-events-title">
        <InlineSVG src={eventsSVG} style={{ stroke: "#13566C" }} />
        <span>אירועים אחרונים</span>
      </div>
      <Table data={data} columns={columns} />
    </div>
  );
};

export default RecentEvents;
