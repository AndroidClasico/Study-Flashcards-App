import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { readDeck } from "../../utils/api/index";
import StudyCard from "./StudyCard";

function StudyDeck() {
  const { deckId } = useParams();

  const [deck, setDeck] = useState({});

  useEffect(() => {
    async function loadDeck() {
      const newDeck = await readDeck(deckId);
      setDeck(newDeck);
      console.log(newDeck);
    }
    loadDeck();
  }, [deckId]);

  if (Object.keys(deck).length) {
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
              <Link to={`/decks/${deckId}/study`}>
                <span className="oi oi-study" /> {deck.name}
              </Link>
            </li>
            <li className="breadcrumb-item">
            Study
            </li>
          </ol>
        </nav>
        <div className="row">
          <h2>Study: {deck.name}</h2>
        </div>
        <div className="row">
          <StudyCard cards={deck.cards} />
        </div>
      </>
    );
  } else return "Loading deck here...";
}

export default StudyDeck;
