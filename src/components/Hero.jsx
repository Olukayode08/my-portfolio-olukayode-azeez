import React, { useContext } from 'react';
import styled from 'styled-components';
import Cv from '../assets/Olukayode.pdf';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { GrTwitter } from 'react-icons/gr';
import { GlobalContext } from '../context/Context';

const Hero = () => {
  const { active, setActive } = useContext(GlobalContext);

  return (
    <>
      <section id='hero'>
        <Wrapper>
          <nav>
            <li className='link-home'>
              <Link
                onClick={() => setActive('home')}
                className={active === 'home' ? 'active' : 'link'}
                to='/'
              >
                Home
              </Link>
            </li>
            <li className='link-about'>
              <Link
                onClick={() => setActive('about')}
                className={active === 'about' ? 'active' : 'link'}
                to='/about'
              >
                About
              </Link>
            </li>
            <li className='link-skills'>
              <Link
                onClick={() => setActive('skills')}
                className={active === 'skills' ? 'active' : 'link'}
                to='/skills'
              >
                Skills
              </Link>
            </li>
            <li className='link-projects'>
              <Link
                onClick={() => setActive('projects')}
                className={active === 'projects' ? 'active' : 'link'}
                to='/projects'
              >
                Projects
              </Link>
            </li>
            <li className='link-contact'>
              <Link
                onClick={() => setActive('contact')}
                className={active === 'contact' ? 'active' : 'link'}
                to='contact'
              >
                Contact
              </Link>
            </li>
          </nav>
          <main>
            <h3>Hello I'm</h3>
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
  .socials {
    position: absolute;
    bottom: 50px;
    left: 50px;
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
  /* Nav */
  li {
    cursor: pointer;
    padding: 10px;
    color: #fff;
  }
  .link {
    font-size: 22px;
    text-decoration: none;
    color: #fff;
  }
  .active {
    opacity: 0;
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
    left: 50%;
    bottom: 0;
  }
  .link-contact {
    position: absolute;
    bottom: 50%;
    right: 0;
    transform: rotate(90deg);
  }
`;
export default Hero;
