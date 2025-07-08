import React from 'react';
import styled from 'styled-components';
import { projects } from '../data';


const Projects = () => {
  return (
    <>
      <section>
        <Wrapper>
          <h5 className='about'>Projects</h5>
          <main className='main'>
            {projects.map((project, index) => (
              <div key={index} className='projects'>
                <div className='img-desc'>
                  <img src={project.img} alt='Olukayode' />
                  <p>{project.text}</p>
                </div>
                <div className='github-demo'>
                  <a target='_blank' rel='noreferrer' href={project.demo}>
                    Live Demo
                  </a>
                </div>
              </div>
            ))}
          </main>
        </Wrapper>
      </section>
    </>
  )
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
    width: 420px;
    height: 380px;
    padding: 10px;
    margin: 10px;
    border: 1px solid grey;
    border-radius: 15px;
    overflow: auto;
  }
  img {
    width: 300px;
    height: 120px;
    transition: all 0.2s ease-in;
    :hover {
      scale: 1.05;
      filter: brightness(103%);
    }
  }
  p {
    font-size: 18px;
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
    width: 100%;
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
    width: 95%;
    height: 40px;
    border-radius: 10px;
    transition: all 0.2s ease-in;
    :hover {
      color: #000;
      background-color: #fff;
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
  @media screen and (max-width: 900px) {
    width: 95vw;
  }
`;
export default Projects;
