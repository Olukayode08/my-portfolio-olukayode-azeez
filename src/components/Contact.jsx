import React, { useRef } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        'service_k5mwp84',
        'template_sg04osv',
        form.current,
        'XtRzW6PtmW2LCiHl9'
      )
      // .then(
      //   (result) => {
      //     console.log(result.text);
      //   },
      //   (error) => {
      //     console.log(error.text);
      //   }
      // );
  };
  return (
    <>
      <section>
        <Wrapper>
          <main>
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
  );
};
const Wrapper = styled.section`
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
    padding-bottom: 20px;
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
    width: 60vw;
    height: 40px;
    outline: none;
    resize: none;
  }
  input:active{
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
    background: transparent;
    border: none;
    font-size: 18px;
    font-family: inherit;
    background-color: #fff;
    :active{
      scale: 1.1;
    }
  }
`;
export default Contact;
