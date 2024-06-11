import React, { Component } from 'react'

export default class NotesInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      charLimit: 50,
    }

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onBodyChange = this.onBodyChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onTitleChange(e) {
    this.setState({
      title: e.target.value.slice(0, this.state.charLimit),
    })
  }

  onBodyChange(e) {
    this.setState({
      body: e.target.value,
    })
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.addNotes(this.state);

    this.setState({
      title: '',
      body: '',
    })
  }

  render() {
    return (
      <div className='note-input'>
        <h2>Tambah Catatan</h2>
        <form onSubmit={this.onSubmit}>
          <p className='note-input__title__char-limit'>Karakter tersisa: {this.state.charLimit - this.state.title.length}</p>
          <input className='note-input__title' type='text' placeholder='Judul' value={this.state.title} onChange={this.onTitleChange} required/>
          <textarea className='note-input__body' placeholder='Isi catatanmu' value={this.state.body} onChange={this.onBodyChange} required/>
          <button type='submit'>Tambah</button>
        </form>
      </div>
    )
  }
}
