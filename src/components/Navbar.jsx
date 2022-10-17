import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/Context';

const Navbar = () => {
  const { active, setActive } = useContext(GlobalContext);
  return (
    <>
      <section>
        <Wrapper>
          
        </Wrapper>
      </section>
    </>
  );
};
const Wrapper = styled.section`
  position: relative;
  height: 100vh;
  
`;
export default Navbar;
