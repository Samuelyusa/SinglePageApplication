import React from 'react';
import PropTypes from 'prop-types';

class NoteInput extends React.Component {
    constructor(props) {
        super(props);

        // inisialisasi state
        this.state = {
            title: '',
            body: '',
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }



    onTitleChangeEventHandler(event) {
        this.setState(() => {
        return {
            title: event.target.value,
        }
        });
    }

    onBodyChangeEventHandler(event) {
        this.setState(() => {
        return {
            body: event.target.innerHTML,
        }
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
    }

    render() {
    return (
        <form className='add-new-page' onSubmit={this.onSubmitEventHandler}>
            <div className='add-new-page__input'>
                <input className='add-new-page__input__title' type="text" placeholder="Judul Catatan" value={this.state.title} onChange={this.onTitleChangeEventHandler} />
                <div className="add-new-page__input__body" 
                        contentEditable="true" data-placeholder="Isi catatan ...." 
                        value={this.state.body} onInput={this.onBodyChangeEventHandler}>
                </div>
            </div>
            <div className='add-new-page__action'>
                <button className='action' type="submit">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-check-lg" viewBox="0 0 16 16">
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                </svg>
                </button>
            </div>
        </form>
    )
    }
}

NoteInput.propTypes ={
    addNote: PropTypes.func.isRequired,
}

export default NoteInput;
