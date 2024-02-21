import Basic from "../basic/Basic";
import detailSVG from "../../../assets/icons/detail.svg";
import Item from "../basic/item/Item";
import CheckBox from "../../checkBox/CheckBox";

const Detail = ({ selected }) => {
  return (
    <Basic
      title="פרטים נוספים"
      icon={detailSVG}
      selected={selected}
      content={
        <>
          <div
            className="profiles-item"
            style={{ width: "200px", borderLeft: "1px solid #CED8DB" }}
          >
            <div className="profiles-item-name">
              <span>שירות צבאי</span>
            </div>
            <div style={{ display: "flex", gap: "60px" }}>
              <CheckBox title="לא" />
              <CheckBox title="כן" />
            </div>
          </div>
          <div
            className="profiles-item"
            style={{ width: "200px", borderLeft: "1px solid #CED8DB" }}
          >
            <div className="profiles-item-name">
              <span>רישום פלילי</span>
              <span style={{ color: "red" }}>*</span>
            </div>
            <div style={{ display: "flex", gap: "60px" }}>
              <CheckBox title="לא" />
              <CheckBox title="כן" />
            </div>
          </div>
          <div className="profiles-item">
            <div className="profiles-item-name">
              <span>מדד תאוצה</span>
            </div>
            <div style={{ display: "flex", gap: "60px" }}>
              <CheckBox title="לא" />
              <CheckBox title="כן" />
            </div>
          </div>
          <Item type="input" width="640px" text="הערות" />
          <Item type="dropdown" width="200px" text="רישיון נהיגה" />
          <Item type="dropdown" width="200px" text="קופת חולים" />
          <Item type="dropdown" width="200px" text="פסיכיאטר" />
        </>
      }
    />
  );
};

export default Detail;
