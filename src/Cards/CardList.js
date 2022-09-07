import React from "react";
import { Link } from "react-router-dom";

function Cardlist({ deck, onCardDelete }) {
    // get the cards from the deck
    const { cards = [] } = deck
    console.log(cards)
    // list of cards
    const listCards = cards.map((card) => (
        <li key={card.id}>
            <div className='row'>
                <div className="col">
                    {card.front}
                </div>
                <div className="col">
                    {card.back}
                </div>
            </div>
        </li>
    ))

    return (
        <div className="mt-4 card-list">
            <h3>Cards</h3>
            <ul className="mt-4 list-group">
                {listCards}
            </ul>
        </div>
    )
}

export default Cardlist;