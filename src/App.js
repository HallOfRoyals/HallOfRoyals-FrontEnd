import Header from './components/Header';
import BuyRoyal from './components/BuyRoyal';
import ARExhibition from './components/ARExhibition';
import Distribution from './components/Distribution';
import RoadMap from './components/RoadMap';
import Team from './components/Team';

function App() {
  return (
    <div>
      <Header/>
      <BuyRoyal/>
      <ARExhibition/>
      <Distribution/>
      <RoadMap/>
      <Team/>
      <div className="footer">
        Smart contract address: Contract coming soon...
      </div>
    </div>
  );
}

export default App;
