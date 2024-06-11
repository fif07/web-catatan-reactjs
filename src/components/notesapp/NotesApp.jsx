import React, { Component } from 'react'
import BodySection from './body/BodySection'
import { getInitialData }  from '../../utils/index'
import HeaderSection from './header/HeaderSection'

export default class NotesApp extends Component {
  constructor(props){
    super(props)

    const initialData = getInitialData()

    this.state = {
        notes : initialData,
        keywordSearch : ''
    }

    this.onAddNotes = this.onAddNotes.bind(this)
    this.onArchiveNotes = this.onArchiveNotes.bind(this)
    this.onActiveNotes = this.onActiveNotes.bind(this)
    this.onDeleteNotes = this.onDeleteNotes.bind(this)
    this.onSearchNotes = this.onSearchNotes.bind(this)
  }

  onAddNotes({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toISOString(),
            archived: false,
          }
        ]
      }
    });
  }

  onArchiveNotes(id) {
    this.setState({ notes: this.state.notes.map((note) => note.id === id ? { ...note, archived: true } : note) });
  }

  onActiveNotes(id) {
    this.setState({ notes: this.state.notes.map((note) => note.id === id ? { ...note, archived: false } : note) });
  }

  onDeleteNotes(id) {
    this.setState({ notes: this.state.notes.filter((note) => note.id !== id) });
  }

  onSearchNotes({ keyword }) {
    this.setState(() => {
      return { keywordSearch: keyword }
    });
  }

  render() {
    return (
      <>
        <HeaderSection searchNotes={this.onSearchNotes}/>
        <BodySection addNotes={this.onAddNotes} notes={this.state.notes} keywordSearch={this.state.keywordSearch} onArchive={this.onArchiveNotes} onMove={this.onActiveNotes} onDelete={this.onDeleteNotes} />
      </>
    )
  }
}
