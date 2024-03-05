import Board from "./Board";
import CardList from "./CardList";
import StatusBar from "./StatusBar";

const Home = () => {
  return (
    <div className="recipient-home">
      <div>
        <StatusBar />
        <div>
          <Board />
        </div>
      </div>
      <div>
        <CardList />
      </div>
    </div>
  );
};

export default Home;
