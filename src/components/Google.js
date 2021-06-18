import React from "react";
import { auth, firebase,db } from "./Firebase";
let provider = new firebase.auth.GoogleAuthProvider();
function Google() {
  function googleSignin() {
    auth

      .signInWithPopup(provider)
      .then(function (res) {
        db.collection("users").doc(res.user.uid).get().then((userData)=>{
            if(!userData.exists)
            {
                db.collection("users").doc(res.user.uid).set({
                    username:res.user.displayName,
                    email:res.user.email,
                    phone:res.user.phoneNumber,
                })
            }
        }).catch((err)=>{
            console.log(err.message);
        })
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;

        console.log(error.code);
        console.log(error.message);
      });
  }
  function googleSignout() {
    auth.signOut()
     
    .then(function() {
       console.log('Signout Succesfull')
    }, function(error) {
       console.log('Signout Failed')  
    });
 }
  return (
    <div>
      <h1>Hello</h1>
      <button type="button" className="btn btn-primary" onClick={googleSignin}>
        Signin
      </button>
      <button type="button" className="btn btn-danger" onClick={googleSignout}>
        Signout
      </button>
    </div>
  );
}

export default Google;
