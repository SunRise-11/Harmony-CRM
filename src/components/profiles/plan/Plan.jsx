import Basic from "../basic/Basic";
import planSVG from "../../../assets/icons/plan2.svg";
import Item from "../basic/item/Item";

const Plan = ({ selected }) => {
  return (
    <Basic
      title="תוכניות"
      icon={planSVG}
      selected={selected}
      content={
        <>
          <Item type="dropdown" width="200px" required text="מחוז" />
          <Item type="date-picker" width="200px" required text="תאריך קליטה" />
          <Item type="date-picker" width="200px" required text="תאריך הארכה" />
          <Item type="dropdown" width="200px" required text="סוג אישור" />
          <Item type="disabled" width="200px" text="תאריך סיום" />
          <Item type="input" width="200px" required text="חודשי אישור" />
          <Item type="disabled" width="200px" text="מספר החלטה" />
        </>
      }
    />
  );
};

export default Plan;
