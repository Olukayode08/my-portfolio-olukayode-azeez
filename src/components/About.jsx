import React from 'react'
import styled from 'styled-components'

const About = () => {
  return (
    <>
      <section>
        <Wrapper>
          <main>
            <h5 className='about'>About</h5>
            <p>
              A highly self driven person who has the capacity to establish,
              carry out, and maintain established procedures in any setting.
              Fast in self learning and open to continious improvement. I am
              skilled at using my technical coding knowledge in areas like
              React, Tailwind-CSS, SCSS, Firebase amongst others to solve
              problems and provide technical solutions.
            </p>
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
    align-items: center;
    justify-content: center;
  }
  h5 {
    font-weight: 600;
    font-size: 55px;
    line-height: 65px;
  }
  p {
    text-align: center;
    font-size: 26px;
    line-height: 35px;
  }

  @media screen and (max-width: 550px) {
    p {
      font-size: 20px;
      width: 300px;
    }
  }
  @media screen and (max-width: 280px) {
    p {
      font-size: 17px;
      width: 220px;
    }
    h5 {
      font-size: 40px;
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
export default About
