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

const Skills = () => {
  return (
    <>
      <section>
        <Wrapper>
          <main>
            <Marquee
              style={{ margin: '0 20px' }}
              pauseOnHover={true}
              speed={100}
              gradient={false}
              // direction={left}
            >
              <div className='slider-container'>
                <AiFillHtml5 />
                <h1>HTML5</h1>
              </div>
              <div className='slider-container'>
                <SiCss3 />
                <h1>CSS3</h1>
              </div>
              <div className='slider-container'>
                <SiTailwindcss />
                <h1>Tailwind</h1>
              </div>
              <div className='slider-container'>
                <SiStyledcomponents />
                <h1>Styled Components</h1>
              </div>
              <div className='slider-container'>
                <DiJavascript1 />
                <h1>Sassy Cascading Style Sheets</h1>
              </div>
              <div className='slider-container'>
                <DiJavascript1 />
                <h1>Javascript</h1>
              </div>
              <div className='slider-container'>
                <SiFramer />
                <h1>Framer motion</h1>
              </div>
              <div className='slider-container'>
                <BsGithub />
                <h1>Github</h1>
              </div>
              <div className='slider-container'>
                <SiFirebase />
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
    display: flex;
    width: 90vw;
    margin: 0 auto;
    text-align: center;
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
  }
  @media screen and (max-width: 800px) {
    width: 80vw;
    .slider-container {
      width: 30vw;
    }
  }
  @media screen and (max-width: 600px) {
    width: 50vw;
  }
`;
export default Skills;
