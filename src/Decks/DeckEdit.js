import React from "react";
import { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import DeckForm from "./DeckForm";
import { readDeck, updateDeck } from "../utils/api";

function DeckEdit() {
  const [deck, setDeck] = useState({});
  const history = useHistory();
  const { deckId } = useParams();
  const initialState = {
    name: "",
    description: deck.description,
  };

  useEffect(() => {
    readDeck(deckId).then(setDeck);
  }, [deckId]);

  function submitHandler(deck) {
    //READ THE DECK
    //UPDATE / SAVE THE DECKS NEW STATE

    //event.preventDefault ???
    readDeck(deck).then((updateDeck) => {
      console.log(deck)
      return updateDeck(deck) && history.push(`/decks/${updateDeck.id}`);
    });
  }

  function cancel() {
    history.push(`/decks/${deckId}`);
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
            <Link to={`/decks/${deckId}`}>
              <span className="oi oi-study" /> {deck.name}
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Edit Deck
          </li>
        </ol>
      </nav>

      <div>
        <h1>Edit Deck</h1>
        <DeckForm
          initialState={initialState}
          deckName={deck.name}
          deckDescription={deck.description}
          onCancel={cancel}
          onSubmit={submitHandler}
        />
      </div>
    </>
  );
}

export default DeckEdit;
