import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { updateDeck, readDeck } from "../utils/api";
import DeckForm from "./DeckForm";

function DeckEdit() {
  const initialState = { name: "", description: "" };
  const [formData, setFormData] = useState(initialState);
  const [deck, setDeck] = useState({});
  const history = useHistory();
  const { deckId } = useParams();

  useEffect(() => {
    const abortController = new AbortController();
    const loadDeck = async () => {
      const loadedDeck = await readDeck(deckId, abortController.signal);
      setDeck(() => loadedDeck);
      setFormData({
        id: deckId,
        name: loadedDeck.name,
        description: loadedDeck.description,
      });
    };
    loadDeck();
    return () => abortController.abort();
  }, [deckId]);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await updateDeck(formData);
    history.push(`/decks/${response.id}`);
  };


  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item text-primary">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item text-primary">
            <Link to={`/decks/${deckId}`}>{deck.name}</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Edit Deck
          </li>
        </ol>
      </nav>
      <h1>Edit Deck</h1>
      <DeckForm
        initialState={initialState}
        onChange={handleChange}
        onSubmit={handleSubmit}
        currName={formData.name}
        currDesc={formData.description}
      />

    </div>
  );
}

export default DeckEdit;
