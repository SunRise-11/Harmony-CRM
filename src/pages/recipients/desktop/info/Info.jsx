import React, { useState } from "react";
import Button from "../../../../components/button/Button";
import Doughnut from "../../../../components/charts/doughnut/Doughnut";
import AddUserModal from "../../../../components/modals/addUser/AddUser";

import addUserImg from "../../../../assets/icons/addUser.svg";
import DoughnutData from "../../../../mockup/DoughnutData.json";

const Info = () => {
  const [isClick, setClick] = useState(false);

  return (
    <div className="info">
      <div className="statistic">
        <div className="count">
          <div className="number">6</div>
          <div className="label">מקבלי שירות בטיפולך</div>
        </div>
        <div className="charts">
          <div className="statistic">
            <div className="doughnut">
              <Doughnut
                Data={DoughnutData.doughnut1}
                labels={["זכר", "עובדים", "אחר"]}
              />
            </div>
            <div className="state">
              <div className="item">
                <div className="percent blue">33%</div>
                <div className="content">עובדים</div>
              </div>
              <div className="item">
                <div className="percent green">50%</div>
                <div className="content">זכר</div>
              </div>
              <div className="item">
                <div className="percent navy">16%</div>
                <div className="content">אחר</div>
              </div>
            </div>
          </div>
          <div className="statistic">
            <div className="doughnut">
              <Doughnut
                Data={DoughnutData.doughnut2}
                labels={["30-40", "20-30", "40-50"]}
              />
            </div>
            <div className="state">
              <div className="item">
                <div className="percent blue">33%</div>
                <div className="content">20-30</div>
              </div>
              <div className="item">
                <div className="percent green">33%</div>
                <div className="content">30-40</div>
              </div>
              <div className="item">
                <div className="percent navy">33%</div>
                <div className="content">40-50</div>
              </div>
            </div>
          </div>
          <div className="statistic">
            <div className="doughnut">
              <Doughnut
                Data={DoughnutData.doughnut3}
                labels={["עובדים", "עובדים", "מובטלים", "בחיפוש"]}
              />
            </div>
            <div className="row">
              <div className="state2">
                <div className="item">
                  <div className="percent green">33%</div>
                  <div className="content">עובדים</div>
                </div>
                <div className="item">
                  <div className="percent blue">33%</div>
                  <div className="content">עובדים</div>
                </div>
              </div>
              <div className="state2">
                <div className="item">
                  <div className="percent red">16%</div>
                  <div className="content">מובטלים</div>
                </div>
                <div className="item">
                  <div className="percent navy">16%</div>
                  <div className="content">בחיפוש</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Button
        icon={addUserImg}
        label="הוספת מקבל שירות"
        paddingY={15}
        onClick={() => setClick(true)}
      />
      <AddUserModal visible={isClick} onCancel={() => setClick(false)} />
    </div>
  );
};

export default Info;
