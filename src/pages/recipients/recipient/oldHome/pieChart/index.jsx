import InlineSVG from "react-inlinesvg";
import PieChart from "../../../../../components/charts/PieChart";
import infoSVG from "../../../../../assets/icons/info.svg";

const RecipientPieChart = () => {
  const pieLabels = ["מפעל מוגן", "תעסוקה נתמכת", "מועדון תעסוקתי"];
  const pieData = {
    data: [8, 5, 12],
    backgroundColor: ["#F765A3", "#A155B9", "#16BFD6"],
  };

  return (
    <div className="recipient-pie-charts">
      <div className="recipient-pie-charts-header">
        <div>
          <div className="recipient-pie-charts-header-title">
            כמות לקוחות פעילים בחלוקה לפי התוכנית
          </div>
          <div className="recipient-pie-charts-header-count">25</div>
          <div className="recipient-pie-charts-header-period">
            ב 30 הימים האחרונים
          </div>
        </div>
        <InlineSVG src={infoSVG} />
      </div>
      <div className="recipient-pie-charts-line"></div>
      <div className="recipient-pie-charts-board">
        <span style={{ width: "200px", height: "220px" }}>
          <PieChart labels={pieLabels} Data={pieData} />
        </span>
        <div className="recipient-pie-charts-board-info">
          <div>
            <span>מקבלי שירות 1</span>
            <span
              style={{ backgroundColor: "#165BAA" }}
              className="recipient-pie-charts-board-info-color"
            ></span>
          </div>
          <div>
            <span>מקבלי שירות 2</span>
            <span
              style={{ backgroundColor: "#F765A3" }}
              className="recipient-pie-charts-board-info-color"
            ></span>
          </div>
          <div>
            <span>מקבלי שירות 3</span>
            <span
              style={{ backgroundColor: "#16BFD6" }}
              className="recipient-pie-charts-board-info-color"
            ></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipientPieChart;
