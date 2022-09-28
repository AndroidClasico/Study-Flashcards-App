import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import CardForm from "./CardForm";
import { readDeck, createCard } from "../utils/api"


function CardCreate() {
    const [deck, setDeck] = useState({card: []})
    const { deckId } = useParams()
    const history = useHistory()

    useEffect(() => {
        readDeck(deckId).then(setDeck)
    }, [deckId])

    function submitHandler(card) {
        createCard(deckId, card)
    }

    function doneHandler() {
        history.push(`/decks/${deckId}`)
    }

    return (
        <div>
        <h1>{deck.name} : Add Card</h1>
        <CardForm 
            deckName={deck.name}
            onSubmit={submitHandler}
            onDone={doneHandler}
            initailState={deck}

        />
        </div>
    )
}

export default CardCreate;