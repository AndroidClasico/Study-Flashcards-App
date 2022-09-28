import React, { useState } from "react";
import { useHistory, Link, useParams } from "react-router-dom";

function StudyCard({ cards }) {
  const initialState = {
    onBack: false,
    currentCard: 0,
  };

  const { deckId } = useParams();
  const history = useHistory();
  const [study, setStudy] = useState({ ...initialState });

  const handleNext = () => {
    //Go to next card until the last card is reached
    if (study.currentCard < cards.length - 1) {
      setStudy({
        ...study,
        currentCard: study.currentCard + 1,
        onBack: false,
      });
    } else {
      const confirm = window.confirm(
        "Restart cards? Click cancel to return to the home page."
      );
      if (confirm) {
        setStudy(initialState);
      } else {
        history.push("/");
      }
    }
  };

  const handleFlip = () => {
    if (study.onBack) {
      setStudy({
        ...study,
        onBack: false,
      });
    } else {
      setStudy({
        ...study,
        onBack: true,
      });
    }
  };

  if (cards.length > 2) {
    return (
      <div className="container">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">
              Card {study.currentCard + 1} of {cards.length}
            </h4>
            <p className="card-text font-weight-lighter">
              {study.onBack
                ? cards[study.currentCard].back
                : cards[study.currentCard].front}
            </p>
            <button className="btn btn-secondary mr-1" onClick={handleFlip}>
              Flip
            </button>
            {study.onBack && (
              <button className="btn btn-primary" onClick={handleNext}>
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <h3>Not enough cards.</h3>
        <div className="row my-2">
          <p>
            You need at least 3 cards to study. This deck has {cards} cards.
          </p>
        </div>
        <div className="row">
          <Link to={`/decks/${deckId}/cards/new`}>
            <button className="btn btn-primary">
              <i class="bi bi-plus mr-1"></i>
              Add Card
            </button>
          </Link>
        </div>
      </>
    );
  }
}

export default StudyCard;
