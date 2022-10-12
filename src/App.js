import Poems from "./components/poems/Poems";
import PoemDetail from "./components/poems/PoemDetail";
import FavoritesPoems from "./components/poems/FavoritesPoems";
import MainHeader from "./components/Layout/MainHeader";
import { Fragment } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <MainHeader>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/poems" />
          </Route>
          <Route path="/poems" exact>
            <Poems />
          </Route>
          <Route path="/poems/:poemId">
            <PoemDetail />
          </Route>
          <Route path="/favorite-poems">
            <FavoritesPoems />
          </Route>
        </Switch>
      </MainHeader>
    </Fragment>
  );
}

export default App;
