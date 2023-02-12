import { useState } from 'react'

import Sidebar from './components/Sidebar'
import Main    from './components/Main'

import './App.css'

function App() {
  const [notes, setNotes] = useState([]);

  const onAddNote = () => {
    const newNote = {
      id:      1,
      title:   "新しいノート",
      content: "新しいノートの内容",
      modDate: Date.now(),
    };
    setNotes([...notes, newNote]);
    console.log(notes)
  };

  return (
    <div className='App'>
      <Sidebar onAddNote={onAddNote} notes={notes} />
      <Main />
    </div>
  )
}

export default App
