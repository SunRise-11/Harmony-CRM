import Service from "../../../../components/profiles/service/Service";
import Address from "../../../../components/profiles/address/Address";
import Contacts from "../../../../components/profiles/contacts/Contacts";
import Education from "../../../../components/profiles/education/Education";
import Working from "../../../../components/profiles/working/Working";
import Plan from "../../../../components/profiles/plan/Plan";
import Detail from "../../../../components/profiles/detail/Detail";
import SideBar from "./sidebar/Sidebar";
import { useEffect, useState } from "react";
import createSVG from "../../../../assets/icons/addUser.svg";
import closeSVG from "../../../../assets/icons/close.svg";
import { Button } from "antd";
import InlineSVG from "react-inlinesvg";
import useViewportWidth from "../../../../hooks/useViewportWidth";

const Profile = () => {
  useEffect(() => {
    if (document !== null) {
      const [parent] = document.getElementsByClassName("recipient-profile");
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
            zIndex: "1001",
          }}
          // icon={moreSVG}
          onClick={() => setShowSideBar(true)}
        ></Button>
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
