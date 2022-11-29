import React, {useState} from "react";
import {database} from '../../config'
import {ref, push, child, update} from "firebase/database"

import './MailingList.css'

export default function MailingList() {
  const [email, setEmail] = useState("");

  const handleEmailInput = (e) => {
    const value = e.target.value;
    setEmail(value);
  }

  const handleEmailSubmit = () => {
    let obj = {
      email:email
    }
    const newPostKey = push(child(ref(database), 'posts')).key;
    const object = {};
    object['/' + newPostKey] = obj;
    return update(ref(database), object);
  }

  return (
    <div className="mailinglist-container">
      <div className="mailinglist">
        <input 
          className="email-input"
          type="email"
          value={email} 
          onChange={(e) => handleEmailInput(e)} 
          placeholder="Type your email adress..." 
        />
        <button 
          type="submit" 
          className="btn"
          onClick={() => handleEmailSubmit()}
        >JOIN OPEN BETA</button>
      </div>
    </div>
  )
}