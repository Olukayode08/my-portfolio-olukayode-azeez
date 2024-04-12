import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <>
      <section>
        <Wrapper>
          <main className='about'>
            <h2>Hello I'm</h2>
            <h4>Olukayode Azeez</h4>
            <h3>A Frontend Developer</h3>
            <div className='btn-container'>
              <Link className='links' to='/contact'>
                Let's Talk
              </Link>
            </div>
          </main>
        </Wrapper>
      </section>
    </>
  )
}
const Wrapper = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  h2 {
    font-size: 45px;
  }
  h3 {
    font-size: 45px;
    font-family: 'Source Serif Pro';
  }
  h4 {
    font-size: 60px;
    margin: 10px 0;
  }
  .btn-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .links {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 40px;
    margin: 10px 7px;
    text-decoration: none;
    color: #000;
    background: #fff;
    cursor: pointer;
    border-radius: 10px;
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
export default Hero
