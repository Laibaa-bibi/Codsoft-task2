import React from 'react'
import { useState , useEffect} from 'react'


const Post_Job = () => {
 const [category,setCategory]=useState("");
 const [field,setField]=useState("");
 const [salary,setSalary]=useState("");
 const [location,setLocation]=useState("");
 const [level,setLevel]=useState("");

 useEffect(() => {
  // Set default category based on some condition
  setCategory("Part-time job");
  setField("Data entry");
  setLocation("On-site");
  setLevel("Entry level")
}, []);


 const collectData = async () => {
    console.log(category,field,salary,location,level);

    let result= await fetch('http://localhost:3000/postjob',{
      method:"post",
      body:JSON.stringify({category,field,salary,location,level}),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    let data = await result.json();
    alert("Job posted successfully");
    console.warn(result);

  }

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  }

  const handleFieldChange = (e) => {
    setField(e.target.value);
  }

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  }

  const handleLevelChange = (e) => {
    setLevel(e.target.value);
  }

  return (
    <div className='postmain'>

    <h2 className='ph'>Post a Job</h2>

    <div className='post2'>

    <select defaultValue={category} onChange={handleCategoryChange} className='select'>
        <option value="Part-time job">Part-time job</option>
        <option value="Full-time job">Full-time job</option>
        <option value="Internship">Internship</option>
      </select>


      <select value={field} onChange={handleFieldChange} className='select'>
        <option >Data entry</option>
        <option >web and development</option>
        <option >Software Construction</option>
        <option >Content Writing</option>
        <option >Video editing</option>
        <option >HR management</option>
      </select>

      <input className='pinp' type="salary" placeholder='salary' value={salary} onChange={(e) => { setSalary(e.target.value) }} required />

      <select value={location} onChange={handleLocationChange} className='select'>
        <option >On-site</option>
        <option >Remote</option>
      </select>

      <select value={level} onChange={handleLevelChange} className='select'>
        <option >Entry level</option>
        <option >Middle level</option>
        <option >Experienced</option>
      </select>
     
      <button className='sbtn' onClick={collectData}>Submit</button>


    </div>
  </div>

  )
}

export default Post_Job
