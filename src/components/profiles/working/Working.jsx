import Basic from "../basic/Basic";
import jobSVG from "../../../assets/icons/job.svg";
import CheckBox from "../../checkBox/CheckBox";
import Item from "../basic/item/Item";

const Working = ({ selected }) => {
  return (
    <Basic
      title="עבודה"
      icon={jobSVG}
      selected={selected}
      content={
        <>
          <div className="profiles-item">
            <div className="profiles-item-name">
              <span>עובד</span>
              <span style={{ color: "red" }}>*</span>
            </div>
            <div style={{ display: "flex", gap: "60px" }}>
              <CheckBox title="לא" />
              <CheckBox title="כן" />
            </div>
          </div>
        </>
      }
    />
  );
};

export default Working;
