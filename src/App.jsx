import { useState } from 'react';
import uuid         from 'react-uuid';

import Sidebar from './components/Sidebar';
import Main    from './components/Main';

import './App.css';

function App() {
  const [notes,      setNotes]      = useState([]);
  const [activeNote, setActiveNote] = useState(false);

  // ノートを追加する
  const onAddNote = () => {
    const newNote = {
      id:      uuid(),
      title:   "新しいノート",
      content: "新しいノートの内容",
      modDate: Date.now(),
    };
    setNotes([...notes, newNote]);
  };

  // ノートを削除する
  const onDeleteNote = (id) => {
    const filterNotes = notes.filter((note) => note.id !== id);
    setNotes(filterNotes);
  };

  // アクティブなノートをプレビューに表示
  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote)
  };

  // ノートを更新する
  const onUpdateNote = () => {};

  return (
    <div className='App'>
      <Sidebar
        onAddNote=    {onAddNote}
        notes=        {notes}
        onDeleteNote= {onDeleteNote}
        activeNote=   {activeNote}
        setActiveNote={setActiveNote}
      />
      <Main
        activeNote=   {getActiveNote()}
      />
    </div>
  );
};

export default App;
