import Board from "./board/Board";
import CardList from "./cardList/CardList";
import StatusBar from "./statusBar/StatusBar";

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
