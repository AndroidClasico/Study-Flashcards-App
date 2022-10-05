import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { createDeck } from "../utils/api";
import DeckForm from "./DeckForm";

function DeckCreate() {
  const history = useHistory();
  const initialState = { name: "", description: "" };
  const [deck, setdeck] = useState(initialState);

  function submitHandler(deck) {
    createDeck(deck).then((savedDeck) =>
      history.push(`/decks/${savedDeck.id}`)
    );
  }

  function cancel() {
    history.goBack();
  }

  function onChange({ target: { name, value } }) {
    setdeck((prevState) => ({
      ...prevState,
      [name]: value,
    }));
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
            Create Deck
          </li>
        </ol>
      </nav>
      <h1>Create Deck</h1>

      <DeckForm
        onChange={onChange}
        initialState={initialState}
        onCancel={cancel}
        onSubmit={submitHandler}
      />
    </>
  );
}

export default DeckCreate;
