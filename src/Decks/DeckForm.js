import { Link, useParams } from "react-router-dom";

function DeckForm({
  currName,
  currDesc,
  onCancel,
  onSubmit,
  onChange,
}) {
  const { deckId } = useParams();
  // function submitHandler(event) {
  //   event.preventDefault();
  //   onSubmit(deck);
  // }

  return (
    <>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={onChange}
          value={currName}
          required
          placeholder="Deck Name"
        />
        <label htmlFor="description">Description </label>
        <textarea
          id="description"
          name="description"
          onChange={onChange}
          value={currDesc}
          required
          placeholder="Brief description of the deck"
        />
          <Link to={`/decks/${deckId}`}>
            <button className="btn btn-secondary mr-2">Cancel</button>
          </Link>
        
        <button type="submit" className="btn btn-primary">
            Submit
          </button>
      </form>
    </>
  );
}

export default DeckForm;
