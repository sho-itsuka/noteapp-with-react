import { useEffect, useState } from 'react';
import uuid                    from 'react-uuid';

import Sidebar from './components/Sidebar';
import Main    from './components/Main';

import './App.css';

/**
 * App コンポーネント
 */
function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );
  const [activeNote, setActiveNote] = useState(false);

  useEffect(() =>{
    // ローカルストレージにノートを保存
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  /**
   * ノートを追加する
   */
  const onAddNote = () => {
    const newNote = {
      id:      uuid(),
      title:   "新しいノート",
      content: "",
      modDate: Date.now(),
    };
    setNotes([...notes, newNote]);
    console.log(notes)
  };

  /**
   * ノートを削除する
   */
  const onDeleteNote = (id) => {
    const filterNotes = notes.filter((note) => note.id !== id);
    setNotes(filterNotes);
  };

  /**
   * アクティブなノートをプレビューに表示
   */
  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote)
  };

  /**
   * ノートを更新する
   */
  const onUpdateNote = (updatedNote) => {
    // 修正された新しいノートの配列を返す
    const updatedNotesArray = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      } else {
        return note;
      }
    });

    setNotes(updatedNotesArray);
  };

  return (
    <div className='App'>
      <Sidebar
        onAddNote={onAddNote}
        notes={notes}
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <Main
        activeNote={getActiveNote()}
        onUpdateNote={onUpdateNote}
      />
    </div>
  );
};

export default App;
