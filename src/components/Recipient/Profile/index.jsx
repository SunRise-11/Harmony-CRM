import { useEffect, useState, useRef } from "react";
import { Button } from "antd";
import InlineSVG from "react-inlinesvg";

import Service from "./Service";
import Address from "./Address";
import Contacts from "./Contacts";
import Education from "./Education";
import Working from "./Working";
import Plan from "./Plan";
import Detail from "./Detail";
import SideBar from "./SideBar";
import userPlusIcon from "../../../assets/icons/master/user-plus.svg";
import closeIcon from "../../../assets/icons/master/close.svg";
import useViewportWidth from "../../../hooks/useViewportWidth";
import { useSelector } from "react-redux";

const Profile = () => {
  const serviceRef = useRef(null);
  const addressRef = useRef(null);
  const contactsRef = useRef(null);
  const educationRef = useRef(null);
  const workingRef = useRef(null);
  const planRef = useRef(null);
  const detailRef = useRef(null);

  const [current, setCurrent] = useState(0);
  const [showSideBar, setShowSideBar] = useState(false);
  const viewportWidth = useViewportWidth();
  const direction = useSelector((state) => state.app.direction);

  useEffect(() => {
    if (document !== null) {
      const [parent] = document.getElementsByClassName("ant-layout-content");
      parent.onscroll = () => {
        const elements = document.getElementsByClassName("profiles-basic");
        for (let i = elements.length - 1; i >= 0; i--) {
          const position = elements[i].getBoundingClientRect();
          if (position.top >= 0 && position.bottom <= parent.clientHeight) {
            setCurrent(i);
          }
        }
      };
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const refs = [
        serviceRef,
        addressRef,
        contactsRef,
        educationRef,
        workingRef,
        planRef,
        detailRef,
      ];
      const visibleIndex = refs.findIndex((ref) => {
        const rect = ref.current.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= window.innerHeight;
      });
      if (visibleIndex !== -1 && visibleIndex !== current) {
        setCurrent(visibleIndex);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [current]);

  return (
    <div className="recipient-profile">
      {showSideBar === true && viewportWidth < 1520 && (
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: "transparent",
            zIndex: 24,
          }}
          onClick={() => setShowSideBar(false)}
        ></div>
      )}
      {viewportWidth < 1684 ? (
        // <Button
        //   style={{
        //     position: "fixed",
        //     backgroundColor: "rgb(255, 180, 0)",
        //     width: "5px",
        //     alignItems: "center",
        //     justifyContent: "center",
        //     textAlign: "center",
        //     display: "flex",
        //     color: "white",
        //     zIndex: "24",
        //   }}
        //   // icon={moreSVG}
        //   onClick={() => setShowSideBar(true)}
        // ></Button>
        <></>
      ) : (
        <SideBar current={current} setCurrent={setCurrent} />
      )}
      <div className="recipient-profile-board">
        <Service selected={current === 0} ref={serviceRef} />
        <Address selected={current === 1} ref={addressRef} />
        <Contacts selected={current === 2} ref={contactsRef} />
        <Education selected={current === 3} ref={educationRef} />
        <Working selected={current === 4} ref={workingRef} />
        <Plan selected={current === 5} ref={planRef} />
        <Detail selected={current === 6} ref={detailRef} />
      </div>
      <div
        className="recipient-profile-footer"
        style={{ marginLeft: direction == "rtl" ? "0px" : "-135px" }}
      >
        <Button type="primary" style={{ backgroundColor: "MediumSeaGreen" }}>
          <InlineSVG
            src={userPlusIcon}
            style={{ fill: "white", stroke: "white" }}
          />
          <span style={{ color: "white" }}>שמירה</span>
        </Button>
        <Button type="primary" style={{ backgroundColor: "#ff3333" }}>
          <InlineSVG src={closeIcon} style={{ stroke: "white" }} />
          <span style={{ color: "white" }}>ביטול</span>
        </Button>
      </div>
    </div>
  );
};

export default Profile;
