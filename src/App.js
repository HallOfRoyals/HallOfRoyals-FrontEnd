import Header from './components/Header';
import ActionTray from './components/ActionTray';
import ShowCase from './components/ShowCase';
import Distribution from './components/Distribution';
import RoadMap from './components/RoadMap';
import Team from './components/Team';
import shapeFourteen from './static/images/shape-14.png';

function App() {
  return (
    <div className="position-relative">
      <Header />
      <div class="container">
        <ActionTray />
        <img src={shapeFourteen} alt="" className="shape-14"/>
        <ShowCase />
      </div>
      {/* <ShowCase/>
      <ARExhibition/>
      <Distribution/>
      <RoadMap/>
      <Team/> */}
      {/* <div className="footer">
        Smart contract address: Contract coming soon...
      </div> */}
    </div>
  );
}

export default App;
