import React from 'react'

import './Left.css'
import { useGlobalData } from '../../Layout';
import { useNavigate } from 'react-router-dom';
import Profile from './Profile';

function Left(props) {
const navigate = useNavigate();

const {Experience, Education, Skills, Language } = useGlobalData();

 


    return (
        <div className='Leftsidemaindiv'>

{props.issmallvalue&&
          <Profile/>


}


            <div className='Education'>
                <h3 className='Ecucationtitle'>Experience</h3>

                {
                   [...Experience].sort((a, b) => a.no - b.no).map(
                        (data) => {
                            return <p className='Educationlist'>{data.Role}<br />{data.company}<br />{data.Duration}</p>
                        }
                    )
                }




            </div>
            <div className='Education'>
                <h3 className='Ecucationtitle'>Education</h3>

                {

                  [...Education].sort((a, b) => a.no - b.no).map(
                        (data) => {
                            return <>
                                <p className='Educationlist'>{data.course}<br />{data.College}<br />{data.Duration}</p>
                            </>
                        }
                    )
                }




            </div>

            <div className='Education'>
                <h3 className='Ecucationtitle'>Skills</h3>

                {
                    Skills.map(
                        (data) => {
                            return data.SkillsNames.map((Skills, index) => {
                                return <p className='Educationlist'>{Skills}</p>
                            }
                    )
                        }

                    )
                }




            </div>


            <div className='Education'>
                <h3 className='Ecucationtitle'>Languages Known</h3>


 {
                    Language.map(
                        (data) => {
                            return data.Languages.map((Languagenames, index) => {
                                return <p className='Educationlist'>{Languagenames}</p>
                            }
                    )
                        }

                    )
                }

                

            </div>

        </div>
    )
}

export default Left
