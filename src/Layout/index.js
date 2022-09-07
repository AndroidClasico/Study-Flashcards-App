import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

// Components
import Home from "../Home";
import DeckCreate from "../Decks/DeckCreate";
import Header from "./Header";
import NotFound from "./NotFound";
import DeckView from "../Decks/DeckView";
import CardCreate from "../Cards/CardCreate"
import DeckEdit from "../Decks/DeckEdit"
import CardEdit from "../Cards/CardEdit"

function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Switch>
          <Route path="/decks/new">
            <DeckCreate />
          </Route>
          <Route path="/decks/:deckId/edit">
            <DeckEdit />
          </Route>
          <Route path="/decks/:deckId/cards/new">
            <CardCreate />
          </Route>
          <Route path="/decks/:deckId/cards/:cardId/edit">
            <CardEdit />
          </Route>
          <Route exact={true} path="/decks/:deckId">
            <DeckView />
          </Route>
          <Route exact={true} path="/decks">
            <Redirect to="/" />
          </Route>
          <Route exact={true} path="/">
            <Home />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;