import React from 'react'
import './Right.css'

import { useGlobalData } from '../../Layout';
function Right() {

const {  Certifications, Projects, Connect ,Workshops} = useGlobalData();
  


  return (
    <div className='Rightsidemaindiv'>


      <div className='Education projects'>
        <h3 className='Ecucationtitle'>Certifications</h3>

        {
          [...Certifications].sort((a, b) => a.no - b.no).map(
            (data) => { 
                return <p onClick={data.url ? () => window.open(data.url):null }className={`Educationlist certificatelist ${data.url ? 'LinkHover' : ''}`}>{data.name}
                 <span className='issuedby'>: {data.issuedby}</span></p>
              
              
            }

          )
        }



      </div>



      <div className='Education projects'>
        <h3 className='Ecucationtitle'>Projects</h3>
        {
          [...Projects].sort((a, b) => a.no - b.no).map(
            (data) => {
              return <p onClick={data.RedirectUrl ? () => window.open(data.RedirectUrl):null} className={`Educationlist Projectlist ${data.RedirectUrl ? 'LinkHover' : ''}`}>{data.ProjectName} :
               <span className='Projectdescription'>{data.Projectdescription}</span>
                  <span className='Educationlist Projecttech'>
                    {data.Techused}
                  </span>
                </p>
            
            }
          )
        }



      </div>



            <div className='Education projects' >
                <h3 className='Ecucationtitle'>Workshops</h3>

                {
                   [...Workshops].sort((a, b) => a.no - b.no).map(
                        (data) => {
                            return <p onClick={data.url ? () => window.open(data.url):null} className={`Educationlist ${data.url? 'LinkHover':''}`}>{data.Name} ※ {data.Organize} ※ {data.Date}</p>
                        }
                    )
                }
           </div>





      <div className='Education projects'>
        <h3 className='Ecucationtitle'>Connect</h3>
         {
          Connect.map(
            (data) => {
              return    <p onClick={data.Url ? () => window.open(data.Url):null} className='Educationlist Projectlist LinkHover'>{data.social}</p>
              
           
            
            }
          )
        }
    

      </div>

    </div>

  )
}

export default Right
