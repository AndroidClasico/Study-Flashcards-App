import React, { useState, useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import CardForm from "./CardForm";
import { readDeck, createCard } from "../utils/api";

function CardCreate() {
  const [deck, setDeck] = useState({ card: [] });
  const { deckId } = useParams();
  const history = useHistory();

  useEffect(() => {
    async function loadDeck(){
    const res = await readDeck(deckId)
    setDeck(res)
    }
    loadDeck()
    // readDeck(deckId).then(setDeck);
  }, [deckId]);

  function submitHandler(card) {
    createCard(deckId, card);
  }

  function doneHandler() {
    history.push(`/decks/${deckId}`);
  }

  return (
    <>
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">
                <span className="oi oi-home" /> Home
              </Link>
            </li>
            <li className="breadcrumb-item">
              <Link to={`/decks/${deckId}`}>{deck.name}</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Add Card 
            </li>
          </ol>
        </nav>
        <div>
          <h1>{deck.name} : Add Card</h1>
          <CardForm
            deckName={deck.name}
            onSubmit={submitHandler}
            onDone={doneHandler}
            initailState={deck}
          />
        </div>
      </div>
    </>
  );
}

export default CardCreate;
