import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Navigation from "./js/components/Navigation";
import CluePage from "./js/routes/CluePage";
import ContentPage from "./js/routes/ContentPage";
import ScrollToTop from "./js/components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <ScrollToTop />
      <Switch>
        <Route path="/clue-page" component={CluePage} />
        <Route path="/content" component={ContentPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
