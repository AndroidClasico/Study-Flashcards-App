import React, { useState } from "react";

function DeckForm({ 
  onCancel, 
  onSubmit, 
  initialState = { name: "", description: "" },
}) {
  const [deck, setdeck] = useState(initialState);

  function changeHandler({ target: { name, value } }) {
    setdeck((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    onSubmit(deck);
  }

  return (
    <>
      <form onSubmit={submitHandler} className="deck-edit">
        <fieldset>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            onChange={changeHandler}
            value={deck.name}
            required
            placeholder="Deck Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description </label>
          <textarea
            id="description"
            name="description"
            className="form-control"
            rows="4"
            onChange={changeHandler}
            value={deck.description}
            required
            placeholder="Deck Description"
          />
        </div>
        
        <button type="button" className="btn btn-secondary mr-2" onClick={onCancel}>
          cancel
        </button>
        <button type="submit" className="btn btn-primary">Submit</button>
        </fieldset>
      </form>
    </>
  );
}

export default DeckForm;