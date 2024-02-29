import React from "react";

import QuickInfo from "../quickInfo/QuickInfo";
import TableList from "../tableList/TableList";
import CardList from "../cardList/CardList";
import BarChart from "../../../components/charts/barChart/BarChart";
import Doughnut from "../../../components/charts/doughnut/Doughnut";
import PieChart from "../../../components/charts/pieChart/PieChart";
import { useSelector } from "react-redux";

const barLabels = ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני"];
const barData = [25, 24, 23, 24, 23, 25];

const doughLabels = [
  "הערכה פסיכיאטרית",
  "קליטת עובד",
  "הכוון שיקומי",
  "הכוון מקצועי",
];
const doughData = [12.5, 12.5, 25.5, 50];
// backgroundColor: ["#2D9CDB", "#90BE6D", "#F9C74F", "#F94144"],
const backgroundColors = {
  original: ["#16bfd6", "#ffab48", "#a155b9", "#f765a3"],
  suggested: ["#70c6dd", "#eeae70", "#79ae94", "#abd1bc"],
  monday: ["#5b9bfc", "#ff5b7b", "#00c877", "#fed602"],
  dynamics: ["#3594dd", "#ce3c73", "#29cc6d", "#f1c40c"],
};

const pieLabels = ["מפעל מוגן", "תעסוקה נתמכת", "מועדון תעסוקתי"];
const pieData = [8, 5, 15];
const backgroundColors2 = {
  original: ["#f765a3", "#a155b9", "#16bfd6"],
  suggested: ["#abd1bc", "#79ae94", "#70c6dd"],
  monday: ["#fed602", "#00c877", "#5b9bfc"],
  dynamics: ["#f1c40c", "#29cc6d", "#3594dd"],
};

const DashBoard2 = () => {
  const theme = useSelector((state) => state.app.theme);
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
              <PieChart
                Data={{
                  data: pieData,
                  backgroundColor: backgroundColors2[theme],
                }}
                labels={pieLabels}
              />
            </div>
            <div className="pie-labels">
              <div className="item">
                <div>מועדון תעסוקתי</div>
                <div className="pie-item Graph-01" />
              </div>
              <div className="item">
                <div>מפעל מוגן</div>
                <div className="pie-item Graph-02" />
              </div>
              <div className="item">
                <div>תעסוקה נתמכת</div>
                <div className="pie-item Graph-03" />
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
              <Doughnut
                Data={{
                  data: doughData,
                  backgroundColor: backgroundColors[theme],
                }}
                labels={doughLabels}
                flag={true}
              />
            </div>
            <div className="labels">
              <div className="item">
                <div>הכוון מקצועי</div>
                <div className="label-item Graph-03" />
              </div>
              <div className="item">
                <div>קליטת עובד</div>
                <div className="label-item Graph-04" />
              </div>
              <div className="item">
                <div>הערכה פסיכיאטרית</div>
                <div className="label-item Graph-01" />
              </div>
              <div className="item">
                <div>הכוון שיקומי</div>
                <div className="label-item Graph-02" />
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
