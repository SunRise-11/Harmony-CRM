import { useState } from "react";
import moment from "moment";
import InlineSVG from "react-inlinesvg";
import { useSelector } from "react-redux";
import { Calendar, momentLocalizer } from "react-big-calendar";
import { Button, Segmented, ConfigProvider, DatePicker } from "antd";

import calendarIcon from "../../assets/icons/master/calendar.svg";
import calendarPlusIcon from "../../assets/icons/master/calendar-plus.svg";
import rightIcon from "../../assets/icons/chevrons/right.svg";
import leftIcon from "../../assets/icons/chevrons/left.svg";
import CreateModal from "../../components/Modals/CreateDailyPlanner";

const { RangePicker } = DatePicker;

const customDayHeaderFormat = (date, culture, localizer) => {
  const dayName = date.toLocaleDateString("he-IL", { weekday: "short" });
  return localizer.format(date, "dddd", culture);
};

const CustomToolbar = ({ setShowCreateModal }) => {
  const [open, setOpen] = useState(false);
  const direction = useSelector((state) => state.app.direction);
  return (
    <div className="daily-planner-navbar">
      <div className="daily-planner-navbar-others">
        <Button
          style={{ direction: "rtl" }}
          className="daily-planner-navbar-others-current"
        >
          <div>
            <InlineSVG src={rightIcon} width={20} />
            <InlineSVG src={leftIcon} width={20} />
          </div>
          <span>נובמבר 2023</span>
        </Button>
        <div className="daily-planner-navbar-others-setting">
          <Button>היום</Button>
          <ConfigProvider direction={direction}>
            <Segmented
              className="daily-planner-navbar-toggle"
              options={["היום", "שבוע", "חודש"]}
            />
          </ConfigProvider>
          {!open && (
            <Button
              onClick={() => {
                setOpen(!open);
              }}
            >
              <InlineSVG src={calendarIcon} width={20} />
              <span>טווח תאריכים</span>
            </Button>
          )}
          {open && <RangePicker style={{ height: "44px" }} />}
        </div>
      </div>
      <Button onClick={() => setShowCreateModal(true)}>
        <InlineSVG src={calendarPlusIcon} width={20} />
        <span>צור פגישה</span>
      </Button>
    </div>
  );
};

const DailyPlanner = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);
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
      start: new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        new Date().getDate() - 1,
        7,
        0
      ),
      end: new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        new Date().getDate() - 1,
        12,
        0
      ),
      desc: "ישראל ישראלי",
      theme: 0,
    },
    {
      title: "פגישות מיון ",
      start: new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        new Date().getDate(),
        10,
        0
      ),
      end: new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        new Date().getDate(),
        12,
        0
      ),
      hexColor: colors[1],
      theme: 1,
    },
    {
      title: "פגישת זום",
      start: new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        new Date().getDate() - 2,
        10,
        0
      ),
      end: new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        new Date().getDate() - 2,
        12,
        0
      ),
      theme: 2,
    },
    {
      title: "פגישות מיון",
      start: new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        new Date().getDate() + 1,
        9,
        0
      ),
      end: new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        new Date().getDate() + 1,
        13,
        0
      ),
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
      border: "0px",
      display: "block",
    };
    return {
      style: style,
    };
  };

  return (
    <div className="daily-planner">
      <Calendar
        // className="daily-planner"
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        view="week"
        style={{ width: "100%", height: "100%" }}
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
          toolbar: (props) => (
            <CustomToolbar {...props} setShowCreateModal={setShowCreateModal} />
          ),
        }}
        eventPropGetter={eventStyleGetter}
      />
      <CreateModal
        visible={showCreateModal}
        onCancel={() => setShowCreateModal(false)}
      />
    </div>
  );
};

export default DailyPlanner;
