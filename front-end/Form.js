import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const[education,setEdu]=useState("");
    const navigate=useNavigate();

    const applyhandle=()=>{
      if(name,email,education)
      {
     alert("Successfully applied to the job");
     navigate('/');
      }
    }

  return (
    <div className='signupmain'>

      <h2 className='sh'>Apply Now</h2>

      <div className='sign2'>

        <input className='sinp' type="text" placeholder='name' value={name} onChange={(e) => { setName(e.target.value) }} pattern="[A-Za-z]{3,15}" minlength="3" maxlength="15" required />
        <input className='sinp' type="email" placeholder='e-mail' value={email} onChange={(e) => { setEmail(e.target.value) }} minlength="5" maxlength="50" required />
        <input className='sinp' type="text" placeholder='education' value={education} onChange={(e) => { setEdu(e.target.value) }} minlength="5" maxlength="50" required />
        <label className='label'>Upload Resume</label><input type="file" accept=".pdf, .doc, .docx" className='upload'/>
        <button onClick={applyhandle} className='fbtn'>Apply</button>
      </div>

    </div>
  )
}

export default Form
