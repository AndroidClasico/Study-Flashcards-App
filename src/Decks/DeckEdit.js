import React from "react";
// import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import DeckForm from "./DeckForm";
import { readDeck, updateDeck } from "../utils/api";

function DeckEdit() {
  const history = useHistory();

  function submitHandler(deck) {

    //READ THE DECK
    //UPDATE / SAVE THE DECKS NEW STATE

    //event.preventDefault ???
      readDeck(deck).then((updateDeck) =>
      history.push(`/decks/${deck.id}`)
      );
  }

  function cancel() {
      history.goBack();
  }


  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">
              <span className="oi oi-home" /> Home
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Edit Deck
          </li>
        </ol>
      </nav>

      <div>
        <h1>Edit Deck</h1>
           <DeckForm onCancel={cancel} onSubmit={submitHandler} />
          
      </div>
    </>
  );
}

export default DeckEdit;
