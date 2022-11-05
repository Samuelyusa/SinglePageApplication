import React from 'react';
import PropTypes from 'prop-types';

class NoteInput extends React.Component {
    constructor(props) {
        super(props);

        // inisialisasi state
        this.state = {
            title: '',
            body: '',
            // id: +new Date().getTime(),
            // archived: false,
            // createdAt: +new Date(),
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
                <button className='action' type="submit">T</button>
            </div>
        </form>
    )
    }
}

NoteInput.propTypes = {
    addNote: PropTypes.func.isRequired,
}

export default NoteInput;
