import React from 'react'
import styled from 'styled-components'

const ContactMe = () => {
  return (
    <>
      <section>
        <Wrapper>
          <main className='about'>
            <h2>Get in Touch</h2>
            <p>
              I value effective communication and teamwork. Whether you're an
              individual, a startup, or a company, I'm eager to contribute my
              skills to your project. Let's connect and discuss how I can
              contribute to your success. Feel free to reach out using the
              contact information below, and let's embark on a journey to create
              engaging digital experiences together!
            </p>
            <a
              className='e-mail'
              href='mailto:olukakayodeazeez2000@gmail.com'
              target='_blank'
              rel='noreferrer'
            >
              Send An Email
            </a>
          </main>
        </Wrapper>
      </section>
    </>
  )
}
const Wrapper = styled.section`
  overflow: auto;
  position: absolute;
  top: 47%;
  left: 50%;
  transform: translate(-50%, -50%);
  main {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  p {
    font-size: 20px;
    margin: 20px 0;
  }
  .e-mail {
    text-decoration: none;
    margin: 0 auto;
    border: 1px solid #fff;
    border-radius: 10px;
    font-size: 17px;
    font-family: inherit;
    padding: 10px 15px;
    color: #fff;
    :hover {
      color: #000;
      background-color: #fff;
      transition: all 0.3s ease-in;
    }
  }
  @media screen and (max-width: 550px) {
    p {
      font-size: 20px;
      width: 300px;
    }
  }
  @media screen and (max-width: 320px) {
    p {
      font-size: 17px;
      margin: 10px 0;
    }
    .e-mail {
      margin: 0 auto;
      width: 200px;
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
export default ContactMe
