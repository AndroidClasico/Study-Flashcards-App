import React from "react";
import { Link } from "react-router-dom";

function Prompt({ deck, onDelete }) {
    const { cards = [] } = deck;
    return (
        <article className="col-12 col-md-6 col-xl-4 my-2 align-self-stretch">
            <div className="border rounded p-4 h-100">
                <h5 className="card-title">{deck.name}</h5>
                <h5 className="card-subtitle mb-2 text-muted">{cards.length} cards</h5>
                <Link
                    to={`/decks/${deck.id}`}
                    className="btn btn-secondary mr-2"
                    title="View deck"
                >
                    <span className="oi oi-eye" /> View
                </Link>
                <Link
                    to={`/study/${deck.id}`}
                    className="btn btn-primary"
                    title="Study deck"
                >
                    <span className="oi oi-book" /> Study
                </Link>
                <button
                    className="btn btn-danger float-right"
                    title="Delete deck"
                    onClick={() => onDelete(deck.id)}
                >
                    <span className="oi oi-trash" />
                </button>
            </div>
        </article>
  );
}

export default Prompt;