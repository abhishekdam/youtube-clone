import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import SearchPage from "./components/SearchPage"
import RecommendedVideo from "./components/RecomendedVideo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/search/:searchTerm">
            <div className="app__page">
              <Sidebar></Sidebar>
              <SearchPage></SearchPage>
            </div>
          </Route>
          <Route path="/">
            <div className="app__page">
              <Sidebar></Sidebar>
              <RecommendedVideo></RecommendedVideo>
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
