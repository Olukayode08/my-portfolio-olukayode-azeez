import React from 'react'
import styled from 'styled-components'

const Contact = () => {
  return (
    <>
      <section>
        <Wrapper>
          <main>
            <h2>Get in Touch</h2>
            <form>
              <div className='form-container'>
                <input
                  className='name'
                  type='text'
                  placeholder='Name'
                  required
                />
              </div>
              <div className='form-container'>
                <input
                  className='email'
                  type='email'
                  placeholder='Email'
                  required
                />
              </div>
              <div className='form-container'>
                <textarea name="message" rows='7' placeholder='Message' required></textarea>
              </div>
              <button>Submit</button>
            </form>
          </main>
        </Wrapper>
      </section>
    </>
  );
}
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
    width: 450px;
    height: 40px;
    outline: 0;
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
  }
`;
export default Contact
