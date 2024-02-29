import Basic from "../basic/Basic";
import { Button } from "antd";
import usersSVG from "../../../assets/icons/users.svg";
import addImg from "../../../assets/icons/add.svg";
import Item from "../basic/item/Item";
import InlineSVG from "react-inlinesvg";

const Contacts = ({ selected }) => {
  return (
    <Basic
      title="אנשי קשר"
      icon={usersSVG}
      selected={selected}
      content={
        <>
          <Item type="input" width="200px" required text="שם מלא" />
          <Item type="input" width="200px" required text="טלפון" />
          <Item type="input" width="200px" required text="טלפון נייד" />
          <Item type="input" width="640px" text="דואר אלקטרוני" />
          <Item type="input" width="640px" required text="מסגרת מפנה" />
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: "10px",
              paddingLeft: "10px",
            }}
          >
            <Button
              style={{
                borderRadius: "32px",
                padding: "2px",
                width: "32px",
                height: "32px",
                border: "1px solid #CFD3D9",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "white",
              }}
            >
              <InlineSVG src={addImg} />
            </Button>
            <div>הוסף איש קשר</div>
          </div>
        </>
      }
    />
  );
};

export default Contacts;
