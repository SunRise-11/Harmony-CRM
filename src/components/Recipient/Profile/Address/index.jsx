import { useState } from "react";

import locationIcon from "../../../../assets/icons/master/location.svg";

import Basic from "../Basic";
import Item from "../Basic/Item";

const Address = ({ selected }) => {
  const options = [
    { label: "אביעזר", value: 0 },
    { label: "אבירים", value: 1 },
    { label: "אבן יהודה", value: 2 },
    { label: "אבן מנחם", value: 3 },
  ];
  const [currentSelected, setCurrentSelected] = useState(-1);
  return (
    <Basic
      title="כתובת ופרטי התקשרות"
      icon={locationIcon}
      selected={selected}
      content={
        <>
          <Item
            type="dropdown"
            width="200px"
            required
            text="ישוב"
            options={options}
            selected={options[currentSelected]}
            onChange={(value) => setCurrentSelected(value)}
            style={{position: 'relative', zIndex: 4}}
          />
          <Item type="input" width="200px" required text="רחוב" />
          <Item type="input" width="200px" required text="מספר" />
          <Item type="input" width="640px" text="הערות" />
          <div
            style={{
              paddingBottom: "10px",
              borderBottom: "1px solid #CED8DB",
              width: "100%",
            }}
          ></div>
          <Item type="input" width="200px" required text="טלפון נייד" />
          <Item type="input" width="200px" text="טלפון בבית" />
          <Item type="input" width="200px" text="טלפון נוסף" />

          <Item type="input" width="640px" required text="דואר אלקטרוני" />
        </>
      }
    />
  );
};

export default Address;
