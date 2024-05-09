import { useEffect, useState } from "react";
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

const Profile = () => {
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

  const [current, setCurrent] = useState(0);
  const [showSideBar, setShowSideBar] = useState(false);
  const viewportWidth = useViewportWidth();
  const svgStyle = {
    '--svg-color': 'white' // Set the color dynamically
  };
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
        <Service selected={current === 0}  />
        <Address selected={current === 1} />
        <Contacts selected={current === 2} />
        <Education selected={current === 3} />
        <Working selected={current === 4} />
        <Plan selected={current === 5} />
        <Detail selected={current === 6} />
      </div>
      <div className="recipient-profile-footer">
        <Button type='primary' style={{backgroundColor:'MediumSeaGreen'}}>
          <InlineSVG src={userPlusIcon} style={{fill:'white', stroke: 'white'}}/>
          <span style={{color:'white'}}>שמירה</span>
        </Button>
        <Button type='primary' style={{backgroundColor:'#ff3333'}}>
          <InlineSVG src={closeIcon} style={{stroke:'white'}} />
          <span style={{color:'white'}}>ביטול</span>
        </Button>
      </div>
    </div>
  );
};

export default Profile;
