import React from 'react';
import styled from 'styled-components';
import { projects } from '../data';
const Projects = () => {
  return (
    <>
      <section>
        <Wrapper>
          <h5>Projects</h5>

          <main className='main'>
            {projects.map((project) => {
              const { id, img, text, github, demo } = project;
              return (
                <div key={id} className='projects'>
                  <div className='img-desc'>
                    <img src={img} alt='Olukayode' />
                    <p>{text}</p>
                  </div>
                  <div className='github-demo'>
                    <a href={github}>Github</a>
                    <a href={demo}>Live Demo</a>
                  </div>
                </div>
              );
            })}
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
    font-family: 'Source Serif Pro';
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
    width: 300px;
    margin: auto;
    text-align: center;
    padding: 20px 0;
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
  @media screen and (max-width: 900px) {
    width: 85vw;
  }
`;
export default Projects;
