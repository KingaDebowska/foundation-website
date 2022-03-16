import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Particles from "react-particles-js";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Cegielki from "./components/pages/Cegielki";
import Podopieczni from "./components/pages/Podopieczni";
import Galeria from "./components/pages/Galeria";
import Kontakt from "./components/pages/Kontakt";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/cegielki" component={Cegielki} />
          <Route path="/podopieczni" exact component={Podopieczni} />
          <Route path="/galeria" exact component={Galeria} />
          <Route path="/kontakt" exact component={Kontakt} />
          <>
            <Particles
              className="particles-canvas"
              params={{
                particles: {
                  number: {
                    value: 15,
                    density: {
                      enable: true,
                      value_area: 900,
                    },
                  },
                  shape: {
                    type: "circle",
                    stroke: {
                      width: 6,
                      color: "#f9ab00",
                    },
                  },
                },
              }}
            />

            <Route path="/" exact component={Header} />
          </>
        </Switch>
      </Router>
    </>
  );
}

export default App;
