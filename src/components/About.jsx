import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <>
      <section id='about'>
        <Wrapper>
          <main>
            <h2>About</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur repellat, saepe molestias aut totam voluptatem dicta
              beatae officiis modi ipsum nemo consequuntur adipisci. Tenetur
              optio, eius minus esse rem natus consequatur ex eaque repellendus?
              Excepturi rem doloremque voluptate ducimus optio nam quisquam,
              quaerat id, quis incidunt consectetur voluptatum quod quo.
            </p>
          </main>
        </Wrapper>
      </section>
    </>
  );
};
const Wrapper = styled.section`
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 90vh;
    padding: 60px;
    border: 1px solid yellow;
    h2 {
      font-size: 55px;
    }
    p {
      max-width: 800px;
      justify-content: center;
      text-align: center;
      font-size: 25px;
    }
  }
`;
export default About;
