import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <>
      <section>
        <Wrapper>
          <main>
            <li>
              <Link
                className='link'
                to='hero'
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Home
              </Link>
            </li>
          </main>
        </Wrapper>
      </section>
    </>
  );
}
const Wrapper = styled.section`


`
export default Navbar
