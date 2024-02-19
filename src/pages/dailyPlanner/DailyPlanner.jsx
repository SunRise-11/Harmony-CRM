import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { Button, Segmented, ConfigProvider } from "antd";
import InlineSVG from "react-inlinesvg";
import planSVG from "../../assets/icons/plan.svg";
import createSVG from "../../assets/icons/addevent.svg";

const customDayHeaderFormat = (date, culture, localizer) => {
  // Implement your custom logic to format day labels
  const dayName = date.toLocaleDateString("he-IL", { weekday: "short" });
  return localizer.format(date, "dddd", culture); // Example: Display full day names
};

const CustomToolbar = (props) => {
  return (
    <div className="daily-planner-navbar">
      <div className="daily-planner-navbar-others">
        <Button className="daily-planner-navbar-others-current">
          <div>
            <InlineSVG src={planSVG} width={20} />
            <InlineSVG src={planSVG} width={20} />
          </div>
          <span>נובמבר 2023</span>
        </Button>
        <div className="daily-planner-navbar-others-setting">
          <ConfigProvider direction="rtl">
            <Button>היום</Button>
            <Segmented
              className="daily-planner-navbar-toggle"
              options={["היום", "שבוע", "חודש"]}
            />
            <Button>
              <InlineSVG src={planSVG} width={20} />
              <span>טווח תאריכים</span>
            </Button>
          </ConfigProvider>
        </div>
      </div>
      <Button>
        <InlineSVG src={createSVG} width={20} />
        <span>צור פגישה</span>
      </Button>
    </div>
  );
};

const DailyPlanner = () => {
  const localizer = momentLocalizer(moment, {
    formats: {
      dayFormat: customDayHeaderFormat,
    },
  });

  const events = [
    {
      title: "Meeting",
      start: new Date(2024, 1, 17, 10, 0),
      end: new Date(2024, 1, 17, 12, 0),
    },
    // Add more events as needed
  ];
  return (
    <Calendar
      className="daily-planner"
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      view="week"
      style={{ width: "90%", height: "100%" }}
      components={{
        event: (event) => (
          <div
            style={{
              backgroundColor: event.color,
              borderRadius: "5px",
              padding: "5px",
              marginBottom: "5px",
            }}
          >
            <strong>{event.title}</strong>
            <p>{event.desc}</p>
          </div>
        ),
        toolbar: CustomToolbar,
      }}
    />
  );
};

export default DailyPlanner;
