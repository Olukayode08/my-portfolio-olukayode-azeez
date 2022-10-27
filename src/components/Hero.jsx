import React from 'react';
import styled from 'styled-components';
import Cv from '../assets/Olukayode.pdf';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const bodyVariant = {
  initial: {
    y: 1000,
  },
  final: {
    y: 0,
    transition: { delay: 0.3, duration: 0.7 },
  },
}

const Hero = () => {

  return (
    <>
      <motion.section
        transition={{ staggerChildren: 0.3 }}
        initial='initial'
        whileInView='final'
        viewport={{ once: false, amount: 0.1 }}
      >
        <Wrapper>
          <motion.main variants={bodyVariant}>
            <h2>Hello I'm</h2>
            <h4>Olukayode Azeez</h4>
            <h3>A Frontend Developer</h3>
            <div className='btn-container'>
              <a className='links' href={Cv} download>
                Download Cv
              </a>
              <Link className='links' to='/contact'>
                Let's Talk
              </Link>
            </div>
          </motion.main>
        </Wrapper>
      </motion.section>
    </>
  )
};
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
    padding: 10px 0;
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
`;
export default Hero;
