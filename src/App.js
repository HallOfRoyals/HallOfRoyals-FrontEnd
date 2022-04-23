import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import Home from './containers/Home';
import Gallery from './containers/Gallery';

function App() {
  return (
    <Router>
      <div className="position-relative hide-side">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
