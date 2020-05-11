import React from 'react';

class Form extends React.Component {

    state = {
        name: '',
        mail: '',
        comment: ''
    }

    onSubmit = (e) => {
        this.props.addComment(this.state.name,this.state.mail,this.state.comment)
        e.preventDefault()
    }

    onChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render() {
        return (
            <form className="comments-form" onSubmit={this.onSubmit}>
                <h3 className="comments-form__title">Nombre</h3>
                <input name="name" className="comments-form__input"
                    onChange={this.onChange} type="text"
                    placeholder="Ingresa tu nombre" value={this.state.name} />
                <h3 className="comments-form__title">E-mail de contacto</h3>
                <input name="mail" className="comments-form__input"
                    onChange={this.onChange} type="text"
                    placeholder="Ingresa tu e-mail" value={this.state.mail} />
                <h3 className="comments-form__title">Hacenos llegar tu comentario!</h3>
                <textarea maxLength="217" name="comment" className="comments-form__text"
                    onChange={this.onChange} placeholder="Escribí tu comentario..."
                    value={this.state.comment} />
                <input className="comments-form__submit" type="submit" />
            </form>
        )
    }
}

export default Form