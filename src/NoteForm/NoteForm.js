import React ,{useState} from "react";
import config from "firebase";


function NoteForm({note}){

    const [noteContent, setNoteContent] = useState(note.noteContent);

    const onUpdate =()=>{
        const db =config.firestore()
        db.collection("notes").doc(note.id).set({...note,noteContent})
    }
  
    const onDelete = (id) => {
        const db =config.firestore()
        db.collection("notes").doc(note.id).delete()
    
         }

    return(

    <div className= "contentoldnote">
            <input className="inputnote"
            value={noteContent}
             onChange = {(e) => {
                 setNoteContent(e.target.value);
             }}
             placeholder="Write your Note"/>
         
            <button className="buttonupdate" onClick={onUpdate}>
                Update</button>
            <button className="buttondelete" onClick={onDelete}>
                Delete</button>
     </div>   
    )
        
}

export default NoteForm;