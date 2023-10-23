import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import emailjs from '@emailjs/browser'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
 

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')


  const notify =()=>{

    toast.success('Email sent successfully!', {
      position: toast.POSITION.TOP_RIGHT,
      className: 'notify'
    })
  }

  const form = useRef() 
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      'service_k5mwp84',
      'template_sg04osv',
      form.current,
      'XtRzW6PtmW2LCiHl9'
    )
    setName('')
    setEmail('')
    setMessage('')
    setSubject('')

  }
  return (
    <>
      <section>
        <Wrapper>
          <main className='about'>
            <h2>Get in Touch</h2>
            <form ref={form} onSubmit={sendEmail}>
              <div className='form-container'>
                <input
                  value={name}
                  name='name'
                  type='text'
                  placeholder='Name'
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className='form-container'>
                <input
                  value={email}
                  type='email'
                  name='email'
                  placeholder='Email'
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className='form-container'>
                <input
                  className='email'
                  type='text'
                  value={subject}
                  name='subject'
                  placeholder='Subject'
                  required
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>
              <div className='form-container'>
                <textarea
                  name='message'
                  placeholder='Message'
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <button onClick={sendEmail ? notify : null} type='submit'>
                Submit
              </button>
              <ToastContainer />
            </form>
          </main>
        </Wrapper>
      </section>
    </>
  )
}
const Wrapper = styled.section`
  overflow: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  main {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  h2 {
    padding-bottom: 15px;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
  }
  .form-container {
    border: 1px solid gray;
    padding: 15px;
  }
  textarea,
  input {
    background: transparent;
    border: 2px solid white;
    color: #fff;
    font-size: 17px;
    border: none;
    width: 55vw;
    height: 25px;
    outline: none;
    resize: none;
  }
  .notify{
    color: #fff;
    background: #0006;
  }
  input:focus{
    outline-width: 0;
  }
  input:active {
    background: transparent;
    border: 0;
    outline: none;
    border: none;
  }
  textarea {
    height: 100px;
  }
  button {
    width: 120px;
    height: 30px;
    border-radius: 10px;
    border: none;
    font-size: 20px;
    font-family: inherit;
    background-color: #fff;
    color: #000;
    :active {
      scale: 1.1;
    }
  }
  .about {
    -webkit-animation: about 0.5s cubic-bezier(0.215, 0.61, 0.355, 1) both;
    animation: about 0.5s cubic-bezier(0.215, 0.61, 0.355, 1) both;
  }
  @-webkit-keyframes about {
    0% {
      letter-spacing: -0.5em;
      -webkit-transform: translateZ(-700px) translateY(-500px);
      transform: translateZ(-700px) translateY(-500px);
      opacity: 0;
    }
    40% {
      opacity: 0.6;
    }
    100% {
      -webkit-transform: translateZ(0) translateY(0);
      transform: translateZ(0) translateY(0);
      opacity: 1;
    }
  }
  @keyframes about {
    0% {
      letter-spacing: -0.5em;
      -webkit-transform: translateZ(-700px) translateY(-500px);
      transform: translateZ(-700px) translateY(-500px);
      opacity: 0;
    }
    40% {
      opacity: 0.6;
    }
    100% {
      -webkit-transform: translateZ(0) translateY(0);
      transform: translateZ(0) translateY(0);
      opacity: 1;
    }
  }
`
export default Contact
