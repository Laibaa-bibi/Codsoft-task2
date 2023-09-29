import React from 'react'
import { useState ,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(()=>{
    const verify=localStorage.getItem('user');
    if(verify)
    {
      navigate('/');
    }
  }
  )

  const collectData = async () => {
    console.log(name, email, password);

    let data = await fetch('http://localhost:3000/Signup', {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    let result = await data.json();
    localStorage.setItem('user', JSON.stringify(result));
    console.warn(result);

    if(result)
    {
      navigate('/');
    }
  }

  return (

    <div className='signupmain'>

      <h2 className='sh'>Register Now</h2>

      <div className='sign2'>

        <input className='sinp' type="text" placeholder='name' value={name} onChange={(e) => { setName(e.target.value) }} pattern="[A-Za-z]{3,15}" minlength="3" maxlength="15" required />
        <input className='sinp' type="email" placeholder='e-mail' value={email} onChange={(e) => { setEmail(e.target.value) }} minlength="5" maxlength="50" required />
        <input className='sinp' type="password" placeholder='password' value={password} onChange={(e) => { setPassword(e.target.value) }} minlength="3" maxlength="5" required />
        <button className='sbtn' onClick={collectData}>Submit</button>

      </div>


    </div>
  )
}

export default Signup
