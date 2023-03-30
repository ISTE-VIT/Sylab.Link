import React from 'react';
import { firebase } from './firebase';
import "./FileUploader.css"

function App() {    

  const signInWithFirebase = () => {
    const google_provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(google_provider)
    .then((re) => {
      console.log(re);
    })
    .catch((err)=>{
        console.log(err);
    })
  }

    return(
        <button className='sign-up-button' onClick={signInWithFirebase}>Sign In</button>
    )
}

export default App;