import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { updateDeck, readDeck } from "../utils/api";
import DeckForm from "./DeckForm";

function DeckEdit() {
  // const initialState = { name: "", description: "" };
  // const [formData, setFormData] = useState(initialState);
  
  // useEffect(() => {
  //   const abortController = new AbortController();
  //   const loadDeck = async () => {
  //     const loadedDeck = await readDeck(deckId, abortController.signal);
  //     setDeck(() => loadedDeck);
  //     setFormData({
  //       id: deckId,
  //       name: loadedDeck.name,
  //       description: loadedDeck.description,
  //     });
  //   };
  //   loadDeck();
  //   return () => abortController.abort();
  // }, [deckId]);

  // const handleChange = (event) => {
  //   setFormData({ ...formData, [event.target.name]: event.target.value });
  // };

  const [deck, setDeck] = useState({name: "", description: "" });
  const history = useHistory();
  const { deckId } = useParams();

  useEffect(() => {
    readDeck(deckId).then(setDeck)
  }, [deckId]);

  function handleSubmit(updatedDeck){
    updateDeck(updatedDeck).then((savedDeck) => 
      history.push(`/decks/${savedDeck.id}`)
    );
  };

  function cancel() {
    history.goBack();
  }

  const child =  deck.id ? (
    <DeckForm
        initialState={deck}
        // onChange={handleChange}
        onSubmit={handleSubmit}
        onCancel={cancel}
      />
  ) : (
    <p>Loading...</p>
  )

  return (
    <>
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
            Edit Deck
          </li>
        </ol>
      </nav>
      <h1>Edit Deck</h1>
      {child}
    </>
  );
}

export default DeckEdit;
