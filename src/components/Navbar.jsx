import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { GrTwitter, GrReactjs } from 'react-icons/gr'
import { motion } from 'framer-motion';
import {DiJavascript1} from 'react-icons/di'
import {AiFillHtml5} from 'react-icons/ai'
import {SiCss3} from 'react-icons/si'

const navVariant = {
  initial: {
    y: -50,
    opacity: 0,
    scale: 0.87,
  },
  final: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { duration:0.6 },
  },
};
const linkVariants = {
  initial: {
    x: -100,
    opacity: 0,
    scale: 0.87,
  },
  final: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {delay:1 , duration:0.6},
  },
};

const Navbar = () => {
  const date = new Date()
  const todaysDate = date.toDateString()
  const time = date.getHours()+':'+date.getMinutes()
  return (
    <>
      <motion.section
        transition={{ staggerChildren: 0.3 }}
        initial='initial'
        whileInView='final'
        viewport={{ once: false, amount: 0.1 }}
      >
        <Wrapper>
          <div className='date'>
            <p>{todaysDate}</p>
            <p>{time}</p>
          </div>
          <motion.nav className='nav' variants={navVariant}>
            <li>
              <Link className='link' to='/'>
                Home
              </Link>
            </li>
            <li>
              <Link className='link' to='/about'>
                About
              </Link>
            </li>
            <li>
              <Link className='link' to='/skills'>
                Skills
              </Link>
            </li>
            <li>
              <Link className='link' to='/projects'>
                Projects
              </Link>
            </li>
            <li>
              <Link className='link' to='/contact'>
                Contact
              </Link>
            </li>
          </motion.nav>
          <motion.div variants={linkVariants} className='socials'>
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
          </motion.div>

          <div className='react'>
            <GrReactjs className='react' />
          </div>
          <div className='javascript'>
            <DiJavascript1 className='javascript' />
          </div>
          <div className='html'>
            <AiFillHtml5 className='html' />
          </div>
          <div className='css'>
            <SiCss3 className='css' />
          </div>

          <div className='bubbles-top'>
            <div className='bubble'></div>
            <div className='bubble'></div>
            <div className='bubble'></div>
            <div className='bubble'></div>
            <div className='bubble'></div>
            <div className='bubble'></div>
            <div className='bubble'></div>
            <div className='bubble'></div>
            <div className='bubble'></div>
            <div className='bubble'></div>
            <div className='bubble'></div>
            <div className='bubble'></div>
            <div className='bubble'></div>
            <div className='bubble'></div>
            <div className='bubble'></div>
            <div className='bubble'></div>
            <div className='bubble'></div>
            <div className='bubble'></div>
            <div className='bubble'></div>
          </div>
          <div className='bubbles-bottom'>
            <div className='bubble'></div>
            <div className='bubble'></div>
            <div className='bubble'></div>
            <div className='bubble'></div>
            <div className='bubble'></div>
            <div className='bubble'></div>
            <div className='bubble'></div>
            <div className='bubble'></div>
            <div className='bubble'></div>
            <div className='bubble'></div>
            <div className='bubble'></div>
            <div className='bubble'></div>
            <div className='bubble'></div>
            <div className='bubble'></div>
            <div className='bubble'></div>
            <div className='bubble'></div>
            <div className='bubble'></div>
            <div className='bubble'></div>
            <div className='bubble'></div>
          </div>
        </Wrapper>
      </motion.section>
    </>
  );
};
const Wrapper = styled.section`
  position: relative;
  overflow: hidden;
  height: 100vh;
  .date {
    position: absolute;
    bottom: 20px;
    right: 20px;
  }
  li {
    cursor: pointer;
    padding: 10px;
    position: relative;
    transition: all 0.4s ease-in;
    :hover {
      scale: 1.08;
    }
  }
  
  .home {
    font-size: 30px;
  }
  .nav {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .link {
    font-size: 17px;
    text-decoration: none;
    color: #fff;
  }
  .socials {
    position: absolute;
    bottom: 50px;
    left: 15px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
    justify-content: center;
  }
  .socials a {
    color: #fff;
    font-size: 20px;
    transition: all 0.4s ease-in;
    :hover {
      scale: 1.2;
    }
  }
  .socials::after {
    content: '';
    width: 1px;
    height: 6rem;
    background-color: #fff;
  }
  .react {
    font-size: 30px;
    position: fixed;
    top: 20%;
    right: 30%;
  }
  .javascript {
    font-size: 30px;
    position: fixed;
    bottom: 20%;
    left: 30%;
  }
  .html {
    font-size: 30px;
    position: fixed;
    bottom: 20%;
    right: 30%;
  }
  .css {
    font-size: 30px;
    position: fixed;
    top: 20%;
    left: 30%;
  }
  .html,
  .css,
  .javascript,
  .react {
    -webkit-animation: react 3s linear infinite;
    -moz-animation: react 3s linear infinite;
    animation: react 3s liner infinite;
  }
  .bubbles-bottom .bubble {
    width: 20px;
    animation: bubble 7s linear infinite;
  }
  .bubble {
    height: 20px;
    width: 20px;
    background-color: grey;
    border-radius: 50%;
  }
  .bubbles-top .bubble {
    width: 20px;
    animation: bubbles 7s linear infinite;
  }
  .bubbles-bottom {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: absolute;
    bottom: -100px;
  }
  .bubbles-top {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: absolute;
    top: -100px;
  }
  @media screen and (max-width: 500px) {
    .link{
      font-size: 15px;
    }
  }
  @-webkit-keyframes react {
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @-moz-keyframes react {
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes react {
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes bubble {
    0% {
      transform: translateY(0);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    70% {
      opacity: 1;
    }
    100% {
      transform: translateY(-100vh);
      opacity: 0;
    }
  }
  @keyframes bubbles {
    0% {
      transform: translateY(0);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    70% {
      opacity: 1;
    }
    100% {
      transform: translateY(100vh);
      opacity: 0;
    }
  }
  .bubbles-bottom .bubble:nth-child(1) {
    animation-delay: 2s;
  }
  .bubbles-bottom .bubble:nth-child(2) {
    animation-delay: 1s;
  }
  .bubbles-bottom .bubble:nth-child(3) {
    animation-delay: 3s;
  }
  .bubbles-bottom .bubble:nth-child(4) {
    animation-delay: 4.5s;
  }
  .bubbles-bottom .bubble:nth-child(5) {
    animation-delay: 3s;
  }
  .bubbles-bottom .bubble:nth-child(6) {
    animation-delay: 6s;
  }
  .bubbles-bottom .bubble:nth-child(7) {
    animation-delay: 7s;
  }
  .bubbles-bottom .bubble:nth-child(8) {
    animation-delay: 2s;
  }
  .bubbles-bottom .bubble:nth-child(9) {
    animation-delay: 1s;
  }
  .bubbles-bottom .bubble:nth-child(10) {
    animation-delay: 3s;
  }
  .bubbles-bottom .bubble:nth-child(11) {
    animation-delay: 4.5s;
  }
  .bubbles-bottom .bubble:nth-child(12) {
    animation-delay: 3s;
  }
  .bubbles-bottom .bubble:nth-child(13) {
    animation-delay: 6s;
  }
  .bubbles-bottom .bubble:nth-child(14) {
    animation-delay: 7s;
  }
  .bubbles-bottom .bubble:nth-child(15) {
    animation-delay: 2s;
  }
  .bubbles-bottom .bubble:nth-child(16) {
    animation-delay: 1s;
  }
  .bubbles-bottom .bubble:nth-child(17) {
    animation-delay: 3s;
  }
  .bubbles-bottom .bubble:nth-child(18) {
    animation-delay: 4.5s;
  }

  .bubbles-top .bubble:nth-child(1) {
    animation-delay: 7s;
  }
  .bubbles-top .bubble:nth-child(2) {
    animation-delay: 6s;
  }
  .bubbles-top .bubble:nth-child(3) {
    animation-delay: 5.5s;
  }
  .bubbles-top .bubble:nth-child(4) {
    animation-delay: 6.5s;
  }
  .bubbles-top .bubble:nth-child(5) {
    animation-delay: 4.5s;
  }
  .bubbles-top .bubble:nth-child(6) {
    animation-delay: 1s;
  }
  .bubbles-top .bubble:nth-child(7) {
    animation-delay: 2s;
  }
  .bubbles-top .bubble:nth-child(8) {
    animation-delay: 7s;
  }
  .bubbles-top .bubble:nth-child(9) {
    animation-delay: 6s;
  }
  .bubbles-top .bubble:nth-child(10) {
    animation-delay: 5.5s;
  }
  .bubbles-top .bubble:nth-child(11) {
    animation-delay: 6.5s;
  }
  .bubbles-top .bubble:nth-child(12) {
    animation-delay: 4.5s;
  }
  .bubbles-top .bubble:nth-child(13) {
    animation-delay: 1s;
  }
  .bubbles-top .bubble:nth-child(14) {
    animation-delay: 2s;
  }
  .bubbles-top .bubble:nth-child(15) {
    animation-delay: 2s;
  }
  .bubbles-top .bubble:nth-child(16) {
    animation-delay: 1s;
  }
  .bubbles-top .bubble:nth-child(17) {
    animation-delay: 3s;
  }
  .bubbles-top .bubble:nth-child(18) {
    animation-delay: 6s;
  }
`;
export default Navbar;
