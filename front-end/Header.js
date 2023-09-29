import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const verify = localStorage.getItem('user');
  const navigate=useNavigate("")

  const logout=()=>{
    localStorage.clear();
    navigate('/Signup');
  }


  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      color: isActive ? "white" : "white",
      fontSize: isActive ? "30px" : "20px",
      textDecoration: isActive ? "none" : "none",
    };
  };

  return (
    <div className='head'>
      

        {verify ? (

          <div className='head1'>
            <NavLink to={'/'} style={navLinkStyles}>Home</NavLink>
            <NavLink to={'/Post_Job'} style={navLinkStyles}>Post a job</NavLink>
            <NavLink to={'/Apply'} style={navLinkStyles}>Apply for Job</NavLink>
            {/* <NavLink to={'/Form'} style={navLinkStyles}>Application Form</NavLink> */}
            <NavLink to={'/Signup'} style={navLinkStyles} onClick={logout}>Logout</NavLink>
          </div>
        )
          :

          (
            <div className='head1'>
              <NavLink to={'/Signup'} style={navLinkStyles}>Signup</NavLink>
              <NavLink to={'/Login'} style={navLinkStyles}>Login</NavLink>
            </div>
          )
        }

      
    </div>
  )
}

export default Header
