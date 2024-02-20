import PieChart from "../../../../../components/charts/pieChart/PieChart";

const RecipientPieChart = () => {
  const pieLabels = ["מפעל מוגן", "תעסוקה נתמכת", "מועדון תעסוקתי"];
  const pieData = {
    data: [8, 3, 15],
    backgroundColor: ["#F765A3", "#A155B9", "#16BFD6"],
  };

  return (
    <div>
      <PieChart labels={pieLabels} Data={pieData} />
    </div>
  );
};

export default RecipientPieChart;
