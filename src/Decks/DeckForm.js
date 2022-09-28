import React, { useState } from "react";

function DeckForm({
  ducky,
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
      <form onSubmit={submitHandler}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={changeHandler}
          value={deck.name}
          required
          placeholder="deck name"
        />
        <label htmlFor="description">Description </label>
        <textarea
          id="description"
          name="description"
          onChange={changeHandler}
          value={deck.description}
          required
          placeholder="deck description"
        />
        <button type="button" onClick={onCancel}>
          cancel
        </button>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default DeckForm;
