import Service from "../../../../components/profiles/service/Service";
import Address from "../../../../components/profiles/address/Address";
import Contacts from "../../../../components/profiles/contacts/Contacts";
import Education from "../../../../components/profiles/education/Education";
import Working from "../../../../components/profiles/working/Working";
import Plan from "../../../../components/profiles/plan/Plan";
import Detail from "../../../../components/profiles/detail/Detail";
import SideBar from "./sidebar/Sidebar";
import { useState } from "react";

const Profile = () => {
  const [current, setCurrent] = useState(0);
  return (
    <div className="recipient-profile">
      <SideBar current={current} setCurrent={setCurrent} />
      <div className="recipient-profile-board">
        <Service selected={current === 0} />
        <Address selected={current === 1} />
        <Contacts selected={current === 2} />
        <Education selected={current === 3} />
        <Working selected={current === 4} />
        <Plan selected={current === 5} />
        <Detail selected={current === 6} />
      </div>
      <div className="recipient-profile-footer"></div>
    </div>
  );
};

export default Profile;
