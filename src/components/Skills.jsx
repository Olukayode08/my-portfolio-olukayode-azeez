import React from 'react';
import styled from 'styled-components';
import Marquee from 'react-fast-marquee';
import { AiFillHtml5 } from 'react-icons/ai';
import {
  SiCss3,
  SiFramer,
  SiTailwindcss,
  SiStyledcomponents,
  SiFirebase,
} from 'react-icons/si';
import { BsGithub } from 'react-icons/bs';
import { DiJavascript1 } from 'react-icons/di';
import { GrReactjs } from 'react-icons/gr';
import Sass from '../assets/download.png'

const Skills = () => {
  return (
    <>
      <section>
        <Wrapper>
          <main>
            <h2 className='about'>Skills</h2>
            <Marquee
              style={{ margin: '0 20px' }}
              pauseOnHover={true}
              speed={100}
              gradient={false}
            >
              <div className='slider-container'>
                <AiFillHtml5 className='icon' />
                <h1>HTML5</h1>
              </div>
              <div className='slider-container'>
                <SiCss3 className='icon' />
                <h1>CSS3</h1>
              </div>
              <div className='slider-container'>
                <SiTailwindcss className='icon' />
                <h1>Tailwind</h1>
              </div>
              <div className='slider-container'>
                <SiStyledcomponents className='icon' />
                <h1>Styled Components</h1>
              </div>
              <div className='slider-container'>
                <img src={Sass} alt='Sass' />
                <h1>Sassy Cascading Style Sheets</h1>
              </div>
              <div className='slider-container'>
                <DiJavascript1 className='icon' />
                <h1>Javascript</h1>
              </div>
              <div className='slider-container'>
                <GrReactjs className='icon' />
                <h1>React</h1>
              </div>
              <div className='slider-container'>
                <SiFramer className='icon' />
                <h1>Framer motion</h1>
              </div>
              <div className='slider-container'>
                <BsGithub className='icon' />
                <h1>Git & Github</h1>
              </div>
              <div className='slider-container'>
                <SiFirebase className='icon' />
                <h1>Firebase</h1>
              </div>
            </Marquee>
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
    width: 90vw;
    margin: 0 auto;
    text-align: center;
  }
  h2{
    font-size: 45px;
    padding-bottom: 15px;
  }
  .slider-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 20vw;
    height: 150px;
    margin: 0 20px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    overflow: hidden;
    .icon{
      font-size: 30px;
    }
    h1{
      font-size: 19px;
      padding-top: 10px;
    }
  }
  img{
    width: 10%;
  }
  @media screen and (max-width: 800px) {
    .slider-container {
      width: 30vw;
    }
  }
  .about {
    -webkit-animation: about 0.8s
    cubic-bezier(0.215, 0.61, 0.355, 1) both;
    animation: about 0.8s
    cubic-bezier(0.215, 0.61, 0.355, 1) both;
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

`;
export default Skills;
