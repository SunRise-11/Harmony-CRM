import React from "react";
import { useSelector } from "react-redux";

const Number = ({ type, number }) => {
  const backgroundColor = {
    empty: "#EAF0F2",
    primary: "#FFB400",
    secondary: "#5FBCFF",
    done: "#FFFFFF",
  };
  const color = {
    empty: "#404040",
    primary: "#FFFFFF",
    secondary: "#FFFFFF",
    done: "#CED8DB",
  };
  return (
    <div
      className="recipient-home-step-main-number"
      style={{
        backgroundColor: backgroundColor[type],
        color: color[type],
        border: type === "done" ? "2px solid #EAF0F2" : "",
      }}
    >
      {number}
    </div>
  );
};

const Step = ({ location, type = "empty", text, number, onClick }) => {
  const direction = useSelector((store) => store.app.direction);
  const color = {
    empty: "transparent",
    primary: "#FFB400",
    secondary: "#5FBCFF",
    done: "transparent",
  };

  const padding = {
    rtl: {
      end: "3px 5px 3px 20px",
      middle: "3px 5px 3px 0px",
      front: "3px 10px 3px 0px",
      alone: "3px 10px",
    },
    ltr: {
      end: "3px 20px 3px 5px",
      middle: "3px 0px 3px 5px",
      front: "3px 0px 3px 10px",
      alone: "3px 10px",
    },
  };

  const borderRadius = {
    rtl: {
      end: "10px 0px 0px 10px",
      middle: "0px",
      front: "0px 10px 10px 0px",
      alone: "10px",
    },
    ltr: {
      end: "0px 10px 10px 0px",
      middle: "0px",
      front: "10px 0px 0px 10px",
      alone: "10px",
    },
  };

  const borderWidth = {
    rtl: {
      end: "5px 0px 5px 5px",
      middle: "5px 0px",
      front: "5px 5px 5px 0px",
      alone: "5px",
    },
    ltr: {
      end: "5px 5px 5px 0px",
      middle: "5px 0px",
      front: "5px 0px 5px 5px",
      alone: "5px",
    },
  };

  return (
    <div
      className="recipient-home-step"
      style={{
        borderRadius: borderRadius[direction][location],
      }}
      onClick={onClick}
    >
      {location !== "front" &&
        location !== "alone" &&
        (type === "empty" || type === "done" ? (
          <svg
            width="19"
            height="56"
            viewBox="0 0 19 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0H15.1962C16.7277 0 17.6909 1.65088 16.9373 2.98413L4.1883 25.5397C3.32536 27.0664 3.32536 28.9336 4.1883 30.4603L16.9373 53.0159C17.6909 54.3491 16.7277 56 15.1962 56H0V0Z"
              fill="white"
            />
          </svg>
        ) : (
          <svg
            width="28"
            height="66"
            viewBox="0 0 28 66"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 2.5H2.5V5V61V63.5H5H20.1962C23.642 63.5 25.8093 59.7855 24.1137 56.7857L11.3647 34.2302C10.9332 33.4668 10.9332 32.5332 11.3647 31.7698L24.1137 9.21429C25.8093 6.21447 23.642 2.5 20.1962 2.5H5Z"
              fill="white"
              stroke={color[type]}
              strokeWidth="5"
            />
            <rect y="2" width="5" height="62" fill="white" />
            <rect width="5" height="5" fill={color[type]} />
            <rect y="61" width="5" height="5" fill={color[type]} />
          </svg>
        ))}
      <div
        className="recipient-home-step-main"
        style={{
          padding: padding[direction][location],
          borderRadius: borderRadius[direction][location],
          borderWidth: borderWidth[direction][location],
          borderColor: color[type],
          height: type === "empty" || type === "done" ? "40px" : "50px",
        }}
      >
        <Number type={type} number={number} />
        <span>{text}</span>
      </div>
      {location !== "end" &&
        location !== "alone" &&
        (type === "empty" || type === "done" ? (
          <svg
            style={
              direction === "rtl"
                ? {
                    marginRight: "-1px",
                  }
                : {
                    marginLeft: "-1px",
                  }
            }
            width="24"
            height="56"
            viewBox="0 0 24 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.4824 2.52866C15.3711 0.965526 17.0308 0 18.8289 0H23.2791V56H18.8289C17.0308 56 15.3711 55.0345 14.4824 53.4713L1.40514 30.4713C0.533872 28.939 0.533872 27.061 1.40514 25.5287L14.4824 2.52866Z"
              fill="white"
            />
          </svg>
        ) : (
          <svg
            width="34"
            height="66"
            viewBox="0 0 34 66"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={
              direction === "rtl"
                ? { marginRight: "-1px" }
                : { marginLeft: "-1px" }
            }
          >
            <path
              d="M30.7791 5V2.5H28.2791H23.8289C21.1317 2.5 18.6422 3.94829 17.3091 6.29299L4.23186 29.293C2.92496 31.5916 2.92496 34.4084 4.23186 36.707L17.3091 59.707C18.6422 62.0517 21.1317 63.5 23.8289 63.5H28.2791H30.7791V61V5Z"
              fill="white"
              strokeWidth="5"
              stroke={color[type]}
            />
            <rect
              x="28"
              y="5"
              width="6"
              height="56"
              fill="white"
              stroke="none"
              strokeWidth={0}
            />
          </svg>
        ))}
    </div>
  );
};

export default Step;
