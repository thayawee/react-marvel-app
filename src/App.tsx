import "./App.css";
import { Route, Switch } from "wouter";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Heroes from "./pages/Heroes";
import HeroesDetail from "./pages/HeroesDetail";

function App() {
  return (
    <Navbar>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/heroes" component={Heroes} />
        <Route path="/heroes/:heroesName" component={HeroesDetail} />
      </Switch>
    </Navbar>
  );
}

export default App;
