import React from 'react';
import styled from 'styled-components';
import Cv from '../assets/Olukayode.pdf';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { GrTwitter } from 'react-icons/gr';


const Hero = () => {
  return (
    <>
      <section id='hero'>
        <Wrapper>
          <main>
            <h3>Hello I'm</h3>
            <h4>Olukayode Azeez</h4>
            <h3>A Frontend Developer</h3>
            <div className='btn-container'>
              <a className='links' href={Cv} download>
                Download Cv
              </a>
              <Link
                className='links'
                to='contact'
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Let's Talk
              </Link>
            </div>
          </main>
          <div className='socials'>
            <a href='https://github.com/Olukayode08' target='_blank'>
              <FaGithub />
            </a>
            <a
              href='https://www.linkedin.com/in/olukayode-azeez-a09b94238/'
              target='_blank'
            >
              <FaLinkedinIn />
            </a>
            <a href='https://twitter.com/_jireazeez' target='_blank'>
              <GrTwitter />
            </a>
          </div>
        </Wrapper>
      </section>
    </>
  );
};
const Wrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  h3 {
    font-size: 45px;
  }
  h4 {
    font-size: 60px;
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
    margin: 0 7px;
    text-decoration: none;
    color: #000;
    background: #fff;
    cursor: pointer;
    border-radius: 10px;
  }
  .socials{
    position: absolute;
    bottom: 150px;
    left: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
export default Hero;
