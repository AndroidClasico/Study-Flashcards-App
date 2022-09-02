import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { listDecks, deleteDeck } from "../utils/api";
import Prompt from "./Prompt";


function Prompts() {
    // create our decks "state"  w/ "useState"
    const [decks, setDecks] = useState([]);

    // render ours decks w/ "useEffect"
    useEffect(() => {
        listDecks().then(setDecks);
    }, []);

    // function to delete handler
    function deleteHandler(deckId) {
        const confirmed = window.confirm("Delete this deck?\n\nYou will not be able to recover it.");
        if (confirmed) {
            deleteDeck(deckId).then(listDecks).then(setDecks).catch(console.error);
        };
    };

    const list = decks.map((deck) => (
        <Prompt key={deck.id} deck={deck} onDelete={deleteHandler} />
    ));

    return (
        <main className="container">
            <Link to="/decks/new" className="btn btn-secondary">
                <span className="oi oi-plus" /> Create Deck
            </Link>
            <section className="row">{list}</section>
        </main>
    )
}

export default Prompts;