import React from "react"
import { Link } from "react-router-dom"

function DeckEdit() {
    return (
        <div>
        <h1>Edit Deck</h1>
        <form>
            <label htmlFor="deck-name">
            Name <hr></hr>
            <input type="text" id="deck.id" name="deck-name" />
            </label>
            <hr></hr>
            <label htmlFor="description">
            Description <hr></hr>
            <textarea type="text-box" id="description" name="description" />
            </label>
            <hr></hr>
            <button>cancel</button>
            <button>Submit</button>
        </form>
        </div>
    )
}

export default DeckEdit