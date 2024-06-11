import React from 'react';
 
export default function NotesItemArchive({ id, onArchive }) {
  return <button className='note-item__archive-button' onClick={() => onArchive(id)}>Arsipkan</button>
}


