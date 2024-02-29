import Basic from "../basic/Basic";
import studySVG from "../../../assets/icons/study.svg";
import Item from "../basic/item/Item";
import { Button } from "antd";
import InlineSVG from "react-inlinesvg";
import addImg from "../../../assets/icons/add.svg";
import { useState } from "react";

const Education = ({ selected }) => {
  const options = [
    { label: "תעודה 10 שנות לימוד", value: 0 },
    { label: "תעודת 12 שנות לימוד", value: 1 },
    { label: "בגרות מלאה", value: 2 },
    { label: "מקצועי/ת", value: 3 },
    { label: "הנדסאי/ת", value: 4 },
    { label: "אקדמאי/ת", value: 5 },
    { label: "אחר", value: 6 },
  ];
  const [currentSelected, setCurrentSelected] = useState(-1);
  return (
    <Basic
      title="השכלה"
      icon={studySVG}
      selected={selected}
      content={
        <>
          <Item
            type="dropdown"
            width="461px"
            required
            text="השכלה"
            selected={options[currentSelected]}
            options={options}
            onChange={(value) => setCurrentSelected(value)}
          />
          <Item type="input" width="157px" required text="שנות לימוד" />
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

export default Education;
