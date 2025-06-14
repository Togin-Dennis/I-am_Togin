import React from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom';
function Header() {
  const navigate = useNavigate();
  return (
    <div className='Headermaindiv'>
     
     <button className='Headerbutton' onClick={()=>{ navigate('/About');}}>About</button>
     <button className='Headerbutton' onClick={()=>{ navigate('/');}}>Home</button>
     <button  className='Headerbutton'  onClick={()=>{ navigate('/Contact');}}>Contact</button>
    </div>
  )
}

export default Header
