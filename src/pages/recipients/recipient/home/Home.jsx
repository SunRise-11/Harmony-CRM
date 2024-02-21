import BarChart from "./barChart";
import PieChart from "./pieChart";
import CardList from "./cardList/CardList";
import Employment from "./employment/Employment";
import RecentEvents from "./recentEvents/RecentEvents";

const pieLabels = ["מפעל מוגן", "תעסוקה נתמכת", "מועדון תעסוקתי"];
const pieData = {
  data: [8, 3, 15],
  backgroundColor: ["#F765A3", "#A155B9", "#16BFD6"],
};

const Home = () => {
  return (
    <div className="recipient-home">
      <div>
        <div>
          <BarChart />
        </div>
        <div>
          <PieChart />
        </div>
        <div>
          <CardList />
        </div>
      </div>
      <div>
        <RecentEvents />
        <Employment />
      </div>
    </div>
  );
};

export default Home;
