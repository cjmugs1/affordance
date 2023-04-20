import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

function App() {
  return (
      <Router>
        <div className="app-parent-div">
          <Routes>
            <Route path="affordance/" element={<Home />} />
            <Route path="affordance/work" element={<Work />} />
            <Route path="affordance/contact" element={<Contact />} />
            {/* <Route path="/resume" element={<Resume />} /> */}
          </Routes>
        </div>
      </Router>
  );
}

export default App;
