import React from 'react';
import styled from 'styled-components';
import { projects } from '../data';
import { motion } from 'framer-motion';


const projectVariant = {
  initial: {
    scale: 0,
    opacity: 0,
  },
  final: {
    opacity: 1,
    scale: 1,
  },
  transition: { type: 'spring', stiffness: 10, duration: 0.8 },
};
const Projects = () => {
  return (
    <>
      <motion.section
        transition={{ staggerChildren: 0.3 }}
        initial='initial'
        whileInView={'final'}
        exit={{ opacity: 0, duration: 2 }}
        viewport={{ once: false, amount: 0.1 }}
      >
        <Wrapper>
          <h5 className='about'>Projects</h5>

          <main className='main'>
            {projects.map((project) => {
              const { id, img, text, github, demo } = project;
              return (
                <motion.div variants={projectVariant} key={id} className='projects'>
                  <div className='img-desc'>
                    <img src={img} alt='Olukayode' />
                    <p>{text}</p>
                  </div>
                  <div className='github-demo'>
                    <a href={github}>Github</a>
                    <a href={demo}>Live Demo</a>
                  </div>
                </motion.div>
              );
            })}
          </main>
        </Wrapper>
      </motion.section>
    </>
  );
};
const Wrapper = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: auto;
  width: 70vw;
  height: 70%;
  .main {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    overflow: auto;
  }
  h5 {
    font-weight: 600;
    font-size: 45px;
    text-align: center;
  }
  .projects {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 0 auto;
    width: 350px;
    height: 300px;
    padding: 10px;
    margin: 10px;
    border: 1px solid grey;
    border-radius: 15px;
    overflow: auto;
  }
  img {
    width: 75%;
    transition: all 0.2s ease-in;
    :hover {
      scale: 1.05;
      filter: brightness(103%);
    }
  }
  p {
    font-size: 18px;
    width: 350px;
    margin: auto;
    text-align: center;
    padding: 20px 10px;
    border-bottom: 1px solid grey;
  }
  .github-demo {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 0 0 0;
  }
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    border: 1px solid grey;
    color: #fff;
    margin: 5px 8px;
    width: 90px;
    height: 40px;
    border-radius: 10px;
    transition: all 0.2s ease-in;
    :hover {
      color: #000;
      background-color: #fff;
    }
  }
  .about {
    -webkit-animation: about 0.8s cubic-bezier(0.215, 0.61, 0.355, 1) both;
    animation: about 0.8s cubic-bezier(0.215, 0.61, 0.355, 1) both;
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
  @media screen and (max-width: 900px) {
    width: 85vw;
  }
`;
export default Projects;
