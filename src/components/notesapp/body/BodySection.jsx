import React from 'react'
import NotesInput from './notesinput/NotesInput'
import NotesList from './noteslist/NotesList'

export default function BodySection({addNotes, notes, onArchive, onMove, onDelete, keywordSearch}) {
  const archiveNotes = notes.filter((note) => note.archived === true && note.title.toLowerCase().includes(keywordSearch.toLowerCase().trim()));
  const activeNotes = notes.filter((note) => note.archived === false && note.title.toLowerCase().includes(keywordSearch.toLowerCase().trim()));
  
  return (
    <div className='note-app__body'>
      <NotesInput addNotes={addNotes}/>
      <h2>Catatan yang aktif</h2>
      <NotesList notes={activeNotes} onArchive={onArchive} onDelete={onDelete}/>
      <h2>Catatan yang diarsip</h2>
      <NotesList notes={archiveNotes} onMove={onMove} onDelete={onDelete}/>
    </div>
  )
}
