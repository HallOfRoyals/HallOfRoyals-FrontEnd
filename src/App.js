import Header from './components/Header';
import ActionTray from './components/ActionTray';
import ShowCase from './components/ShowCase';
import Story from './components/Story';
import RoadMap from './components/RoadMap';
import Team from './components/Team';
import shapeFourteen from './static/images/shape-14.png';
import shapeFifteen from './static/images/shape-15.png';

function App() {
  return (
    <div className="position-relative">
      <Header />
      <div class="container">
        <ActionTray />
        <img src={shapeFourteen} alt="" className="shape-14"/>
        <ShowCase />
        <Story />
        <img src={shapeFifteen} alt="" className="shape-15"/>
        <RoadMap />
        <Team />
      </div>
      {/* <div className="footer">
        Smart contract address: Contract coming soon...
      </div> */}
    </div>
  );
}

export default App;
