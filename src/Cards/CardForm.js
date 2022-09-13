import React, {useState} from "react";

function CardForm({onSubmit, onDone, initailState, doneButtonLabel='Done', deckName='Loading...'}) {

    const [card, setCard] = useState(initailState)
    
    function changeHandler({target:{name, value}}){
        setCard((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    function handleSubmit(event) {
        event.preventDefault()
        onSubmit({...card})
        setCard({front:'', back:''})
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="front">front</label>
                <textarea 
                    id='front'
                    name='front'
                    tabIndex='1'
                    className="form-control"
                    required
                    onChange={changeHandler}
                    value={card.front}
                />
            </div>
            <div className="form-group">
                <label htmlFor="back">back</label>
                <textarea 
                    id='back'
                    name='back'
                    tabIndex='2'
                    className="form-control"
                    required
                    onChange={changeHandler}
                    value={card.back}
                />
            </div>
            <button
                onClick={onDone}
                className="btn btn-secondary mr-2"
                tabIndex='4'
            >
                {doneButtonLabel}
            </button>
            <button
                type='submit'
                className="btn btn-primary"
                tabIndex='3'
            >
                Save
            </button>
        </form>
    )
}

export default CardForm