import React from 'react';
 
export default function NotesItemMove({ id, onMove }) {
  return <button className='note-item__archive-button' onClick={() => onMove(id)}>Pindahkan</button>
}

