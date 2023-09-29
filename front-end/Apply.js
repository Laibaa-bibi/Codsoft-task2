import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Apply = () => {

  const [jobs,setJob]=useState([]);
  const navigate=useNavigate();

  useEffect(() => 
  {
    getResult();

  }, []);


  const getResult = async () => {
    let result = await fetch('http://localhost:3000/view');
    result = await result.json();
    if(result)
    { console.log(result);
    setJob(result);
    }
  };

  const apply=()=>{
   navigate('/Form');
  }


  const handleSearch=async(event)=>{
    let key=event.target.value;
    if(key)
    {
    let result = await fetch(`http://localhost:3000/search/${key}`);
    result = await result.json();

    if(result)
    {
      setJob(result);
    }
  }

  else{
    getResult();
  }
}

  return (

    <div className='signupmain'>
      <h2 className='sh'>Jobs</h2>
      <input placeholder='search' className='searching' onChange={handleSearch}></input>

      <div>

      <table className="job-table">
  <thead>
    <tr>
      <th>Category</th>
      <th>Field</th>
      <th>Salary</th>
      <th>Location</th>
      <th>Level</th>
      <th>Apply</th>
    </tr>
  </thead>
  <tbody>
    {jobs.map((item, index) => (
      <tr key={index}>
        <td>{item.category}</td>
        <td>{item.field}</td>
        <td>{item.salary}</td>
        <td>{item.location}</td>
        <td>{item.level}</td>
        <td><button className='tbtn' onClick={apply}>Apply now</button></td>
      </tr>
    ))}
  </tbody>
</table>


      </div>

    </div>
  )
}

export default Apply
