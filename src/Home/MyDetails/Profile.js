import React from 'react'
import { useGlobalData } from '../../Layout';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './Profile.css'
function Profile() {
    const navigate = useNavigate();
    const { Details} = useGlobalData();
  return (
    <div className='Profilemaindiv'>
        {

                Details.map(
                    (data) => {
                        return <>
                            <h1 className='Name'>{data.Name}</h1>
                            <h3 className='Thought'>{data.Thought}</h3>
                            <p className='aboutmeshort'>{data.AboutShort}</p>
                        </>
                    }
                )
            }


            <button className='AboutButton' onClick={()=>{ navigate('/About');}}>

                About  <FaArrowRight className='Buttonarrow' /></button>
    </div>
  )
}

export default Profile
