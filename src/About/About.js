import React from 'react'
import Header from '../Home/Header/Header'
import { useGlobalData } from '../Layout';
import './About.css'
import { useNavigate } from 'react-router-dom';
function About() {
    const {About} = useGlobalData();
    const navigate = useNavigate();
      
    return (
        <div className='aboutmaindiv'>
            <Header />
            <div className='aboutallsection'>
                <h1 className='Myname' onClick={()=>{ navigate('/');}}>Togin <span className='currentpage'>/ About</span></h1>
       
         <div className='aboutbox'>
            
              {

                About.map(
                    (data) => {
                        return <>
                     <h1 className='AboutHeading'>{data.Title}</h1>

                <p className='Abouttext'>{data.Description}</p>
                        </>
                    }
                )
            }
               
         </div>
            </div>
        </div>
    )
}

export default About
