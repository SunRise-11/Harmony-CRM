import React from "react";

import QuickInfo from "../quickInfo/QuickInfo";
import TableList from "../tableList/TableList";
import CardList from "../cardList/CardList";
import BarChart from "../../../components/charts/barChart/BarChart";
import Doughnut from "../../../components/charts/doughnut/Doughnut";
import PieChart from "../../../components/charts/pieChart/PieChart";

const barLabels = ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני"];
const barData = [25, 24, 23, 24, 23, 25];

const doughLabels = [
  "הערכה פסיכיאטרית",
  "קליטת עובד",
  "הכוון שיקומי",
  "הכוון מקצועי",
];
const doughData = {
  data: [12.5, 12.5, 25.5, 50],
  backgroundColor: ["#2D9CDB", "#90BE6D", "#F9C74F", "#F94144"],
};

const pieLabels = ["מפעל מוגן", "תעסוקה נתמכת", "מועדון תעסוקתי"];
const pieData = {
  data: [8, 3, 15],
  backgroundColor: ["#F765A3", "#A155B9", "#16BFD6"],
};

const DashBoard2 = () => {
  return (
    <div className="dashboard2">
      <div className="dashboard2-main">
        <div>
          <QuickInfo flag={true} />
        </div>
        <div className="chart">
          <div>
            <div>לקוחות פעילים לפי התוכנית</div>
            <div>25</div>
            <div>ב 30 הימים האחרונים</div>
          </div>
          <div className="chart-main">
            <div>
              <PieChart Data={pieData} labels={pieLabels} />
            </div>
            <div className="pie-labels">
              <div className="item">
                <div>מועדון תעסוקתי</div>
                <div
                  style={{
                    width: "20px",
                    height: "7.5px",
                    backgroundColor: "#16BFD6",
                    borderRadius: "2px",
                  }}
                ></div>
              </div>
              <div className="item">
                <div>מפעל מוגן</div>
                <div
                  style={{
                    width: "20px",
                    height: "7.5px",
                    backgroundColor: "#F765A3",
                    borderRadius: "2px",
                  }}
                ></div>
              </div>
              <div className="item">
                <div>תעסוקה נתמכת</div>
                <div
                  style={{
                    width: "20px",
                    height: "7.5px",
                    backgroundColor: "#A155B9",
                    borderRadius: "2px",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="chart">
          <div>
            <div>לקוחות לפי שלבים</div>
            <div>13,538</div>
            <div>ב 6 חודשים האחרונים</div>
          </div>
          <div className="chart-main">
            <div>
              <Doughnut Data={doughData} labels={doughLabels} flag={true} />
            </div>
            <div className="labels">
              <div className="item">
                <div>הכוון מקצועי</div>
                <div
                  style={{
                    width: "8.3px",
                    height: "8.3px",
                    backgroundColor: "#F765A3",
                    borderRadius: "50%",
                  }}
                ></div>
              </div>
              <div className="item">
                <div>קליטת עובד</div>
                <div
                  style={{
                    width: "8.3px",
                    height: "8.3px",
                    backgroundColor: "#FFAB48",
                    borderRadius: "50%",
                  }}
                ></div>
              </div>
              <div className="item">
                <div>הערכה פסיכיאטרית</div>
                <div
                  style={{
                    width: "8.3px",
                    height: "8.3px",
                    backgroundColor: "#16BFD6",
                    borderRadius: "50%",
                  }}
                ></div>
              </div>
              <div className="item">
                <div>הכוון שיקומי</div>
                <div
                  style={{
                    width: "8.3px",
                    height: "8.3px",
                    backgroundColor: "#A155B9",
                    borderRadius: "50%",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="chart">
          <div>
            <div>כמות לקוחות פעילים בחלוקה לפי חודשים</div>
            <div>3,021</div>
            <div>ב 6 חודשים האחרונים</div>
          </div>
          <div className="chart-main">
            <BarChart labels={barLabels} Data={barData} />
          </div>
        </div>
        <div className="dashboard1-main-table">
          <TableList />
        </div>
        <div className="dashboard1-main-card">
          <CardList />
        </div>
      </div>
    </div>
  );
};

export default DashBoard2;
