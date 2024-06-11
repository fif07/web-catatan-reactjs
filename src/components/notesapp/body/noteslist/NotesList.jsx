import React from 'react'
import NotesItem from './notesitem/NotesItem'

export default function NotesList({notes, onArchive, onDelete, onMove}) {
  if (notes.length === 0) {
    return <p className='notes-list__empty-message'>Catatan Kosong</p>
  }
  return (
    <div className='notes-list'>
        {
            notes.map((note) => (
                <NotesItem key={note.id} {...note} onArchive={onArchive} onDelete={onDelete} onMove={onMove}/>
            ))
        }
    </div>
  )
}
