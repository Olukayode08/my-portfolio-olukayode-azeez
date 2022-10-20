import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { GrTwitter } from 'react-icons/gr';
import bubbles from '../assets/bubble.png';

const Navbar = () => {
  return (
    <>
      <section>
        <Wrapper>
          <nav>
            <li className='link-home'>
              <Link className='link' to='/'>
                Home
              </Link>
            </li>
            <li className='link-about'>
              <Link className='link' to='/about'>
                About
              </Link>
            </li>
            <li className='link-skills'>
              <Link className='link' to='/skills'>
                Skills
              </Link>
            </li>
            <li className='link-projects'>
              <Link className='link' to='/projects'>
                Projects
              </Link>
            </li>
            <li className='link-contact'>
              <Link className='link' to='/contact'>
                Contact
              </Link>
            </li>
          </nav>
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
          <div className='bubbles-top'>
            <img src={bubbles} alt='bubble' />
            <img src={bubbles} alt='bubble' />
            <img src={bubbles} alt='bubble' />
            <img src={bubbles} alt='bubble' />
            <img src={bubbles} alt='bubble' />
            <img src={bubbles} alt='bubble' />
            <img src={bubbles} alt='bubble' />
            <img src={bubbles} alt='bubble' />
            <img src={bubbles} alt='bubble' />
            <img src={bubbles} alt='bubble' />
            <img src={bubbles} alt='bubble' />
            <img src={bubbles} alt='bubble' />
            <img src={bubbles} alt='bubble' />
            <img src={bubbles} alt='bubble' />
            <img src={bubbles} alt='bubble' />
            <img src={bubbles} alt='bubble' />
            <img src={bubbles} alt='bubble' />
            <img src={bubbles} alt='bubble' />
            <img src={bubbles} alt='bubble' />
            <img src={bubbles} alt='bubble' />
            <img src={bubbles} alt='bubble' />
            <img src={bubbles} alt='bubble' />
            <img src={bubbles} alt='bubble' />
            <img src={bubbles} alt='bubble' />
            <img src={bubbles} alt='bubble' />
            <img src={bubbles} alt='bubble' />
            <img src={bubbles} alt='bubble' />
            <img src={bubbles} alt='bubble' />
          </div>
          <div className='bubbles-bottom'>
            <img src={bubbles} alt='bubble' />
            <img src={bubbles} alt='bubble' />
            <img src={bubbles} alt='bubble' />
            <img src={bubbles} alt='bubble' />
            <img src={bubbles} alt='bubble' />
            <img src={bubbles} alt='bubble' />
            <img src={bubbles} alt='bubble' />
            <img src={bubbles} alt='bubble' />
            <img src={bubbles} alt='bubble' />
            <img src={bubbles} alt='bubble' />
            <img src={bubbles} alt='bubble' />
            <img src={bubbles} alt='bubble' />
            <img src={bubbles} alt='bubble' />
            <img src={bubbles} alt='bubble' />
            <img src={bubbles} alt='bubble' />
            <img src={bubbles} alt='bubble' />
            <img src={bubbles} alt='bubble' />
            <img src={bubbles} alt='bubble' />
            <img src={bubbles} alt='bubble' />
            <img src={bubbles} alt='bubble' />
            <img src={bubbles} alt='bubble' />
            <img src={bubbles} alt='bubble' />
            <img src={bubbles} alt='bubble' />
            <img src={bubbles} alt='bubble' />
            <img src={bubbles} alt='bubble' />
            <img src={bubbles} alt='bubble' />
            <img src={bubbles} alt='bubble' />
            <img src={bubbles} alt='bubble' />
          </div>
        </Wrapper>
      </section>
    </>
  );
};
const Wrapper = styled.section`
  position: relative;
  overflow: hidden;
  height: 100vh;
  li {
    cursor: pointer;
    padding: 10px;
    color: #fff;
  }
  .link {
    font-size: 18px;
    text-decoration: none;
    color: #fff;
  }
  .link-home {
    position: absolute;
    top: 20px;
    right: 50%;
  }
  .link-about {
    position: absolute;
    top: 20px;
    right: 20px;
  }
  .link-skills {
    position: absolute;
    top: 20px;
    left: 20px;
  }
  .link-projects {
    position: absolute;
    right: 50%;
    bottom: 0;
  }
  .link-contact {
    position: absolute;
    bottom: 50%;
    right: -18px;
    transform: rotate(90deg);
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
  }
  .socials::after {
    content: '';
    width: 1px;
    height: 6rem;
    background-color: #fff;
  }
  .bubbles-bottom img {
    width: 20px;
    animation: bubble 7s linear infinite;
  }
  .bubbles-top img {
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
  .bubbles-bottom img:nth-child(1) {
    animation-delay: 2s;
  }
  .bubbles-bottom img:nth-child(2) {
    animation-delay: 1s;
  }
  .bubbles-bottom img:nth-child(3) {
    animation-delay: 3s;
  }
  .bubbles-bottom img:nth-child(4) {
    animation-delay: 4.5s;
  }
  .bubbles-bottom img:nth-child(5) {
    animation-delay: 3s;
  }
  .bubbles-bottom img:nth-child(6) {
    animation-delay: 6s;
  }
  .bubbles-bottom img:nth-child(7) {
    animation-delay: 7s;
  }
  .bubbles-bottom img:nth-child(8) {
    animation-delay: 2s;
  }
  .bubbles-bottom img:nth-child(9) {
    animation-delay: 1s;
  }
  .bubbles-bottom img:nth-child(10) {
    animation-delay: 3s;
  }
  .bubbles-bottom img:nth-child(11) {
    animation-delay: 4.5s;
  }
  .bubbles-bottom img:nth-child(12) {
    animation-delay: 3s;
  }
  .bubbles-bottom img:nth-child(13) {
    animation-delay: 6s;
  }
  .bubbles-bottom img:nth-child(14) {
    animation-delay: 7s;
  }
  .bubbles-bottom img:nth-child(15) {
    animation-delay: 2s;
  }
  .bubbles-bottom img:nth-child(16) {
    animation-delay: 1s;
  }
  .bubbles-bottom img:nth-child(17) {
    animation-delay: 3s;
  }
  .bubbles-bottom img:nth-child(18) {
    animation-delay: 4.5s;
  }
  .bubbles-bottom img:nth-child(19) {
    animation-delay: 3s;
  }
  .bubbles-bottom img:nth-child(20) {
    animation-delay: 6s;
  }
  .bubbles-bottom img:nth-child(21) {
    animation-delay: 7s;
  }
  .bubbles-bottom img:nth-child(22) {
    animation-delay: 2s;
  }
  .bubbles-bottom img:nth-child(23) {
    animation-delay: 1s;
  }
  .bubbles-bottom img:nth-child(24) {
    animation-delay: 3s;
  }
  .bubbles-bottom img:nth-child(25) {
    animation-delay: 4.5s;
  }
  .bubbles-bottom img:nth-child(26) {
    animation-delay: 3s;
  }
  .bubbles-bottom img:nth-child(27) {
    animation-delay: 6s;
  }
  .bubbles-bottom img:nth-child(28) {
    animation-delay: 7s;
  }

  .bubbles-top img:nth-child(1) {
    animation-delay: 7s;
  }
  .bubbles-top img:nth-child(2) {
    animation-delay: 6s;
  }
  .bubbles-top img:nth-child(3) {
    animation-delay: 5.5s;
  }
  .bubbles-top img:nth-child(4) {
    animation-delay: 6.5s;
  }
  .bubbles-top img:nth-child(5) {
    animation-delay: 4.5s;
  }
  .bubbles-top img:nth-child(6) {
    animation-delay: 1s;
  }
  .bubbles-top img:nth-child(7) {
    animation-delay: 2s;
  }
  .bubbles-top img:nth-child(8) {
    animation-delay: 7s;
  }
  .bubbles-top img:nth-child(9) {
    animation-delay: 6s;
  }
  .bubbles-top img:nth-child(10) {
    animation-delay: 5.5s;
  }
  .bubbles-top img:nth-child(11) {
    animation-delay: 6.5s;
  }
  .bubbles-top img:nth-child(12) {
    animation-delay: 4.5s;
  }
  .bubbles-top img:nth-child(13) {
    animation-delay: 1s;
  }
  .bubbles-top img:nth-child(14) {
    animation-delay: 2s;
  }
  .bubbles-top img:nth-child(15) {
    animation-delay: 2s;
  }
  .bubbles-top img:nth-child(16) {
    animation-delay: 1s;
  }
  .bubbles-top img:nth-child(17) {
    animation-delay: 3s;
  }
  .bubbles-top img:nth-child(18) {
    animation-delay: 4.5s;
  }
  .bubbles-top img:nth-child(19) {
    animation-delay: 3s;
  }
  .bubbles-top img:nth-child(20) {
    animation-delay: 6s;
  }
  .bubbles-top img:nth-child(21) {
    animation-delay: 7s;
  }
  .bubbles-top img:nth-child(22) {
    animation-delay: 2s;
  }
  .bubbles-top img:nth-child(23) {
    animation-delay: 1s;
  }
  .bubbles-top img:nth-child(24) {
    animation-delay: 3s;
  }
  .bubbles-top img:nth-child(25) {
    animation-delay: 4.5s;
  }
  .bubbles-top img:nth-child(26) {
    animation-delay: 3s;
  }
  .bubbles-top img:nth-child(27) {
    animation-delay: 6s;
  }
  .bubbles-top img:nth-child(28) {
    animation-delay: 7s;
  }
`;
export default Navbar;
