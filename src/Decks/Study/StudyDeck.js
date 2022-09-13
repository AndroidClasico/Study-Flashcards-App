import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
// import { readCard, readDeck } from "../utils/api";

function StudyDeck( { deck }) {
  
  // const history = useHistory();
  // const { deckId } = useParams();

  // const [deck, setDeck] = useState({ cards: [] });

  // useEffect(loadDeck, [deckId]);

  // function loadCard() {
  //     readCard(cardId).then(setCard);
  // }

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
            {/* {deck.name} */}
          </li>
        </ol>
      </nav>

      <div className="card">
        <div className="card-body">
           Study Card front -> back here
           <button>Flip</button>
           <button>Next</button>
        </div>
      </div>
    </>
  );
}

export default StudyDeck;
