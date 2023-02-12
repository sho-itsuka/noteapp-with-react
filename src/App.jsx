import { useState } from 'react'
import uuid         from 'react-uuid'

import Sidebar from './components/Sidebar'
import Main    from './components/Main'

import './App.css'

function App() {
  const [notes, setNotes] = useState([]);

  const onAddNote = () => {
    const newNote = {
      id:      uuid(),
      title:   "新しいノート",
      content: "新しいノートの内容",
      modDate: Date.now(),
    };
    setNotes([...notes, newNote]);
  };

  const onDeleteNote = (id) => {
    const filterNotes = notes.filter((note) => note.id !== id);
    setNotes(filterNotes);
  }

  return (
    <div className='App'>
      <Sidebar onAddNote={onAddNote} notes={notes} onDeleteNote={onDeleteNote} />
      <Main />
    </div>
  )
}

export default App
