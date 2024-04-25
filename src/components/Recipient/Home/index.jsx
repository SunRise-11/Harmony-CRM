import Board from "./Board";
import CardList from "./CardList";
import StatusBar from "./StatusBar";

const Home = () => {
  return (
    <div className="recipient-home">
      <div className="recipient-home-status">
        <StatusBar />
        <Board />
      </div>
      <div className="recipient-home-cardlist">
        <CardList />
      </div>
    </div>
  );
};

export default Home;
