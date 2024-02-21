import Basic from "../basic/Basic";
import geometricsSVG from "../../../assets/icons/geometrics.svg";
import Item from "../basic/item/Item";

const Education = ({ selected }) => {
  return (
    <Basic
      title="אנשי קשר"
      icon={geometricsSVG}
      selected={selected}
      content={
        <>
          <Item type="dropdown" width="200px" required text="ישוב" />
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

export default Education;
