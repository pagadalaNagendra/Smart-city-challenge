import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Team1 from './Eco-Sense';
import Team2 from './Vayu';
import Team3 from './Radiance';
import Team4 from './Horus';
import Team5 from './ANTAR_IOT';
import Team6 from './Yantram_Electronics';
import Team7 from './WareBOT';
import Team8 from './DBR_Innovative_Tech_Team';
import Team9 from './Hydrowverse';
import Team10 from './Nudron';
import Dashboard from './overalldashboard';
import Team11 from './Scc_team';
const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/scc-dashboard" component={Dashboard} />
          <Route path="/scc-dashboard/Eco-Sense" component={Team1} />
          <Route path="/scc-dashboard/Vayu" component={Team2} />
          <Route path="/scc-dashboard/Radiance" component={Team3} />
          <Route path="/scc-dashboard/Horus" component={Team4} />
          <Route path="/scc-dashboard/ANTAR_IOT" component={Team5} />
          <Route path="/scc-dashboard/Yantram_Electronics" component={Team6} />
          <Route path="/scc-dashboard/WareBOT" component={Team7} />
          <Route path="/scc-dashboard/DBR_Innovative_Tech_Team" component={Team8} />
          <Route path="/scc-dashboard/Hydrowverse" component={Team9} />
          <Route path="/scc-dashboard/Nudron" component={Team10} />
          <Route path="/scc-dashboard/Scc_team" component={Team11} />
          <Route path="/scc-dashboard/overalldashboard" component={Dashboard} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
