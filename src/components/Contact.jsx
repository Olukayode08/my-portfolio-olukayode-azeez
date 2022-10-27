import React, { useRef } from 'react'
import styled from 'styled-components'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      'service_k5mwp84',
      'template_sg04osv',
      form.current,
      'XtRzW6PtmW2LCiHl9'
    )
  }
  return (
    <>
      <section>
        <Wrapper>
          <main className='about'>
            <h2>Get in Touch</h2>
            <form ref={form} onSubmit={sendEmail}>
              <div className='form-container'>
                <input name='name' type='text' placeholder='Name' required />
              </div>
              <div className='form-container'>
                <input type='email' name='email' placeholder='Email' required />
              </div>
              <div className='form-container'>
                <input
                  className='email'
                  type='text'
                  name='subject'
                  placeholder='Subject'
                  required
                />
              </div>
              <div className='form-container'>
                <textarea
                  name='message'
                  placeholder='Message'
                  required
                ></textarea>
              </div>
              <button type='submit'>Submit</button>
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
    font-family: inherit;
    color: #fff;
    font-size: 17px;
    border: none;
    width: 55vw;
    height: 25px;
    outline: none;
    resize: none;
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
