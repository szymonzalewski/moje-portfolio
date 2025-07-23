import Main from "../Main";
import "../Home.css";

const Home = () => {
  return (
    <Main>
      <div className="home-main">
        <h1>Witam serdecznie na mojej stronie</h1>
        <p>
          Jestem początkującym programistą z aspiracjami aby zostać fullstack
          developerem. w moim portfolio znajdują się:
        </p>
      </div>
      <div className="home-card">
        <div className="home-card1">1</div>
        <div className="home-card2">2</div>
        <div className="home-card3">3</div>
        <div className="home-card4">4</div>
      </div>
    </Main>
  );
};

export default Home;
