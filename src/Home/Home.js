import React, { useEffect, useState } from 'react'
import './Home.css'
import Header from './Header/Header'
import Center from './Center/Center'
import Left from './MyDetails/Left'
import Right from './Rightside/Right'
import { useGlobalData } from '../Layout'; 
import Loading from '../Loading/Loading'
import { useMediaQuery } from 'react-responsive';
import Profile from './MyDetails/Profile'
function Home() {
 const [issmall,setissmall]=useState()
 const small = useMediaQuery({ query: '(min-width: 1000px)' }); 
useEffect(

  ()=>{

 setissmall(small)
  },[small]

)
 const { Details, Experience, Education, Skills, Language,Certifications,Projects,Connect,Workshops,About} = useGlobalData();


const isDataReady =
    Details && Object.keys(Details).length > 0 &&
    Experience && Experience.length > 0 &&
    Education && Education.length > 0 &&
    Skills && Skills.length > 0 &&
    Language && Language.length > 0 &&
    Certifications && Certifications.length > 0 &&
    Projects && Projects.length > 0 &&
    Connect && Connect.length > 0 &&
    Workshops && Workshops.length > 0 &&
    About && About.length > 0 
    


  return (


    
    <div className='Homediv'>
      {!isDataReady ? <Loading/>:
     <div className='Homewrapper'>
     <div className='Homecontent'>
     <Header/>
      <div className='HomeComponents'>
       {!issmall && <Profile/>} 
       {!issmall && <Center/>} 
    
      <Left issmallvalue={issmall}/>
      {issmall && <Center/>} 
      <Right/>
    

     </div> </div></div>
      }
    </div>
  )
}

export default Home
