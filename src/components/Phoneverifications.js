import React, { useState } from "react";
import { firebase } from "./Firebase";
function Phoneverifications() {
    const [phone,setPhone]=useState();
    const [name,setName]=useState();
  function phoneverify() {
    let recaptcha = new firebase.auth.RecaptchaVerifier("recaptcha");
    let number ="+91"+phone;
    console.log(number);
    firebase
      .auth()
      .signInWithPhoneNumber(number, recaptcha)
      .then((e) => {
        let code = prompt("enter OTP", "");
        if (code == null) return;
        e.confirm(code)
          .then((result) => {
            console.log(result.user, "user");
            document.querySelector("label").textContent =
              result.user.phoneNumber + "Number verified";
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });

      
  }
  return (
    <div>
        <input type="text" onChange={(e)=>setName(e.target.value)}/>
      <div className="mb-3 d-flex justify-content-center my-3">
        <label for="exampleInputPassword1" className="form-label">
          Enter phone Number
        </label>
        <input
          type="number"
          className="form-control"
          id="exampleInputPassword1"
          onChange={(e)=>setPhone(e.target.value)}
        />
      </div>
      <label></label>
      <div id="recaptcha"></div>
      <button type="button" className="btn btn-primary" onClick={phoneverify}>
        Click Me
      </button>
    </div>
  );
}

export default Phoneverifications;
