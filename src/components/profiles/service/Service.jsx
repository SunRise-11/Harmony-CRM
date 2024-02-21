import Basic from "../basic/Basic";
import userSVG from "../../../assets/icons/user.svg";
import Item from "../basic/item/Item";

const Service = ({ selected }) => {
  return (
    <Basic
      title="פרטי מקבל שירות"
      icon={userSVG}
      selected={selected}
      content={
        <>
          <Item type="input" width="200px" required text="שם פרטי" />
          <Item type="input" width="400px" required text="שם משפחה" />
          <Item type="input" width="200px" required text="תעודת זהות" />
          <Item type="date-picker" width="180px" required text="תאריך לידה" />
          <Item type="disabled" width="200px" text="גיל מחושב" />
          <Item type="dropdown" width="200px" required text="מספר ילדים" />
          <Item type="dropdown" width="180px" required text="מאיפה הגיע" />
          <Item
            type="dropdown"
            width="200px"
            required
            text="תאריך סיום שירות"
          />
        </>
      }
    />
  );
};

export default Service;
