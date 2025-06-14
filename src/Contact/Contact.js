import React, { useState } from 'react'
import Header from '../Home/Header/Header'
import './Contact.css'
import { FiChevronDown } from 'react-icons/fi'; 
import { db } from '../Firebase/Firebase'; 
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom'
<FiChevronDown size={24} />

function Contact() {

const navigate = useNavigate();

const [name,setname] =useState()
const [email,setemail] =useState()
const [phone,setphone] =useState()
const [subject,setsubject] =useState()
const [message,setmessage] =useState()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'Contact'), {
        name: name,
        email:email,
        phone:phone,
        subject:subject,
        msg:message,
        timestamp: new Date(),
      });
      alert('✅ Your request has been successfully sent. We’ll get back to you shortly. Thank you for reaching out!');
      setname('');
      setemail('')
      setphone('')
      setsubject('')
      setmessage('')
    } catch (error) {
      console.error('Error adding document:', error);
    }
  };

  return (
    <div className='Contactmaindiv'>
      <Header />
          <div className='Contactscroll'>
        <div className='aboutallsection contactallsection'>
                <h1 className='Myname' onClick={()=>{ navigate('/');}} >Togin <span className='currentpage'>/ Contact</span></h1>
       


         <div className='Contactbox '>
            
                     <h1 className='AboutHeading'>Contact Me</h1>

                <p className='Abouttext'>For project collaborations, freelance opportunities, interviews, hiring inquiries, or any other professional requests, please feel free to contact me using the form below. Whether you're interested in working together, inviting me to speak, or discussing freelance or full-time roles, I'll review your message and get back to you as soon as possible. I look forward to hearing from you.</p>
                <FiChevronDown size={23} className='downarrow' />       
         </div>


     



            </div>
          
<div className='contactForm'>
             <div className='formTitle'>
             <h1 className='ContactformHeading'>Tell me about yourself</h1>
            </div>
<form onSubmit={handleSubmit} className='form'>
       <div className='formBox'>
           <p className='InputTitle'>Name <span className='TitleSub'> ※ Required</span></p>
           <input value={name} onChange={(e)=>setname(e.target.value)} className='inputbox' required ></input>
       </div>

       <div className='formBox'>
           <p className='InputTitle'>Email <span className='TitleSub'> ※ Required</span></p>
           <input value={email} onChange={(e)=>setemail(e.target.value)} className='inputbox' required></input>
       </div>
       <div className='formBox'>
           <p className='InputTitle'>Phone Number <span className='TitleSub'> ※ Required</span></p>
           <input value={phone} onChange={(e)=>setphone(e.target.value)}className='inputbox' required></input>
       </div>
       <div className='formBox'>
           <p className='InputTitle'>Subject <span className='TitleSub'> ※ Required</span></p>
           <input value={subject} onChange={(e)=>setsubject(e.target.value)}className='inputbox' required></input>
       </div>

       <div className='formBox'>
           <p className='InputTitle ' >Your Message <span className='TitleSub'> ※ Required</span></p>
           <textarea value={message} onChange={(e)=>setmessage(e.target.value)}className='inputbox msgbox'  required></textarea>
       </div>
        
           <button type='submit' className='Formbutton'>Submit</button>

</form>

          </div>
          </div>
    </div>
  )
}

export default Contact
