import { HashRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

function App() {
  return (
    <HashRouter>
      <div className="app-parent-div">
        <Switch>
          <Route exact path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/resume" element={<Resume />} /> */}
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
