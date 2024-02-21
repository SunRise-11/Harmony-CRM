import Service from "../../../../components/profiles/service/Service";
import Address from "../../../../components/profiles/address/Address";
import Contacts from "../../../../components/profiles/contacts/Contacts";
import Education from "../../../../components/profiles/education/Education";
import Working from "../../../../components/profiles/working/Working";
import Plan from "../../../../components/profiles/plan/Plan";
import Detail from "../../../../components/profiles/detail/Detail";
import SideBar from "./sidebar/Sidebar";
import { useState } from "react";
import createSVG from "../../../../assets/icons/addUser.svg";
import closeSVG from "../../../../assets/icons/close.svg";
import { Button } from "antd";
import InlineSVG from "react-inlinesvg";
import useViewportWidth from "../../../../hooks/useViewportWidth";

const Profile = () => {
  const [current, setCurrent] = useState(0);
  const [showSideBar, setShowSideBar] = useState(false);
  const viewportWidth = useViewportWidth();
  return (
    <div className="recipient-profile">
      {showSideBar === true && viewportWidth < 1520 && (
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: "transparent",
            zIndex: 1000,
          }}
          onClick={() => setShowSideBar(false)}
        ></div>
      )}
      {viewportWidth < 1520 && showSideBar === false ? (
        <Button
          style={{
            position: "absolute",
            backgroundColor: "rgb(255, 180, 0)",
            width: "5px",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            display: "flex",
            color: "white",
          }}
          onClick={() => setShowSideBar(true)}
        >
          1
        </Button>
      ) : (
        <SideBar current={current} setCurrent={setCurrent} />
      )}
      <div className="recipient-profile-board">
        <Service selected={current === 0} />
        <Address selected={current === 1} />
        <Contacts selected={current === 2} />
        <Education selected={current === 3} />
        <Working selected={current === 4} />
        <Plan selected={current === 5} />
        <Detail selected={current === 6} />
      </div>
      <div className="recipient-profile-footer">
        <Button>
          <InlineSVG src={createSVG} />
          <span>שמירה</span>
        </Button>
        <Button>
          <InlineSVG src={closeSVG} />
          <span>ביטול</span>
        </Button>
      </div>
    </div>
  );
};

export default Profile;
