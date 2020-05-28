import React , {useState, useEffect} from 'react';
import config from './firebase';
import "firebase/firestore";


import NoteForm from "./NoteForm/NoteForm";
import './App.css';



function App(props) {

  const [notes,setNotes] = useState([]);
  const [newNotes,setNewNotes]= useState ();


    useEffect(() => {
        const db = config.firestore();
        return db.collection("notes").onSnapshot(snapshot =>{
          const notesData =[];
          snapshot.forEach(doc =>notesData.push({...doc.data(),id: doc.id}));
          setNotes(notesData)
        })
    }, []);


    const onCreate = () => {
      let db = config.firestore();
      db.collection("notes").add({
        noteContent: newNotes
     });
  }

  return (

    <div className="notesContainer">
        <div className="notesBody">
          <ul>
            <input className="inputnote  "
            
             onChange ={e=> setNewNotes(e.target.value)}
            />
            <button onClick ={onCreate} >Crear</button>
            {notes.map((note) => (
               <li key ={note.noteContent}>
                 <NoteForm note={note}/>
               </li>
            ))}
          </ul>
        </div>

        <div className="notesFooter">

        </div>
         <button 
           onClick={() => {config.auth().signOut()
            props.history.push("/");
            }}
         >Sign out</button>
  
      </div>
  );
}


export default App;

