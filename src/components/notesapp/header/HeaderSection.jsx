import React from 'react'
import NotesSearch from './notessearch/NotesSearch'

export default function HeaderSection({ searchNotes }) {
  return (
    <div className='note-app__header'>
      <h1>Catatan</h1>
      <NotesSearch searchNotes={searchNotes}/>
    </div>
  )
}
