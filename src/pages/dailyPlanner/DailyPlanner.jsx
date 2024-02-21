import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { Button, Segmented, ConfigProvider } from "antd";
import InlineSVG from "react-inlinesvg";
import planSVG from "../../assets/icons/plan.svg";
import createSVG from "../../assets/icons/addevent.svg";
import nextSVG from "../../assets/icons/next.svg";
import previousSVG from "../../assets/icons/previous.svg";

const customDayHeaderFormat = (date, culture, localizer) => {
  const dayName = date.toLocaleDateString("he-IL", { weekday: "short" });
  return localizer.format(date, "dddd", culture);
};

const CustomToolbar = (props) => {
  return (
    <div className="daily-planner-navbar">
      <div className="daily-planner-navbar-others">
        <Button className="daily-planner-navbar-others-current">
          <div>
            <InlineSVG src={nextSVG} width={20} />
            <InlineSVG src={previousSVG} width={20} />
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
  const colors = [
    {
      backgroundColor: "#D3EDF680",
      borderColor: "#5FBCFF",
      color: "#0369A1",
    },
    {
      backgroundColor: "#FFB40080",
      borderColor: "#FFB400",
      color: "#0369A1",
    },
    {
      backgroundColor: "#FF949480",
      borderColor: "#FF7979",
      color: "#0369A1",
    },
    {
      backgroundColor: "#8AD34180",
      borderColor: "#8AD341 ",
      color: "#0369A1",
    },
  ];

  const events = [
    {
      title: "פגישת זום",
      start: new Date(2024, 1, 23, 7, 0),
      end: new Date(2024, 1, 23, 12, 0),
      desc: "ישראל ישראלי",
      theme: 0,
      backgroundColor: "#D3EDF680",
      borderColor: "#5FBCFF",
      color: "#0369A1",
    },
    {
      title: "פגישות מיון ",
      start: new Date(2024, 1, 22, 10, 0),
      end: new Date(2024, 1, 22, 12, 0),
      hexColor: colors[1],
      theme: 1,
    },
    {
      title: "פגישת זום",
      start: new Date(2024, 1, 21, 10, 0),
      end: new Date(2024, 1, 21, 12, 0),
      theme: 2,
    },
    {
      title: "פגישות מיון",
      start: new Date(2024, 1, 18, 10, 0),
      end: new Date(2024, 1, 18, 12, 0),
      theme: 3,
    },
  ];

  const eventStyleGetter = (event, start, end, isSelected) => {
    var style = {
      backgroundColor: colors[event.theme].backgroundColor,
      borderColor: colors[event.theme].borderColor,
      color: colors[event.theme].color,
      borderRadius: "0px",
      opacity: 0.8,
      color: "black",
      border: "0px",
      display: "block",
    };
    return {
      style: style,
    };
  };

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
              border: "1px 3px 1px 1px",
            }}
          >
            <strong>{event.title}</strong>
            <p>{event.desc}</p>
          </div>
        ),
        toolbar: CustomToolbar,
      }}
      eventPropGetter={eventStyleGetter}
    />
  );
};

export default DailyPlanner;
