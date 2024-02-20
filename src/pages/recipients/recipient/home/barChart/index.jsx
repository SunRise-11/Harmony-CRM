import BarChart from "../../../../../components/charts/barChart/BarChart";

const RecipientBarChart = () => {
  const barLabels = ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני"];
  const barData = [25, 24, 23, 24, 23, 25];

  return (
    <div>
      <BarChart labels={barLabels} Data={barData} />
    </div>
  );
};

export default RecipientBarChart;
