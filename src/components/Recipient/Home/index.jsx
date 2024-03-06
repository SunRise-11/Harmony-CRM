import Board from "./Board";
import CardList from "./CardList";
import StatusBar from "./StatusBar";

const Home = () => {
  return (
    <div className="recipient-home">
      <div>
        <StatusBar />
        <Board />
      </div>
      <div>
        <CardList />
      </div>
    </div>
  );
};

export default Home;
