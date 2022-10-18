import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <>
      <section>
        <Wrapper>
          <main>
            <h5>About</h5>
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
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  h5 {
    font-family: 'Source Serif Pro';
    font-weight: 600;
    font-size: 55px;
  }
  p {
    text-align: center;
    font-size: 25px;
  }

  @media screen and (max-width: 550px) {
    p {
      font-size: 20px;
      width: 300px;
    }
  }
  @media screen and (max-width: 280px) {
    p {
      font-size: 17px;
      width: 220px;
    }
    h5{
      font-size: 40px;
    }
  }
`;
export default About;
