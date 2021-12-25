import Header from './components/Header';
import ActionTray from './components/ActionTray';
import ShowCase from './components/ShowCase';
import Distribution from './components/Distribution';
import RoadMap from './components/RoadMap';
import Team from './components/Team';

function App() {
  return (
    <div>
      <Header />
      <div class="container">
        <ActionTray />
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
