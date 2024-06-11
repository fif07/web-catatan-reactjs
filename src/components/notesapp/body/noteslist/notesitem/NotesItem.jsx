import React from 'react';
import NotesItemBody from './NotesItemBody';
import NotesItemDelete from './NotesItemDelete';
import NotesItemMove from './NotesItemMove';
import NotesItemArchive from './NotesItemArchive';
import { showFormattedDate } from '../../../../../utils/index';

export default function NotesItem({ archived, body, createdAt, id, onDelete, onMove, onArchive, title}) {
  return (
    <div className='note-item'>
      <NotesItemBody title={title} date={showFormattedDate(createdAt)} body={body} />

    <div className='note-item__action'>
      <NotesItemDelete id={id} onDelete={onDelete} />
      {
        archived ? <NotesItemMove id={id} onMove={onMove} /> : <NotesItemArchive id={id} onArchive={onArchive} />
      }
    </div>
  </div>
  )
}

